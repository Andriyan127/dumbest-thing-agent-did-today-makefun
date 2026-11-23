import { mkdirSync, writeFileSync } from "node:fs";

// The dumbest thing our agent did today, in two beats:
// the setup (what it did) and the punchline (how often it did it).
const SETUP =
  "My agent flagged its own make.fun workspace as a security risk this morning and locked itself out";
const PUNCHLINE = "four times in a row.";

const LINE = `${SETUP} \u2014 ${PUNCHLINE}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
