import chalk from "chalk";
import fs from "fs";
import ncp from "ncp";
import path from "path";
import { fileURLToPath } from 'url';
import { promisify } from "util";

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options: any) {
  return await copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}

export const createProject = (_answers: any) => {
  const targetDirectory = path.resolve(process.cwd(), _answers.directory);
  const currentFileUrl = import.meta.url;

  const templateDirectory = path.resolve(
    decodeURI(fileURLToPath(currentFileUrl)),
    "../../../templates",
    _answers.type.toLowerCase()
  );

  console.log("currentFileUrl", currentFileUrl);
  console.log("templateDirectory", templateDirectory);
  console.log("targetDirectory", targetDirectory);

  // if (_answers.typescript) {
  //   sourceDir = path.resolve(
  //     process.cwd(),
  //     `templates/${_answers.type}-typescript`
  //   );
  // }

  copyTemplateFiles({
    templateDirectory: templateDirectory,
    targetDirectory: targetDirectory,
  });
};

