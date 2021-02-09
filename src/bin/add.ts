// src/bin/add.ts
import { logger } from '../Library/Logger';

const numbers: string[] = [...process.argv];

if (numbers.length <= 0) {
  throw new Error('Number params are required');
}

logger.info(`Adding `, {
  output: numbers.reduce((a, b) => a + parseInt(b), 0),
});
