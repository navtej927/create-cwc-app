import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const handleArgs = () => {
  const args = yargs(hideBin(process.argv))
    .option("type", {
      alias: "t",
      describe: "type of the project",
    })
    //.demandOption(["site"], "Please specify the website")
    .help().argv;

  return {
    type: args.type,
  };
};
