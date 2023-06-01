import { MemoryVectorStore } from 'langchain/vectorstores/memory';

export const getVectorStoreFromDocuments = async (documents, embedding) => {
  const store = await MemoryVectorStore.fromDocuments(documents, embedding);
  return {
    store,
  };
};
