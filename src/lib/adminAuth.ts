import { createHash, timingSafeEqual } from "node:crypto";

import type { NextResponse } from "next/server";
import { cookies } from "next/headers";

const ADMIN_SESSION_COOKIE = "wealthrise_admin_session";

function createDigest(value: string) {
  return createHash("sha256").update(value).digest();
}

function getAdminEmail() {
  return (process.env.ADMIN_EMAIL?.trim() || "info@wealthrisecapitals.com").toLowerCase();
}

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD?.trim() || "WealthRise@2026";
}

function getAdminSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET?.trim() || "wealthrise-admin-session-secret";
}

function getSessionToken() {
  const payload = `${getAdminEmail()}::${getAdminPassword()}::${getAdminSessionSecret()}`;
  return createHash("sha256").update(payload).digest("hex");
}

export function getAdminCookieName() {
  return ADMIN_SESSION_COOKIE;
}

export function getConfiguredAdminEmail() {
  return getAdminEmail();
}

export function verifyAdminCredentials(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPassword = password.trim();

  const expectedEmail = createDigest(getAdminEmail());
  const providedEmail = createDigest(normalizedEmail);
  const expectedPassword = createDigest(getAdminPassword());
  const providedPassword = createDigest(normalizedPassword);

  return timingSafeEqual(expectedEmail, providedEmail) && timingSafeEqual(expectedPassword, providedPassword);
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

  if (!token) {
    return false;
  }

  const expectedToken = getSessionToken();
  const expectedBuffer = createDigest(expectedToken);
  const tokenBuffer = createDigest(token);

  return timingSafeEqual(expectedBuffer, tokenBuffer);
}

export function attachAdminSession(response: NextResponse) {
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: getSessionToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return response;
}

export function clearAdminSession(response: NextResponse) {
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  return response;
}
