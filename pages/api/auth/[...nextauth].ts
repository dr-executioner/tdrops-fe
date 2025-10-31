import NextAuth from "next-auth";
import TwitchProvider from "next-auth/providers/twitch";

export const authOptions = {
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID || "",
      clientSecret: process.env.TWITCH_CLIENT_SECRET || "",
      
      // authorization: {
      //   params: {
      //     scope: "user:read:email",
      //   },
      // },
    }),
  ],
  callbacks: {
    async jwt({ token, account } : any) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token } : any) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
