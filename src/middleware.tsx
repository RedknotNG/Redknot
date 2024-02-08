import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const redknot_admin = request.cookies.get("redknot_admin");

  if (request.nextUrl.pathname === "/admin" && !!redknot_admin) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/dashboard";
    return NextResponse.redirect(url);
  }

  if (request.nextUrl.pathname.includes("/admin/dashboard") && !redknot_admin) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }

  if (
    request.nextUrl.pathname.includes("/admin/earner-levels") &&
    !redknot_admin
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    return NextResponse.redirect(url);
  }
}
