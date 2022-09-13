import yargs, { Argv } from "yargs";
import { hideBin } from "yargs/helpers";

// interface Arguments extends Argv {
//   _: any;
//   dir: string;
//   type: string;
//   git: string;
//   open: string;
// }

export const handleArgs = async () => {
  const args: any = yargs(hideBin(process.argv))
    .options({
      type: {
        type: "string",
        default: false,
        alias: "t",
        describe: "type of the project",
      },
      git: {
        type: "string",
        alias: "o",
        describe: "do you want to initialise the git repository",
      },
      open: { type: "boolean", alias: "o", describe: "start dev server" },
    })
    .help().argv;

  return {
    dir: args._[0],
    type: args.type,
    git: args.git,
    open: args.open,
  };
};
