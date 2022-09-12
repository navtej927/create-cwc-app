import inquirer from "inquirer";

export const handleQuestions = async (_args) => {
  const questions = [];

  if (!_args.type) {
    questions.push({
      type: "list",
      name: "type",
      message: "What is the type of the project?",
      choices: ["React", "static", "cli", "vueJs"],
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
