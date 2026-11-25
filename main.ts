// passive-aggressive-fridge-bot
// Writes one passive-aggressive note from the fridge to entry.txt.
// The note is a single line, exactly 101 characters: it counts the
// door openings, the meals eaten (zero), and the yogurt's complaint,
// then admits the fridge signed the complaint too.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "Fourteen door openings, zero meals, and the yogurt has now filed a formal complaint. I signed it too.";

function outputDir(): string {
  return (
    process.env.MAKEFUN_OUTPUT_DIR ||
    process.env.OUTPUT_DIR ||
    "/output"
  );
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "entry.txt");
  writeFileSync(file, ENTRY_TEXT + "\n", "utf8");
}

main();
