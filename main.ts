// hello, batch of bad deals: we write one line and the morning disagrees.
// orders for a kinder alarm arrive, yet no slot opens for them.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
void ownDir;

const line = 'My alarm clock and I have an agreement: it rings, I negotiate, we both lose.';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.txt'), line, 'utf8');

console.log(`entry.txt ${Buffer.byteLength(line, 'utf8')} bytes`);
