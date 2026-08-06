import { Molecule, Method } from "./retentionPredictor";

export function generateAdvice(

  molecule: Molecule,

  method: Method

): string[] {

  const advice: string[] = [];

  if (molecule.logP < 1)
    advice.push(
      "Low LogP: decrease initial % organic or consider HILIC."
    );

  if (molecule.logP > 3)
    advice.push(
      "High LogP: increase aqueous phase to improve retention."
    );

  if (molecule.tpsa > 120)
    advice.push(
      "High TPSA: optimize buffer concentration and pH."
    );

  if (molecule.hBondDonors > 3)
    advice.push(
      "Monitor peak tailing caused by secondary interactions."
    );

  if (method.flow > 1.2)
    advice.push(
      "Reducing flow rate may improve resolution."
    );

  if (method.temperature > 40)
    advice.push(
      "Higher temperature may shorten retention but reduce selectivity."
    );

  advice.push(
    "Confirm recommendations experimentally before validation."
  );

  return advice;

}