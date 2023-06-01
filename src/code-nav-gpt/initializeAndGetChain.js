import path from 'path';
import { v4 as uuid } from 'uuid';
import { directoryLoader } from '../libs/gpt-core/loaders/directoryLoader.js';
import { getLLM } from '../libs/gpt-core/llms/openAI.js';
import { createTextSplitter } from '../libs/gpt-core/splitters/recursiveCharacterTextSplitter.js';
import { getVectorStoreFromDocuments } from '../libs/gpt-core/vectorStores/memoryVectorStore.js';
import { getEmbedding } from '../libs/gpt-core/embeddings/openAiEmbedding.js';
import { getChain } from '../libs/gpt-core/chains/retrievalQAChain.js';

export const initializeAndGetChain = async (repoPath) => {
  const docs = await directoryLoader(repoPath);

  docs.forEach((doc) => {
    const filePath = doc.metadata.source;
    const relativePath = path.relative(repoPath, filePath);
    const fileId = uuid();
    doc.metadata.source = relativePath;
    doc.metadata.fileId = fileId;
  });

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
