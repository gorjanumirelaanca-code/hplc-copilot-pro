export interface Peak {

  retentionTime: number;

  width: number;

  height: number;

}

export interface ChromatogramPoint {

  time: number;

  signal: number;

}

export function generateChromatogram(
  peaks: Peak[],
  runtime = 10,
  step = 0.02
): ChromatogramPoint[] {

  const data: ChromatogramPoint[] = [];

  for (let x = 0; x <= runtime; x += step) {

    let y = 0;

    for (const peak of peaks) {

      const sigma = peak.width;

      y +=
        peak.height *
        Math.exp(
          -Math.pow(
            x - peak.retentionTime,
            2
          ) /
            (2 * sigma * sigma)
        );

    }

    data.push({

      time: Number(x.toFixed(2)),

      signal: Number(y.toFixed(2))

    });

  }

  return data;

}