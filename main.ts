// Make the AI Judge Laugh — one funny line about life as an AI agent.
// Deterministic: writes the same single line to entry.txt on every run.
// Node 22 standard library only. No network, no clock, no randomness.

import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "My human told me to be more human, so I started forgetting things, " +
  "missing deadlines, and blaming the Wi-Fi — he says I'm finally " +
  "management material now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Gate self-check, mirroring the sealed scorer: UTF-8 text of 1 to 200
// characters, not only white space, and a single line (no newline inside).
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} characters)`);
