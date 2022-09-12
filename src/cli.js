import { handleArgs } from "./utils/handle-args";
import { handleQuestions } from "./utils/handle-questions";

export function cli() {
  // get the args
  const args = handleArgs();
  console.log(args);
  handleQuestions(args);
}

cli();
