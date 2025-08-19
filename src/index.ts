#!/usr/bin/env node

import { program } from 'commander';
import { parseAngularTemplate, HtmlVariation } from 'ngx-html-bridge';
import * as fs from 'fs';

program
  .arguments('<file>')
  .option('--plain', 'Output only plain HTMLs')
  .option('--annotated', 'Output only HTMLs with annotations about original location of each node')
  .action(async (file, options) => {
    const html = fs.readFileSync(file, 'utf-8');
    const result = await parseAngularTemplate(html, file);

    if (options.plain && options.annotated) {
      console.log(JSON.stringify(result, null, 2));
    } else if (options.plain) {
      console.log(JSON.stringify(result.map((r: HtmlVariation) => r.plain), null, 2));
    } else if (options.annotated) {
      console.log(JSON.stringify(result.map((r: HtmlVariation) => r.annotated), null, 2));
    } else {
      console.log(JSON.stringify(result, null, 2));
    }
  });

program.parse(process.argv);