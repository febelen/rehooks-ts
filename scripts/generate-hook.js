const fs = require("fs");
const path = require("path");
const readline = require("readline");

const toCamelCase = (str) => {
  return str
    .replace(/[-\s]+/g, " ")
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "Please enter the hook name starting with 'use' (e.g., useClient, use-client, use client):",
);

rl.question("Enter the hook name: ", function (hookName) {
  if (!hookName.startsWith("use")) {
    console.log("Error: Hook name must start with 'use'. Please try again.");
    rl.close();
    return;
  }

  const camelCaseHookName = toCamelCase(hookName);

  const dirPath = path.join(
    __dirname,
    "./../packages/core/src/",
    camelCaseHookName,
  );
  const indexFilePath = path.join(dirPath, "index.ts");

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Directory ${camelCaseHookName} created successfully.`);
  }

  const fileContent =
    `export const ${camelCaseHookName} = () => {\n` +
    `  // Your hook logic here\n` +
    `  return null;\n` +
    `};\n`;

  fs.writeFileSync(indexFilePath, fileContent);
  console.log(`File index.ts created inside ${camelCaseHookName} directory.`);

  const mainIndexPath = path.join(__dirname, "./../packages/core/src/index.ts");
  const exportStatement = `export * from './${camelCaseHookName}';\n`;

  const currentContent = fs.readFileSync(mainIndexPath, "utf8");
  if (!currentContent.includes(exportStatement)) {
    fs.appendFileSync(mainIndexPath, exportStatement);
    console.log(`Export statement added to index.ts: ${exportStatement}`);
  } else {
    console.log(`Export statement already exists in index.ts.`);
  }

  rl.close();
});
