export interface Peak {

  name: string;

  retentionTime: number;

  width: number;

  height: number;

}

export interface Chromatogram {

  peaks: Peak[];

  pressure: number;

  runtime: number;

}

export function predictChromatogram(
  method:any,
  molecule:any
): Chromatogram {

  const logP =
    Number(molecule.logP ?? 3);

  let rt = 5.0;

  if(logP>4)
    rt=7.2;

  if(logP<1)
    rt=1.8;

  return {

    pressure:185,

    runtime:10,

    peaks:[

      {

        name:molecule.name ?? "Compound",

        retentionTime:rt,

        width:0.18,

        height:100

      }

    ]

  };

}