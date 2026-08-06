import { prisma } from "@/lib/db/prisma";


export async function GET(){

  const methods = await prisma.savedMethod.findMany({

    include:{

      user:true

    }

  });


  return Response.json(methods);

}



export async function POST(req:Request){

  const body = await req.json();


  const method = await prisma.savedMethod.create({

    data:body

  });


  return Response.json(method);

}