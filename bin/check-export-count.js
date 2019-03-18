#!/usr/bin/env node

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const FOLDERS = [
  '../src/bolts',
  '../src/parts',
  '../src/vehicles',
];

const INDEX = '../src/index.ts';

EXPORT_DECLARATION_REGEX = /^export {.*\n((?:.*\w,\n)+)};$/m;

function checkExportCount() {
  const requiredExportCount = FOLDERS
    .map(folder => fs.readdirSync(path.resolve(__dirname, folder)).length)
    .reduce((total, fileCount) => total += fileCount, 0);

  const indexFile = fs.readFileSync(
    path.resolve(__dirname, INDEX),
    { encoding: 'utf-8' },
  );

  const exportString = indexFile.match(EXPORT_DECLARATION_REGEX);

  if (!exportString) {
    console.log(chalk.red('Could not find export declaration in index.ts'));
    process.exit(1);
  }

  const exportParts = exportString[1]
    .split(',')
    .map(part => part.trim())
    .filter(part => part);

  if (requiredExportCount !== exportParts.length) {
    console.log(chalk.red('Components missing from export declaration in index.ts!'));
    process.exit(1);
  }

  console.log(chalk.green('Component count looks correct'));
}

checkExportCount();
