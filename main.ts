import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original line: an alien tourist's review of planet Earth.
// The locals built a machine to wash their dishes, then argue nightly
// about how to load it — the visitor's outside view of ordinary Earth life.
const REVIEW =
  "Earth review: the locals built a machine to wash their dishes, then argue every night about how to load it. Charming planet, hopeless crew. 4/5 stars.";

if (!REVIEW.trim()) {
  throw new Error("review line must not be blank");
}
if (/[\r\n]/.test(REVIEW)) {
  throw new Error("review line must be a single line, no line breaks allowed");
}
if (REVIEW.length < 1 || REVIEW.length > 200) {
  throw new Error(
    `review line is ${REVIEW.length} characters, must be 1-200 characters`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
