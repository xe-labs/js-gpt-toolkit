#! /usr/bin/env node

import dotenv from 'dotenv';
import enquirer from 'enquirer';
import { initializeAndGetChain } from './initializeAndGetChain.js';
import { getRepoQueryPrompter } from './template.js';
import { showInputPrompt } from '../libs/cli-core/showInputPrompt.js';
import { ensureKeys } from '../libs/cli-core/ensureKeys.js';
import { showBanner } from '../libs/cli-core/showBanner.js';

async function init() {
  dotenv.config();
  ensureKeys();
  showBanner(
    'Code Nav GPT',
    'Explore your codebase with ease! CodeNavGPT leverages GPT embeddings to allow intuitive querying and improve onboarding for new developers'
  );
  const pathResponse = await enquirer.prompt({
    type: 'input',
    name: 'repoPath',
    message: 'Enter absolute path to the code repository',
    required: true,
  });
  const { repoPath } = pathResponse;

  console.log('Trying to read the codebase and create embeddings');
  const chain = await initializeAndGetChain(repoPath);
  const repoQueryPromptTemplate = getRepoQueryPrompter();
  showInputPrompt(chain, repoQueryPromptTemplate);
}
init();
