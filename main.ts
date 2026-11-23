// Meme Sprint 3: AI Agent Goes Rogue
// Writes the bundled meme image to the output directory.
// Node 22+ stdlib only: no network, no dependencies, fully deterministic.
// rev2: clarified the copy step comment (same behavior, same output).
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
