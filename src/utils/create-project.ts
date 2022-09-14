import chalk from "chalk";
import fs from "fs";
import ncp from "ncp";
import path from "path";
import { promisify } from "util";

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options: any) {
  return await copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}

export const createProject = (_answers: any) => {
  let sourceDir = path.resolve(process.cwd(), `templates/${_answers.type}`);
  const targetDir = path.resolve(process.cwd(), `${_answers.dir}`);

  console.log("sourceDir", sourceDir);
  console.log("targetDir", targetDir);

  if (_answers.typescript) {
    sourceDir = path.resolve(
      process.cwd(),
      `templates/${_answers.type}-typescript`
    );
  }


  copyTemplateFiles({
    templateDirectory: sourceDir,
    targetDirectory: targetDir,
  });
};
