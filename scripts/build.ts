import { execaCommandSync as exec } from 'execa';
import fs from 'fs-extra';

process.chdir('..');

fs.rmSync('dist', { force: true, recursive: true });
exec('tsc');
fs.copySync('package.json', 'dist/package.json');
fs.copySync('src/tsconfig', 'dist/tsconfig');

// Overwrite with ESM loader
fs.copySync('src/loader.mjs', 'dist/loader.mjs');
