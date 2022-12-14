import fs from "fs";
import ncp from "ncp";
import path from "path";
import { fileURLToPath } from "url";
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

  console.log("currentFileUrl", currentFileUrl)

  let templateDirectory = path.resolve(
    decodeURI(fileURLToPath(currentFileUrl)),
    "../../templates",
    _answers.type,
    _answers.template.toLowerCase(),
    "javascript"
  );

  if (_answers.typescript) {
    templateDirectory = path.resolve(
      decodeURI(fileURLToPath(currentFileUrl)),
      "../../templates",
      _answers.type,
      _answers.template.toLowerCase(),
      "typescript"
    );
  }

  console.log("templateDirectory", templateDirectory, targetDirectory)

  copyTemplateFiles({
    templateDirectory: templateDirectory,
    targetDirectory: targetDirectory,
  });
};
