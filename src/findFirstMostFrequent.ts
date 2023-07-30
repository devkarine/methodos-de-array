interface MostFrequentType {
  value: string | number;
  occurrences: number;
}

/**
 * findFirstMostFrequent
 * @example findFirstMostFrequent([3, 'a', 3, 'a', 'a', 2, 'a', 3, 'a', 2, 4, 9, 3]);
 * // returns { value: 'a', occurrences: 5 }
 *
 * @param {(Array<string | number>)} inputArray
 * @return {MostFrequentType}  {({ value: string | number; occurrences: number })}
 */

export const findFirstMostFrequent = (
  inputArray: Array<string | number>,
): MostFrequentType => {
  const count: { [key: string]: number } = {};

  for (const item of inputArray) {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  }

  let value: string | number = inputArray[0];
  let occurrences = 1;
  console.log(value);

  for (const item of inputArray) {
    if (count[item] > occurrences) {
      value = item;
      occurrences = count[item];
    }
  }

  return { value, occurrences };
};
