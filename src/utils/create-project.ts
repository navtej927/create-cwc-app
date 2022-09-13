import chalk from "chalk";
import fs from "fs";
import ncp from "ncp";
import path from "path";
import { promisify } from "util";

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options: any) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}

export const createProject = (_answers: any) => {
  let sourceDir = path.resolve(process.cwd(), `src/templates/${_answers.type}`);

  if (_answers.typescript) {
    sourceDir = path.resolve(
      process.cwd(),
      `src/templates/${_answers.type}-typescript`
    );
  }

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