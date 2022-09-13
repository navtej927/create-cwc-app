import chalk from "chalk";
import fs from "fs";
import Listr from "listr";
import { execa } from "execa";

import { createProject } from "./create-project.js";
import { projectInstall } from "pkg-install";

export const handleAnswers = async (_answers: any) => {
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

  if (_answers.open) {
    try {
      // Updating with the New directory
      process.chdir(process.cwd() + `/${_answers.dir}`);
      const { stdout, stderr } = await execa("yarn", ["dev"]);
      console.log(
        stdout + stderr + "Updated working directory is: " + process.cwd()
      );
    } catch (err) {
      // Printing error if any occurs
      console.error("error occured while " + "changing directory: " + err);
    }
  }

  console.log("%s Project ready", chalk.green.bold("DONE"));
};
