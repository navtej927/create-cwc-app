import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const handleArgs = async () => {
  const args: any = yargs(hideBin(process.argv))
    .help()
    .options({
      type: {
        type: "string",
        alias: "t",
        describe: "Type of the project:",
      },
      git: {
        type: "boolean",
        alias: "g",
        describe: "Initialize repo with git",
      },
      open: { type: "boolean", alias: "o", describe: "Run dev server" },
    })
    .epilog("copyright 2019").argv;

  return {
    dir: args._[0],
    type: args.type,
    git: args.git,
    open: args.open,
  };
};
