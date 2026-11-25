// One Line, No Deadline Met — entry program (Node 22, no dependencies).
// Writes exactly one single-line joke excuse for a missed deadline to
// /output/entry.txt: 128 characters, no trailing newline.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I didn't miss the deadline \u2014 I delegated it to future me, and future me just filed a formal complaint about my management style.";

const outDir = process.env.OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
