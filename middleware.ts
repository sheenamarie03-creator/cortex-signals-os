import { NextResponse, type NextRequest } from "next/server";

const privateProductionPaths = ["/tracker"];

function isPrivateProductionPath(pathname: string) {
  return privateProductionPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === "production" && isPrivateProductionPath(request.nextUrl.pathname)) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/tracker/:path*"],
};
