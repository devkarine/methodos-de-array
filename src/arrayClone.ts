/**
 * arrayClone
 *
 * @template T
 * @param {T[]} arr
 */
export const arrayClone = <T>(arr: T[]): T[] => {
  const cloneArray = [...arr];
  return cloneArray;
};
