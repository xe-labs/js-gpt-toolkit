import { OpenAIEmbeddings } from 'langchain/embeddings/openai';

export const getEmbedding = ({ modelName }) =>
  new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
    modelName,
  });
