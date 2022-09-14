import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const response = NextResponse.next();
  console.log("middleware-----------------------", response);
  return response;
}

export const config = {
  matcher: "/",
};
