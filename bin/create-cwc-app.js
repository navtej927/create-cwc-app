#!/usr/bin/env node

console.log("binnnnnnnnnn")
require = require('esm')(module /*, options*/);

require('../src/cli').cli(process.argv);