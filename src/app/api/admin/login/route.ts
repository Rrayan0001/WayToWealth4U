import { NextResponse } from "next/server";

import { attachAdminSession, verifyAdminCredentials } from "@/lib/adminAuth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  if (!verifyAdminCredentials(email, password)) {
    return NextResponse.redirect(new URL("/admin?auth=invalid", request.url), { status: 303 });
  }

  const response = NextResponse.redirect(new URL("/admin", request.url), { status: 303 });

  return attachAdminSession(response);
}
