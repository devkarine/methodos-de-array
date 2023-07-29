import { Ientrydata, PageItems } from '../types/Ientrydata';

/**
 * extractItemsPaginateArray
 * @description
 * Extracts the items from the pages array
 * and returns an array of PageItems
 *
 * @param {Ientrydata} data
 * @return {*}  {PageItems[]}
 */
export const extractItemsPaginateArray = (data: Ientrydata): PageItems[] => {
  const extractsItems = [];

  const { pages } = data;

  for (const page of pages) {
    const { items } = page;

    extractsItems.push(...items);
  }

  return extractsItems;
};
