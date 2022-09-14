import inquirer from "inquirer";
import { Args } from "./handle-args.js";

export const handleQuestions = async (_args: Args) => {
  const questions = [];

  if (!_args.directory) {
    questions.push({
      type: "input",
      name: "directory",
      message: "Project Name:",
      default: "temp",
      //   validate(value) {
      //     const valid = !isNaN(parseFloat(value));
      //     return valid || "Please enter a number";
      //   },
      filter: String,
    });
  }

  if (!_args.template) {
    questions.push({
      type: "list",
      name: "template",
      message: "Project template?",
      choices: [
        "react",
        "static",
        "cli",
        "vueJs",
        "express",
        "node-package",
        "node-cli",
      ],
      filter(val: string) {
        return val.toLowerCase();
      },
    });
  }

  if (!_args.typescript) {
    questions.push({
      type: "confirm",
      name: "typescript",
      message: "Typescript support?",
      default: false,
    });
  }

  if (!_args.git) {
    questions.push({
      type: "confirm",
      name: "git",
      message: "Do you want to initialize git repo?",
      default: false,
    });
  }

  if (!_args.open) {
    questions.push({
      type: "confirm",
      name: "open",
      message: "Run dev server?",
      default: false,
    });
  }

  const answers = await inquirer.prompt(questions);

  return {
    ..._args,
    ...answers,
  };
};
