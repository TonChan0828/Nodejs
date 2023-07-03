const path = require("path");
const fs = require("fs");

const packageStr = fs.readFileSync(path.resolve(__dirname, "package.json"), {
  encoding: "utf-8",
});
const package = JSON.parse(packageStr);

// nameオプションのチェック
const nameOption = process.argv.includes("--name");

if (nameOption) {
  console.log(package.name);
} else {
  console.log("オプションがありません");
}
