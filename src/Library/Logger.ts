// src/Library/Logger.ts
import * as winston from 'winston';

export const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [new winston.transports.Console({})],
});
