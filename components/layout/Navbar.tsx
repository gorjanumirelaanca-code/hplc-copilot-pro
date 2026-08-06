"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LoginButton from "@/components/auth/LoginButton";


export default function Navbar() {


  const pathname = usePathname();


  const links = [

    {
      name: "🧪 Method Development",
      path: "/method-development"
    },

    {
      name: "📚 Method Library",
      path: "/method-library"
    },

    {
      name: "📄 Reports",
      path: "/reports"
    },

    {
      name: "🔬 HPLC Assistant",
      path: "/assistant"
    },

    {
      name: "👤 Account",
      path: "/account"
    }

  ];



  return (

    <header className="w-full border-b bg-white shadow-sm">


      <div className="max-w-[1900px] mx-auto px-6 py-4 flex items-center justify-between gap-6">


        {/* Brand */}

        <Link href="/">

          <div className="min-w-fit">

            <h1 className="text-xl font-bold text-blue-700">

              HPLC Copilot Pro™

            </h1>


            <p className="text-xs text-slate-500">

              AI Pharmaceutical Chromatography Platform

            </p>


          </div>

        </Link>



        {/* Navigation */}

        <nav className="hidden xl:flex items-center gap-6">


          {links.map((link)=>(


            <Link

              key={link.path}

              href={link.path}

              className={`text-sm font-medium transition ${
                
                pathname === link.path

                ? "text-blue-600 font-bold"

                : "text-slate-700 hover:text-blue-600"

              }`}

            >

              {link.name}

            </Link>


          ))}


        </nav>



        {/* Login */}

        <LoginButton />


      </div>


    </header>

  );

}