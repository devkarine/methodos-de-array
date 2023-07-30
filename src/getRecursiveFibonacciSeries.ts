/**
 * getRecursiveFibonacciSeries
 * @description
 *
 *
 * @example getRecursiveFibonacciSeries(1) // [0, 1]
 * @example getRecursiveFibonacciSeries(5) // [0, 1, 1, 2, 3, 5]
 *
 * @param {number} n
 * @return {*}  {number[]}
 */
export const getRecursiveFibonacciSeries = (n: number): number[] => {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const series = getRecursiveFibonacciSeries(n - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
};
