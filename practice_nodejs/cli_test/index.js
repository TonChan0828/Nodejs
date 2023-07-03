const path = require("path");
const fs = require("fs");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { getPackageName } = require("./lib/name");
const { readMarkdownFileSync } = require("./lib/file");

const { argv } = yargs(hideBin(process.argv))
  .option("name", { describe: "CLI名を表示" })
  .option("file", {
    describe: "Markdownファイルのパス",
  });
// console.log(argv);

if (argv.name) {
  const name = getPackageName();
  console.log(name);
  process.exit(0);
}

const markdownStr = readMarkdownFileSync(path.resolve(__dirname, argv.file));
console.log(markdownStr);
