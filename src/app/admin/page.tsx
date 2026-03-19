import Link from "next/link";
import type { Metadata } from "next";

import { getConfiguredAdminEmail, isAdminAuthenticated } from "@/lib/adminAuth";
import {
  getSubmissionCounts,
  getSubmissionsByType,
  type SubmissionRecord,
  type SubmissionType,
} from "@/lib/submissions";

import styles from "./admin.module.css";

export const metadata: Metadata = {
  title: "Admin",
  description: "Owner dashboard for WealthRise Capitals inquiry submissions.",
  robots: {
    index: false,
    follow: false,
  },
};

type AdminPageProps = {
  searchParams: Promise<{
    auth?: string;
    view?: string;
  }>;
};

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "medium",
  timeStyle: "short",
});

function getActiveView(view: string | undefined): SubmissionType {
  return view === "agent_inquiry" ? "agent_inquiry" : "user_inquiry";
}

function getViewTitle(view: SubmissionType) {
  return view === "agent_inquiry" ? "Agent Inquiry" : "User Inquiry";
}

function renderSubmissionCard(submission: SubmissionRecord) {
  const detailItems = [
    { label: "Email", value: submission.email },
    { label: "Mobile", value: submission.mobile },
    { label: "Location", value: submission.location },
    { label: "Service", value: submission.service },
    { label: "Amount", value: submission.amount },
    { label: "Message", value: submission.message },
  ].filter((item) => item.value);

  return (
    <article key={submission.id} className={styles.submissionCard}>
      <div className={styles.submissionHeader}>
        <div>
          <h3>{submission.name}</h3>
          <p className={styles.submissionMeta}>Source: {submission.source}</p>
        </div>
        <p className={styles.timestamp}>{dateFormatter.format(new Date(submission.createdAt))}</p>
      </div>

      <dl className={styles.detailGrid}>
        {detailItems.map((item) => (
          <div key={item.label} className={styles.detailItem}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>

      <pre className={styles.payload}>{JSON.stringify(submission.payload, null, 2)}</pre>
    </article>
  );
}

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const params = await searchParams;
  const authenticated = await isAdminAuthenticated();
  const authFailed = params.auth === "invalid";

  if (!authenticated) {
    return (
      <div className={styles.page}>
        <div className={`${styles.shell} ${styles.loginShell}`}>
          <section className={styles.loginCard}>
            <p className={styles.eyebrow}>Owner Access</p>
            <h1>Admin Login</h1>
            <p className={styles.loginLead}>
              Sign in with the owner email and password to review website submissions from users and agents.
            </p>

            <form action="/api/admin/login" method="post" className={styles.loginForm}>
              <div className={styles.field}>
                <label htmlFor="admin-email">Email</label>
                <input id="admin-email" name="email" type="email" defaultValue={getConfiguredAdminEmail()} required />
              </div>

              <div className={styles.field}>
                <label htmlFor="admin-password">Password</label>
                <input id="admin-password" name="password" type="password" placeholder="Enter your admin password" required />
              </div>

              <button type="submit" className="button buttonPrimary">
                Open Admin
              </button>
            </form>

            {authFailed ? <p className={styles.errorMessage}>The email or password did not match the admin account.</p> : null}

            <p className={styles.hint}>This page is private and is not linked from the public navigation.</p>
          </section>
        </div>
      </div>
    );
  }

  const activeView = getActiveView(params.view);
  let loadError = "";
  let counts: Record<SubmissionType, number> = {
    user_inquiry: 0,
    agent_inquiry: 0,
  };
  let submissions: SubmissionRecord[] = [];

  try {
    [counts, submissions] = await Promise.all([
      getSubmissionCounts(),
      getSubmissionsByType(activeView),
    ]);
  } catch (error) {
    console.error("Failed to load admin submissions", error);
    loadError = "We could not load the inquiry records right now. Please check the database connection and try again.";
  }

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.headerCopy}>
            <p className={styles.eyebrow}>Private Workspace</p>
            <h1>Submission Dashboard</h1>
            <p>Review every saved inquiry with separate views for customer leads and agent or channel partner interest.</p>
          </div>

          <div className={styles.headerActions}>
            <span className={styles.pill}>Admin: {getConfiguredAdminEmail()}</span>
            <form action="/api/admin/logout" method="post">
              <button type="submit" className="button buttonOutline">
                Log Out
              </button>
            </form>
          </div>
        </header>

        <section className={styles.dashboardGrid}>
          <div className={styles.topRow}>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>User Inquiry Total</span>
              <strong className={styles.statValue}>{counts.user_inquiry}</strong>
            </article>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Agent Inquiry Total</span>
              <strong className={styles.statValue}>{counts.agent_inquiry}</strong>
            </article>
            <article className={styles.statCard}>
              <span className={styles.statLabel}>Current View</span>
              <strong className={styles.statValue}>{getViewTitle(activeView)}</strong>
            </article>
          </div>

          <section className={styles.filterPanel}>
            <div>
              <p className={styles.eyebrow}>Inquiry Views</p>
              <p className={styles.loginLead}>Use the buttons below to switch between public user leads and agent or partner applications.</p>
            </div>

            <div className={styles.filterButtons}>
              <Link
                href="/admin?view=user_inquiry"
                className={`${styles.filterButton} ${activeView === "user_inquiry" ? styles.filterButtonActive : ""}`}
              >
                <span>User Inquiry</span>
                <span className={styles.countBadge}>{counts.user_inquiry}</span>
              </Link>
              <Link
                href="/admin?view=agent_inquiry"
                className={`${styles.filterButton} ${activeView === "agent_inquiry" ? styles.filterButtonActive : ""}`}
              >
                <span>Agent Inquiry</span>
                <span className={styles.countBadge}>{counts.agent_inquiry}</span>
              </Link>
            </div>
          </section>

          {loadError ? (
            <section className={styles.errorPanel}>
              <h2>Database Connection Needed</h2>
              <p>{loadError}</p>
            </section>
          ) : (
            <section className={styles.recordsPanel}>
              <div className={styles.recordsHeader}>
                <div>
                  <h2>{getViewTitle(activeView)}</h2>
                  <p>{submissions.length} saved records in this view.</p>
                </div>
              </div>

              {submissions.length > 0 ? (
                <div className={styles.recordsList}>{submissions.map(renderSubmissionCard)}</div>
              ) : (
                <div className={styles.emptyState}>
                  <h2>No submissions yet</h2>
                  <p>As soon as a website visitor submits this type of form, the full record will show up here.</p>
                </div>
              )}
            </section>
          )}
        </section>
      </div>
    </div>
  );
}
