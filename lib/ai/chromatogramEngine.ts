export interface ChromatogramPeak {

  name: string;

  retentionTime: number;

  intensity: number;

  width: number;

  tailing: number;

}



export interface ChromatogramResult {

  peaks: ChromatogramPeak[];

  totalTime: number;

}



export function generateChromatogram(

  prediction: any = {}

): ChromatogramResult {


  const rt = prediction.retentionTime ?? 3;

  const resolution = prediction.resolution ?? 2;

  const tailing = prediction.tailingFactor ?? 1.2;

  const width = prediction.peakWidth ?? 0.15;



  const peaks = [


    {

      name: "Peak 1",

      retentionTime: Number((rt * 0.8).toFixed(2)),

      intensity: 75,

      width,

      tailing

    },


    {

      name: "Peak 2",

      retentionTime: Number(rt.toFixed(2)),

      intensity: 100,

      width,

      tailing

    },


    {

      name: "Peak 3",

      retentionTime: Number((rt * 1.35).toFixed(2)),

      intensity: 60,

      width,

      tailing

    }


  ];



  return {

    peaks,

    totalTime: Number((rt * 2).toFixed(2))

  };

}