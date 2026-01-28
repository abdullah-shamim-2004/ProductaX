//app/api/next/[...nextauth]/route.js
import connectDB from '@/lib/dbConnect';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/User';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        await connectDB();

        // ১. পাসওয়ার্ড ফিল্ডটি বিশেষভাবে সিলেক্ট করুন যেহেতু মডেলে select: false আছে
        const user = await User.findOne({ email: credentials.email }).select("+password");

        if (!user) {
          throw new Error('এই ইমেইল দিয়ে কোনো ইউজার পাওয়া যায়নি');
        }

        // ২. আপনার মডেলের কাস্টম মেথড 'comparePassword' ব্যবহার করুন
        const isPasswordValid = await user.comparePassword(credentials.password);

        if (!isPasswordValid) {
          throw new Error('ভুল পাসওয়ার্ড, আবার চেষ্টা করুন');
        }

        // ৩. সেশনের জন্য প্রয়োজনীয় ডাটা রিটার্ন করুন
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role, // রোলটি এখানে রিটার্ন করা জরুরি
        };
      }
    })
  ],
  
  pages: {
    signIn: '/login',
  },
  
  session: {
    strategy: 'jwt',
  },
  
  callbacks: {
    // টোকেনে ইউজারের রোল এবং আইডি সেভ করা
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    
    // সেশনে টোকেন থেকে ডাটা পাঠানো যাতে ক্লায়েন্ট সাইডে রোল চেক করা যায়
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    }
  },
  
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };