import chalk from "chalk";
import fs from "fs";
import ncp from "ncp";
import path from "path";
import { promisify } from "util";

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}

export const createProject = (_answers) => {
  const sourceDir = path.resolve(
    process.cwd(),
    `src/templates/${_answers.type}`
  );

  const targetDir = _answers.dir;

  copyTemplateFiles({
    templateDirectory: sourceDir,
    targetDirectory: targetDir,
  });
  
  // handle type
  // switch (key) {
  //     case "value":
  //         break;
  //     default:
  //         break;
  // }
};
