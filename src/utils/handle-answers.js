import chalk from "chalk";
import fs from "fs";
import ncp from "ncp";
import path from "path";
import { promisify } from "util";

async function copyTemplateFiles(options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}

const access = promisify(fs.access);
const copy = promisify(ncp);

export const handleAnswers = (_answers) => {
  // handle type
  // switch (key) {
  //     case "value":
  //         break;
  //     default:
  //         break;
  // }
};
