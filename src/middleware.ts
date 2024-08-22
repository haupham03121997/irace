import { NextRequest, NextResponse } from "next/server";
import nookies from "nookies";

export function middleware(request: NextRequest) {
  const cookies = nookies.get(null, { request });

  console.log("cookies", request.cookies.get("user"));

  // how to use zustand in middleware

  const url = request.nextUrl.pathname;
  console.log("url", url);
  return NextResponse.next();
}
