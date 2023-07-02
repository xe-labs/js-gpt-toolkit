#! /usr/bin/env node

import dotenv from 'dotenv';
import chalk from 'chalk';
import enquirer from 'enquirer';
import { execSync } from 'child_process';
import { ensureKeys } from '../libs/cli-core/ensureKeys.js';
import { showBanner } from '../libs/cli-core/showBanner.js';
import { getLLM } from '../libs/gpt-core/llms/openAI.js';

async function init() {
  dotenv.config();
  ensureKeys();
  showBanner(
    'Commit GPT',
    'Let AI handle your commit messages. CommitGPT uses staged file embeddings to generate concise, meaningful summaries for your commits.'
  );
  const pathResponse = await enquirer.prompt({
    type: 'input',
    name: 'repoPath',
    message: `Enter absolute path to the code repository`,
    required: true,
  });
  const { repoPath } = pathResponse;
  const diff = execSync(`cd ${repoPath} && git diff -U10 --staged`).toString();
  const files = execSync(`cd ${repoPath} && git diff --name-only --cached`)
    .toString()
    .trim();
  if (!files) {
    console.log('No files to commit');
  } else {
    const { llm } = getLLM(0.3);
    const response =
      await llm.call(`You are a development assistant. Your task is to assist in creating a commit message. Suggest a detailed commit message for the below given code changes. For description give overall details of the changes.

Here is the git diff for your reference. ${diff.slice(0, 10000)}`);
    console.log('Here is the commit message: ', response);
  }
}
init();
