import inquirer from "inquirer";
import { Args } from "./handle-args.js";
import { UTILS } from "./Utils.js";

export const handleQuestions = async (_args: Args) => {
  let answers: any = {};

  const nameTypeAns = await inquirer.prompt([
    {
      type: "input",
      message: "Pick the name of your app:",
      name: "directory",
      default: "temp",
    },
    {
      type: "list",
      message: "Project Type:",
      name: "type",
      choices: ["application", "api-server", "library"],
      default: "Application",
    },
  ]);

  answers = { ...answers, ...nameTypeAns };

  const templatesParentFolders = UTILS.readDirFolders(
    `templates/${answers.type}`
  );

  const libraryAns = await inquirer.prompt([
    {
      type: "list",
      name: "template",
      message: "Project template:",
      choices: templatesParentFolders,
      filter(val: string) {
        return val.toLowerCase();
      },
    },
  ]);

  answers = { ...answers, ...libraryAns };

  const tsAnswer = await inquirer.prompt([
    {
      type: "confirm",
      name: "typescript",
      message: "Typescript support:",
      default: false,
    },
    {
      type: "confirm",
      name: "git",
      message: "Init git repo:",
      default: false,
    },
  ]);

  answers = { ...answers, ...tsAnswer };

  return {
    ...answers,
  };
};
