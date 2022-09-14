import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const readDirFolders = (directory: string) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  let templateDirectory = path.resolve(__dirname, `../${directory}`);
  return fs.readdirSync(templateDirectory).sort();
};

export const UTILS = {
  readDirFolders,
};
