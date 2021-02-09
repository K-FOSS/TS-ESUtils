// src/bin/addCLI.test.ts
import { TestSuite } from '@k-foss/ts-estests';
import { deepStrictEqual } from 'assert';
import hookStd, { stdout } from 'hook-std';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { logger } from '@k-foss/ts-esutils/index';

export class AddCLITestSuite extends TestSuite {
  public testName = 'Add CLI Test Suite';

  public async test(): Promise<void> {
    logger.info('Add CLI Test Suite');

    const prevArgs = process.argv;

    let count = 0;

    async function runAddCLI(
      numbers: string[],
      expectedOutput: number,
    ): Promise<hookStd.HookPromise> {
      process.argv = numbers;

      const promise = stdout(
        {
          once: true,
        },
        (output, unhook) => {
          unhook();

          deepStrictEqual(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            JSON.parse(output)?.output as number,
            expectedOutput,
            `Adding ${JSON.stringify(numbers)} === ${expectedOutput}`,
          );
        },
      );

      const url = new URL(
        pathToFileURL(
          resolve(fileURLToPath(import.meta.url), '../add.ts'),
        ).href,
      );

      url.searchParams.set('importCount', `${count++}`);

      await import(url.href);

      return promise;
    }

    await runAddCLI(['1', '1'], 2);

    await runAddCLI(['4', '1'], 5);

    await runAddCLI(['5', '5'], 10);

    await runAddCLI(['5', '15'], 20);

    await runAddCLI(['5', '5', '5'], 15);

    await runAddCLI(['50', '50'], 100);

    process.argv = prevArgs;
  }
}
