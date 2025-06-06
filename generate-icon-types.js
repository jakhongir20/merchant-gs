import fs from "fs";
import path from "path";

const iconsPath = path.resolve(process.cwd(), "./src/shared/assets/icons");
const files = fs.readdirSync(iconsPath).filter((file) => file.endsWith(".svg"));

const iconNames = files.map((file) => path.basename(file, ".svg"));

const iconTypeContent = `export type IconType = ${iconNames
  .map((name) => `'${name}'`)
  .join(" | ")};\n`;

const outputPath = path.join("./src/shared/types", "icons.ts");
fs.writeFileSync(outputPath, iconTypeContent);

console.log("Index type definitions generated at:", outputPath);
