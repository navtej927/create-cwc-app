import chalk from "chalk";
import shell from "shelljs";
import { handleArgs } from "./handle-args.js";
import { handleQuestions } from "./handle-questions.js";
import { handleAnswers } from "./handle-answers.js";

export async function cli() {
  const args = await handleArgs();
  const answers = await handleQuestions(args);
  console.log("answers", answers);
  await handleAnswers(answers);

  shell.echo(`Your '${chalk.bold(answers.directory)}' project is ready to go.`);
}
