// src/index.ts
import { logger } from './Library/Logger';
import { sayHello } from './Utils/sayHello';

logger.info(`Starting TS-Core`);

await sayHello('K-FOSS');

export {};
