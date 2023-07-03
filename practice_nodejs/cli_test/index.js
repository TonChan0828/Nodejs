const path = require("path");
const fs = require("fs");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { argv } = yargs(hideBin(process.argv))
  .option("name", { describe: "CLI名を表示" })
  .option("file", {
    describe: "Markdownファイルのパス",
  });
// console.log(argv);

if (argv.name) {
  const packageStr = fs.readFileSync(path.resolve(__dirname, "package.json"), {
    encoding: "utf-8",
  });
  const package = JSON.parse(packageStr);
  // nameオプションがな逝った場合は他のオプションを使わないで正常終了させる
  console.log(package.name);
  process.exit(0);
}

// 指定されたMarkdownファイルを読み込む
const markdownStr = fs.readFileSync(path.resolve(__dirname, argv.file), {
  encoding: "utf-8",
});
console.log(markdownStr);
