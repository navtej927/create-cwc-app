import inquirer from "inquirer";

export const handleQuestions = async (_args) => {
  const questions = [];

  if (!_args.dir) {
    questions.push({
      type: "input",
      name: "dir",
      message: "Project Name:",
      default: "temp",
      //   validate(value) {
      //     const valid = !isNaN(parseFloat(value));
      //     return valid || "Please enter a number";
      //   },
      filter: String,
    });
  }

  if (!_args.type) {
    questions.push({
      type: "list",
      name: "type",
      message: "Project Type?",
      choices: ["React", "static", "cli", "vueJs", "express", "nodeModule"],
      filter(val) {
        return val.toLowerCase();
      },
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

  const answers = await inquirer.prompt(questions);

  return {
    ..._args,
    ...answers
  }
};