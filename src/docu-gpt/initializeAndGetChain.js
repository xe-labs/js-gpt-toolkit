import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { getLLM } from '../libs/gpt-core/llms/openAI.js';
import { createTextSplitter } from '../libs/gpt-core/splitters/recursiveCharacterTextSplitter.js';
import { getVectorStoreFromDocuments } from '../libs/gpt-core/vectorStores/memoryVectorStore.js';
import { getEmbedding } from '../libs/gpt-core/embeddings/openAiEmbedding.js';
import { getChain } from '../libs/gpt-core/chains/retrievalQAChain.js';

export const initializeAndGetChain = async (filePath) => {
  const loader = new PDFLoader(filePath);
  const docs = await loader.load();

  const textSplitter = createTextSplitter();
  const splitDocuments = await textSplitter.splitDocuments(docs);

  const { store } = await getVectorStoreFromDocuments(
    splitDocuments,
    getEmbedding('text-embedding-ada-002')
  );

  const { llm } = getLLM(0.3);
  const { chain } = getChain(llm, store.asRetriever());
  return chain;
};
