/**
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 *
 * @param {unknown[]} arr
 * @return {*}  {unknown[]}
 */
export const removeFalsyFromArray = (arr: unknown[]): unknown[] => {
  const filteredArr = arr.filter(Boolean);
  return filteredArr;
};
