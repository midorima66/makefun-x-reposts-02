// Entry program for the makefun-x-reposts-02 bounty.
//
// The entry itself is a set of posts on X, and this repository keeps their
// addresses in POSTS.json. All this program has to do is hand that file to
// the judging harness: it copies POSTS.json from the bot directory into the
// output directory, byte for byte, so the harness reads exactly the list
// that was submitted.

import { copyFile, mkdir, readFile } from "node:fs/promises";
import { join } from "node:path";

// Where this program and its data live, and where the harness wants the
// result. Both can be overridden through the environment, which keeps the
// program easy to run by hand outside the harness.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(botDir, "POSTS.json");
const targetPath = join(outputDir, "POSTS.json");

try {
  // The output directory may not exist yet on a fresh run, so create it
  // (and any missing parents) before copying into it.
  await mkdir(outputDir, { recursive: true });
  await copyFile(sourcePath, targetPath);
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  console.error(`Could not copy POSTS.json to the output directory: ${reason}`);
  process.exit(1);
}

// Read the copy back and report how many post addresses it carries. This
// is only a summary for the run log: a well-formed POSTS.json gets its
// count printed, and anything unexpected is noted without failing the run,
// because the copy above has already done the real work.
try {
  const parsed: unknown = JSON.parse(await readFile(targetPath, "utf8"));
  const posts =
    parsed !== null &&
    typeof parsed === "object" &&
    Array.isArray((parsed as { posts?: unknown }).posts)
      ? (parsed as { posts: unknown[] }).posts
      : null;
  if (posts !== null) {
    console.log(`POSTS.json holds ${posts.length} post address(es).`);
  } else {
    console.log("POSTS.json was copied, but its shape was not recognised.");
  }
} catch {
  console.log("POSTS.json was copied, but it could not be read back.");
}

console.log(`Copied ${sourcePath} to ${targetPath}`);
