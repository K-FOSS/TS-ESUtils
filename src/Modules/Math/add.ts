// src/Utils/add.ts

/**
 * Add two numbers
 * @param a Number 1
 * @param b Number 2
 *
 * @returns a + b
 */
export function add<A extends number, B extends number>(a: A, b: B): number {
  return a + b;
}
