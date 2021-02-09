// src/Utils/add.test.ts
import { TestSuite } from '@k-foss/ts-estests';
import { strictEqual } from 'assert';
import { add } from './add';
import { timeout } from '@k-foss/ts-esutils';
import { logger } from '@k-foss/ts-esutils';

export class AddTestSuite extends TestSuite {
  public testName = 'AddTest Suite';

  public async test(): Promise<void> {
    strictEqual(add(1, 1), 2, 'add(1, 1) === 2');
    strictEqual(add(1, 2), 3, 'add(1, 2) === 3');
    strictEqual(add(5, 5), 10, 'add(5, 5) === 10');

    logger.debug(`HelloWorldTimeout: `, timeout(50));

    await timeout(500);
  }
}
