import { PromptTemplate } from 'langchain';

const template = `
Q: {question}

Instructions:
1. Answer based on context/docs.
2. Focus on repo/code.
3. Consider:
    a. Purpose/features - describe.
    b. Functions/code - provide details/samples.
    c. Setup/usage - give instructions.
4. Unsure? Say "I am not sure".

Answer:
`;

const prompt = new PromptTemplate({
  template,
  inputVariables: ['question'],
});

export const getRepoQueryPrompter = () => (question) =>
  prompt.format({
    question,
  });
