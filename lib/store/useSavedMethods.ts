"use client";

import { create } from "zustand";


export interface SavedMethod {

  id: string;

  userId: string;

  name: string;

  compound: string;

  column: string;

  mobilePhase: string;

  pH: number;

  gradient: string;

  created: string;

}



interface SavedMethodStore {

  methods: SavedMethod[];

  saveMethod: (method: SavedMethod) => void;

  deleteMethod: (id:string)=>void;

}



export const useSavedMethods = create<SavedMethodStore>((set)=>(

{

  methods: [],


  saveMethod:(method)=>

    set((state)=>(

      {

        methods:[

          ...state.methods,

          method

        ]

      }

    )),


  deleteMethod:(id)=>

    set((state)=>(

      {

        methods:

        state.methods.filter(

          item=>item.id!==id

        )

      }

    ))

}

));