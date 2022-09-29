// import { unstable_getServerSession   } from 'next-auth/next'

// export async function middleware(request) {
//     if (request.nextUrl.pathname.startsWith('/user')) {
//         const session = await unstable_getServerSession({})
//         console.log(session)
//     }
  
//     if (request.nextUrl.pathname.startsWith('/dashboard')) {
//       // This logic is only applied to /dashboard
//     }
//   }


export { default } from "next-auth/middleware"

export const config = { matcher: ["/user"] }

//   export default withAuth(
//     // `withAuth` augments your `Request` with the user's token.
//     function middleware(req) {
//       console.log(req.nextauth.token)
//     },
//     {
//       callbacks: {
//         authorized: ({ token }) => token?.role === "admin",
//       },
//     }
//   )
  
//   export const config = { matcher: ["/user"] }