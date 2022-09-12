import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const handleArgs = () => {
  const args = yargs(hideBin(process.argv))
    .option("type", {
      alias: "t",
      describe: "type of the project",
    })
    .option("git", {
      alias: "g",
      describe: "do you want to initialise the git repository",
    })
    //.demandOption(["site"], "Please specify the website")
    .help().argv;

  return {
    type: args.type,
    git: args.git,
  };
};
