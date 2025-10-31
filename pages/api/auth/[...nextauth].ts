import NextAuth from "next-auth";
import TwitchProvider from "next-auth/providers/twitch";

export const authOptions = {
  providers: [
    TwitchProvider({
      clientId: process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_TWITCH_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
