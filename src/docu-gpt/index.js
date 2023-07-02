#! /usr/bin/env node

import dotenv from 'dotenv';
import chalk from 'chalk';
import enquirer from 'enquirer';
import { initializeAndGetChain } from './initializeAndGetChain.js';
import { getPDFQueryPrompter } from './template.js';
import { showInputPrompt } from '../libs/cli-core/showInputPrompt.js';
import { ensureKeys } from '../libs/cli-core/ensureKeys.js';
import { showBanner } from '../libs/cli-core/showBanner.js';

async function init() {
  dotenv.config();
  ensureKeys();
  showBanner(
    'Docu GPT',
    'Transform your PDFs into queryable resources. DocuGPT creates embeddings from documents, making information access swift and simple.'
  );
  const pathResponse = await enquirer.prompt({
    type: 'input',
    name: 'filePath',
    message: `Enter absolute path to the pdf file with the file name e.g. ${chalk.gray(
      'c:\\documents\\integration.pdf'
    )}`,
    required: true,
  });
  const { filePath } = pathResponse;

  console.log('Trying to read the file and create embeddings');
  const chain = await initializeAndGetChain(filePath);
  const repoQueryPromptTemplate = getPDFQueryPrompter();
  showInputPrompt(chain, repoQueryPromptTemplate);
}
init();
