import { handleArgs } from "./utils/handle-args";
import { handleQuestions } from "./utils/handle-questions";
import { handleAnswers } from "./utils/handle-answers";

export async function cli() {
  console.log("cli");
  // get the args
  const args = handleArgs();
  console.log("args", args);

  const answers = await handleQuestions(args);

  console.log("answers", answers);
  handleAnswers(answers);
}

cli();
