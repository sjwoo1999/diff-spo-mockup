// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log(`[Middleware] 요청된 경로: ${pathname}`);

  if (pathname === '/') {
    console.log('[Middleware] 루트 경로 "/" 감지됨. /login으로 리다이렉트합니다.');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (pathname === '/auth/login/onboarding') {
    console.log('[Middleware] /auth/login/onboarding 경로 감지됨. 이 요청은 통과시킵니다.');
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|assets).*)',
  ],
};