import chalk from "chalk";
import { handleArgs } from "./utils/handle-args.js";
import { handleQuestions } from "./utils/handle-questions.js";
import { handleAnswers } from "./utils/handle-answers.js";
// import packageJson from "../package.json" assert { type: "json" };

export async function cli() {
  console.log("cli executed with version", chalk.bgMagenta("1.1.1"));
  // get the args
  const args = handleArgs();
  const answers = await handleQuestions(args);
  await handleAnswers(answers);
}
