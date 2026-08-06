import type { Metadata } from "next";
import "./globals.css";

import AuthProvider from "@/components/providers/AuthProvider";
import Navbar from "@/components/layout/Navbar";


export const metadata: Metadata = {

  title: "HPLC Copilot Pro™",

  description:
    "AI-powered pharmaceutical chromatography platform for HPLC method development, optimization, troubleshooting, and reporting."

};


export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="en">

      <body className="bg-slate-50">


        <AuthProvider>


          <Navbar />


          {children}


        </AuthProvider>


      </body>

    </html>

  );

}