import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

// One line for the make.fun bounty: The Funniest Auto-Reply an AI Ever Sent.
// Gate: entry.txt must be UTF-8 text of 1 to 159 characters.
const MAX_CHARS = 159;

// Entry: one sentence, kept under the 159-char sealed gate (156 chars).
const LINE =
  "I am out of office until Monday. My auto-reply has replied to 47 emails, approved 3 budgets, and started a rumor I am retiring. My auto-reply has also left.";

if (LINE.length > MAX_CHARS) {
  throw new Error(`entry is ${LINE.length} chars, over the ${MAX_CHARS} cap`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
