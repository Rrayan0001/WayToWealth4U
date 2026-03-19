import { NextResponse } from "next/server";

import { clearAdminSession } from "@/lib/adminAuth";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/admin", request.url), { status: 303 });

  return clearAdminSession(response);
}
