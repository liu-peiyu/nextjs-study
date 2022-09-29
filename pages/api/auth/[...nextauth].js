import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
export const authOptions = {
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
            userName: { label: "Username", type: "text", placeholder: "jsmith" },
        },
        async authorize(credentials, req){
            // console.log('authorize', credentials)
            if(credentials.userName === 'admin'){
                return {username: credentials.userName, status: 1, accessToken:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'} 
            }
            return {status: 0}
        }
    }),
  ],
  secret: 'Hixz3Ym3cYuapMTI/dT+0abqNdBEORm47qcXwsxI2Pc=',
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 30,
    updateAge: 24 * 60 * 60,
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    }
  },
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 60 * 24 * 30,
    // You can define your own encode/decode functions for signing and encryption
    // async encode(params) {
    //   console.log('encode:   '+JSON.stringify(params))
    // },
    // async decode(params) {
    //   console.log('decode:   '+JSON.stringify(params))
    // },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin',
  },
  callbacks: {
    async signIn(credentials){
      // console.log('signIn', credentials)
        if(credentials?.user?.status === 0){
            return false
        }
        return true
    },
    async redirect({ url, baseUrl }) {
        // console.log(url, baseUrl)
        // // Allows relative callback URLs
        // if (url.startsWith("/")) return `${baseUrl}${url}`
        // // Allows callback URLs on the same origin
        // else if (new URL(url).origin === baseUrl) return url
        return baseUrl
    },
    async jwt({ token, user, account }) {
        console.log('jwt',token, user, account)
        if(user?.status === 1){
          token = user
        }
        return token
    },
    async session({session, user, token}){
        console.log('auth session', session, user, token)
        // session.user = window.localStorage.getItem("userInfo")
        session.user = token
        return session
    }
  },
  events:{
    signIn({user}){
      // console.log('events signIn:', user)      
    }
  }
}
export default NextAuth(authOptions)