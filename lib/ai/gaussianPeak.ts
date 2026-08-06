export interface GaussianPoint {

  x: number;

  y: number;

}


export function generateGaussianPeak(

  retentionTime: number,

  intensity: number,

  width: number,

  tailing: number = 1

): GaussianPoint[] {


  const points: GaussianPoint[] = [];


  const start = retentionTime - width * 5;

  const end = retentionTime + width * 5;


  for (

    let x = start;

    x <= end;

    x += 0.02

  ) {


    const sigma = width / 2.355;


    let gaussian =

      intensity *

      Math.exp(

        -Math.pow(x - retentionTime, 2)

        /

        (2 * Math.pow(sigma, 2))

      );



    // simple tailing simulation

    if (x > retentionTime) {

      gaussian = gaussian / tailing;

    }


    points.push({

      x: Number(x.toFixed(3)),

      y: Number(gaussian.toFixed(3))

    });


  }


  return points;

}



export function combinePeaks(

  peaks: GaussianPoint[][]

): GaussianPoint[] {


  const combined: Record<number, number> = {};


  peaks.flat().forEach(point => {

    const key = point.x;


    combined[key] =

      (combined[key] || 0) + point.y;

  });


  return Object.keys(combined)

    .map(key => ({

      x: Number(key),

      y: Number(combined[Number(key)].toFixed(3))

    }))

    .sort((a,b)=>a.x-b.x);

}