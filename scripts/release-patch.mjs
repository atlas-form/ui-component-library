import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const corePkgPath = path.join(root, "packages/core/package.json");
const reactPkgPath = path.join(root, "packages/react/package.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function bumpPatch(version) {
  const [major, minor, patch] = version.split(".").map(Number);
  if ([major, minor, patch].some(Number.isNaN)) {
    throw new Error(`Invalid semver version: ${version}`);
  }
  return `${major}.${minor}.${patch + 1}`;
}

const corePkg = readJson(corePkgPath);
const reactPkg = readJson(reactPkgPath);

const nextVersion = bumpPatch(corePkg.version);

corePkg.version = nextVersion;
reactPkg.version = nextVersion;
reactPkg.dependencies["@atlas-art/ui-core"] = `^${nextVersion}`;

writeJson(corePkgPath, corePkg);
writeJson(reactPkgPath, reactPkg);

console.log(`Bumped @atlas-art/ui-core and @atlas-art/ui-react to ${nextVersion}`);
console.log(`Updated @atlas-art/ui-react -> @atlas-art/ui-core dependency to ^${nextVersion}`);
