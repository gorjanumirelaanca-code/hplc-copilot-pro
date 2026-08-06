"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";


export default function LoginPage() {


  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");



  async function login() {


    await signIn("credentials", {

      email,

      password,

      callbackUrl: "/"

    });


  }



  return (

    <main className="min-h-screen flex items-center justify-center bg-slate-100">


      <div className="w-full max-w-md bg-white rounded-xl shadow p-8">


        <h1 className="text-3xl font-bold text-blue-700 mb-6">

          HPLC Copilot Pro™

        </h1>


        <p className="text-slate-600 mb-6">

          Sign in to access your AI chromatography workspace.

        </p>



        <input

          className="w-full border rounded-lg p-3 mb-4"

          placeholder="Email"

          type="email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

        />



        <input

          className="w-full border rounded-lg p-3 mb-6"

          placeholder="Password"

          type="password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

        />



        <button

          onClick={login}

          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold"

        >

          Login

        </button>



        <div className="mt-6 text-sm text-slate-500">

          Demo account:

          <br />

          demo@hplccopilot.com

          <br />

          password: demo

        </div>


      </div>


    </main>

  );

}