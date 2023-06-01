import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

export function createTextSplitter(chunkSize = 1000, chunkOverlap = 50) {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize,
    chunkOverlap,
  });
  return {
    splitter,
    splitText: (inputText) => splitter.createDocuments([inputText]),
    splitDocuments: (inputDocuments) => splitter.splitDocuments(inputDocuments),
  };
}
