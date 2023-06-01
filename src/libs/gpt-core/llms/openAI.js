import { OpenAI } from 'langchain/llms/openai';

export const getLLM = (temperature) => {
  const llm = new OpenAI({
    temperature,
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
  return { llm };
};
