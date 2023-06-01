import { RetrievalQAChain } from 'langchain/chains';

export const getChain = (model, retriever) => {
  const chain = RetrievalQAChain.fromLLM(model, retriever);
  return { chain };
};
