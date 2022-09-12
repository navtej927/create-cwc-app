import { handleArgs } from "./handleArgs";
//import { questions } from "./inquirerQues";

export function cli() {
  // get the args
  const args = handleArgs();
  console.log(args)
  //questions();
}
