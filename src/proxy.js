import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function  proxy(request) {
  const sesson = await auth.api.getSession({
    headers:await headers()
    
  })
  if(!sesson){
        return NextResponse.redirect(new URL('/signin', request.url))

  }
}
 
export const config = {
  matcher: ['/my-profile','/all-tiles/:path']
}