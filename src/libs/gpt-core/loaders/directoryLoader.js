import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';
import { TextLoader } from 'langchain/document_loaders/fs/text';

export async function directoryLoader(repoPath) {
  let docs = [];
  try {
    const loader = new DirectoryLoader(
      repoPath,
      {
        '.js': (path) => new TextLoader(path),
        '.jsx': (path) => new TextLoader(path),
        '.ts': (path) => new TextLoader(path),
        '.tsx': (path) => new TextLoader(path),
        '.md': (path) => new TextLoader(path),
        '.html': (path) => new TextLoader(path),
        '.json': (path) => new TextLoader(path),
        '.css': (path) => new TextLoader(path),
        '.scss': (path) => new TextLoader(path),
        '.gitignore': (path) => new TextLoader(path),
      },
      true,
      'ignore'
    );

    try {
      docs = await loader.load();
    } catch (err) {
      console.log(`Error loading the directory: ${err}`);
    }
  } catch (err) {
    console.log(`Error initializing directory loader: ${err}`);
  }
  return docs;
}
