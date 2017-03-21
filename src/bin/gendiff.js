#!/usr/bin/env node

import program from 'commander';
import diffOfFiles from '../';

program
    .version('0.1.0')
    .description('Compares two configuration files and shows a difference.')
    .option('-f, --format [type]', 'Output format')
    .arguments('<first_config> <second_config>')
    .action((firstConfig, secondConfig) => {
      console.log(diffOfFiles(firstConfig, secondConfig));
    })
    .parse(process.argv);
