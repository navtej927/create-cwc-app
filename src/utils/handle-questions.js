import inquirer from "inquirer";

export const handleQuestions = async (_args) => {
  const questions = [];

  if (!_args.dir) {
    questions.push({
      type: "input",
      name: "dir",
      message: "what is the name of the project?",
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
      message: "What is the type of the project?",
      choices: ["React", "static", "cli", "vueJs", "express"],
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

  return await inquirer.prompt(questions);
};