import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export type MethodDevelopmentInput = {
  compound: string;
  molecularWeight: string;
  pKa: string;
  logP: string;
  uv: string;
};

export async function generateMethodSuggestion(
  input: MethodDevelopmentInput
) {
  const prompt = `
You are a senior pharmaceutical analytical chemist.

Generate an initial reversed-phase HPLC method.

Compound: ${input.compound}
Molecular Weight: ${input.molecularWeight}
pKa: ${input.pKa}
logP: ${input.logP}
UV: ${input.uv}

Return your answer as JSON with these fields:

column
mobilePhase
pH
gradient
flowRate
temperature
notes
`;

  const response = await openai.chat.completions.create({
    model: "gpt-5",
    messages: [
      {
        role: "system",
        content:
          "You are an expert in pharmaceutical HPLC method development.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    response_format: {
      type: "json_object",
    },
  });

  return JSON.parse(
    response.choices[0].message.content ?? "{}"
  );
}