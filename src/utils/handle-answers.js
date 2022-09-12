import chalk from "chalk";
import fs from "fs";
import { createProject } from "./create-project";
import Listr from "listr";
import { projectInstall } from "pkg-install";

export const handleAnswers = async (_answers) => {
  const tasks = new Listr([
    {
      title: "Creating project with template files...",
      task: () => createProject(_answers),
    },
    // {
    //   title: "Initialize git",
    //   task: () => initGit(options),
    //   enabled: () => options.git,
    // },
    {
      title: "Install dependencies",
      task: () =>
        projectInstall({
          cwd: _answers.dir,
        }),
    },
  ]);

  await tasks.run();
  try {
    // Updating with the New directory
    process.chdir(process.cwd()+"/kl");
    console.log("Updated working directory is: " + process.cwd());
  } catch (err) {
    // Printing error if any occurs
    console.error("error occured while " + "changing directory: " + err);
  }

  console.log("%s Project ready", chalk.green.bold("DONE"));
};
