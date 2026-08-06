import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions: NextAuthOptions = {


  providers: [

    CredentialsProvider({

      name: "credentials",

      credentials: {

        email: {},

        password: {}

      },


      async authorize(credentials) {


        if (

          credentials?.email === "demo@hplccopilot.com" &&

          credentials?.password === "demo"

        ) {


          return {

            id: "1",

            name: "Demo Scientist",

            email:
              credentials.email

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

    strategy:"jwt"

  }


};