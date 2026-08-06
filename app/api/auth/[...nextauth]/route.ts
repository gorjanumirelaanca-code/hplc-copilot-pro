import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({

  providers: [

    CredentialsProvider({

      name: "Credentials",

      credentials: {

        email: {
          label: "Email",
          type: "email"
        },

        password: {
          label: "Password",
          type: "password"
        }

      },


      async authorize(credentials) {


        if (

          credentials?.email === "demo@hplccopilot.com" &&

          credentials?.password === "demo"

        ) {


          return {

            id: "1",

            name: "Demo Scientist",

            email: "demo@hplccopilot.com"

          };


        }


        return null;

      }

    })

  ],


  pages: {

    signIn: "/login"

  },


  session: {

    strategy: "jwt"

  },


  secret: process.env.NEXTAUTH_SECRET

});



export {

  handler as GET,

  handler as POST

};