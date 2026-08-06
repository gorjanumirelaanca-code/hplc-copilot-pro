export interface Peak {

  name: string;

  retentionTime: number;

  intensity: number;

  width: number;

  tailing: number;

}


export interface Chromatogram {

  peaks: Peak[];

  runtime: number;

}


export function simulateChromatogram(

  retentionTimes: number[],

  resolution: number,

  tailing: number

): Chromatogram {


  const peaks = retentionTimes.map((rt, index) => ({

    name: `Peak ${index + 1}`,

    retentionTime: Number(rt.toFixed(2)),

    intensity:
      Math.round(
        80 + Math.random() * 20
      ),

    width:
      Number(
        (0.08 + (tailing - 1) * 0.05).toFixed(3)
      ),

    tailing:
      Number(tailing.toFixed(2))

  }));


  return {

    peaks,

    runtime:
      Math.max(...retentionTimes) + 3

  };

}