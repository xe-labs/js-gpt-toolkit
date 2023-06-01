# JS-GPT-TOOLKIT

### A comprehensive suite of tools leveraging GPT technology, crafted to enhance and streamline front-end JavaScript development workflows.

> ### _Note: This package can do what it promises, however this package is still under active development for feature enhancements. Please contribute back if you are able to find bugs/issues or want to contribute feature update to the package._

> _Keeping this package as open source for everyone to know how to use context injection with AI based models._

> It demonstrates 4 use cases for using Generative AI during day-to-day development process, which are as follows:

- CodeNavGPT: Explore your codebase with ease! CodeNavGPT leverages GPT embeddings to allow intuitive querying and improve onboarding for new developers
- DocuGPT: Transform your PDFs into queryable resources. DocuGPT creates embeddings from documents, making information access swift and simple.
- CommitGPT: Let AI handle your commit messages. CommitGPT uses staged file embeddings to generate concise, meaningful summaries for your commits.

## Usage

This toolkit uses OpenAI APIs for LLM and requires OpenAI API Key. You will need to purchase the subscription and use the same for this codebase. Copy the .env.example file to .env and give the OpenAI API key to `OPENAI_API_KEY` environment variable.

To start the CodeNavGPT run following command:

```
npm run start:codenavgpt
```

To start the DocuGPT run following command:

```
npm run start:docugpt
```

To start the CommitGPT run following command:

```
npm run start:commitgpt
```

### License

JS-GPT-TOOLKIT is [MIT licensed](./LICENSE).
