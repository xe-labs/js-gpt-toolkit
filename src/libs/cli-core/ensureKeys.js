export const ensureKeys = () => {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error(
      'Required environment Variable `OPENAI_API_KEY` missing. Please add the variable in .env file.'
    );
  }
};
