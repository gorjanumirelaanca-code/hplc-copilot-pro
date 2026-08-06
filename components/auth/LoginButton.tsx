"use client";

import { signIn, signOut, useSession } from "next-auth/react";


export default function LoginButton() {


  const { data: session, status } = useSession();


  if (status === "loading") {

    return (

      <button className="rounded-lg bg-slate-300 px-4 py-2">

        Loading...

      </button>

    );

  }



  if (session) {


    return (

      <div className="flex items-center gap-3">


        <span className="text-sm text-slate-600">

          {session.user?.email}

        </span>


        <button

          onClick={() => signOut({

            callbackUrl:"/login"

          })}

          className="rounded-lg bg-red-600 hover:bg-red-700 text-white px-4 py-2"

        >

          Logout

        </button>


      </div>

    );

  }



  return (

    <button

      onClick={() => signIn(undefined, {

        callbackUrl:"/"

      })}

      className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-5 py-2"

    >

      Login

    </button>

  );

}