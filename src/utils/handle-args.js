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
    .option("open", {
      alias: "o",
      describe: "start dev server",
    })
    //.demandOption(["site"], "Please specify the website")
    .help().argv;

  console.log("args", args);

  return {
    dir: args._[0],
    type: args.type,
    git: args.git,
    open: args.open,
  };
};
