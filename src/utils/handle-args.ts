import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const handleArgs = async () => {
  const args = await yargs(hideBin(process.argv))
    .help()
    .options({
      template: {
        type: "string",
        alias: "t",
        describe: "Project template:",
      },
      git: {
        type: "boolean",
        alias: "g",
        describe: "Git initialization:",
      },
      typescript: { type: "boolean", alias: "ts", describe: "Add typescript" },
      open: { type: "boolean", alias: "o", describe: "Run dev server" },
    }).argv;

  return {
    directory: args._[0],
    template: args.template,
    git: args.git,
    typescript: args.typescript,
    open: args.open,
  };
};
