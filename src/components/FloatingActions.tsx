"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

import styles from "./FloatingActions.module.css";

export function FloatingActions() {
  const [isAgentOpen, setIsAgentOpen] = useState(false);
  const popupId = useId();
  const headingId = `${popupId}-title`;

  useEffect(() => {
    if (!isAgentOpen) {
      return;
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsAgentOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isAgentOpen]);

  return (
    <>
      {isAgentOpen ? (
        <button type="button" className={styles.overlay} onClick={() => setIsAgentOpen(false)} aria-hidden />
      ) : null}

      {isAgentOpen ? (
        <section id={popupId} className={styles.agentPopup} role="dialog" aria-modal="true" aria-labelledby={headingId}>
          <div className={styles.agentHeader}>
            <h2 id={headingId}>Growth Assistant</h2>
            <button type="button" className={styles.closePopup} onClick={() => setIsAgentOpen(false)} aria-label="Close AI agent popup">
              ×
            </button>
          </div>
          <p>
            Ask your question and get guided support for loans, cards, and growth planning through the WealthRise assistant.
          </p>
          <Link href="/contact#ai-assistant" className="button buttonPrimary" onClick={() => setIsAgentOpen(false)}>
            Open Assistant
          </Link>
        </section>
      ) : null}

      <div className={styles.stack} aria-label="Quick actions">
        <button
          type="button"
          className={styles.ai}
          aria-label="Open AI agent popup"
          aria-haspopup="dialog"
          aria-expanded={isAgentOpen}
          aria-controls={popupId}
          onClick={() => setIsAgentOpen((current) => !current)}
        >
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M12 2.5a1 1 0 0 1 .96.73l.7 2.3a3.2 3.2 0 0 0 2.1 2.1l2.31.7a1 1 0 0 1 0 1.92l-2.3.7a3.2 3.2 0 0 0-2.1 2.1l-.71 2.31a1 1 0 0 1-1.92 0l-.7-2.3a3.2 3.2 0 0 0-2.1-2.1l-2.31-.71a1 1 0 0 1 0-1.92l2.3-.7a3.2 3.2 0 0 0 2.1-2.1l.71-2.31a1 1 0 0 1 .96-.72Zm6.4 13.1a.8.8 0 0 1 .78.6l.37 1.2c.14.46.5.83.96.97l1.2.36a.8.8 0 0 1 0 1.54l-1.2.37a1.5 1.5 0 0 0-.97.96l-.36 1.2a.8.8 0 0 1-1.54 0l-.37-1.2a1.5 1.5 0 0 0-.96-.96l-1.2-.37a.8.8 0 0 1 0-1.54l1.2-.36a1.5 1.5 0 0 0 .96-.97l.37-1.2a.8.8 0 0 1 .76-.6Zm-12.8.6a.7.7 0 0 1 .68.5l.24.8c.1.34.37.6.7.7l.8.25a.7.7 0 0 1 0 1.34l-.8.24c-.34.1-.6.36-.7.7l-.24.8a.7.7 0 0 1-1.34 0l-.25-.8a1.1 1.1 0 0 0-.7-.7l-.8-.24a.7.7 0 0 1 0-1.34l.8-.25c.34-.1.6-.36.7-.7l.25-.8a.7.7 0 0 1 .66-.5Z" />
          </svg>
        </button>

        <a
          href="https://wa.me/919000000000"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsapp}
          aria-label="Open WhatsApp chat"
        >
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M12.02 2c5.44 0 9.84 4.37 9.84 9.76 0 5.39-4.4 9.76-9.84 9.76-1.72 0-3.33-.43-4.73-1.2L2 22l1.75-5.15a9.63 9.63 0 0 1-1.57-5.09C2.18 6.37 6.58 2 12.02 2Zm-.02 2.03a7.74 7.74 0 0 0-7.79 7.73c0 1.49.43 2.92 1.23 4.15l.2.29-1.02 2.99 3.1-1 .29.17a7.9 7.9 0 0 0 3.99 1.1 7.74 7.74 0 0 0 7.79-7.7A7.74 7.74 0 0 0 12 4.03Zm4.37 10.13c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.55.12-.16.24-.63.78-.77.94-.14.16-.28.18-.53.06-.24-.12-1.02-.37-1.95-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.5.1-.1.24-.27.37-.4.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.42-.55-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03 0 1.2.87 2.36.99 2.52.12.16 1.7 2.58 4.12 3.62.58.25 1.03.4 1.38.51.58.18 1.11.15 1.53.09.47-.07 1.42-.58 1.62-1.14.2-.57.2-1.06.14-1.17-.06-.11-.22-.17-.46-.29Z" />
          </svg>
        </a>
      </div>
    </>
  );
}
