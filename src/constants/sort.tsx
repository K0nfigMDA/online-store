export const SORT_PARAM = 'sort';

export const SORT_TITLE = 'sort-title';

export enum SORT_CRITERIA {
  price = 'price',
  rating = 'rating',
  discount = 'discount'
}
export enum SORT_ORDER {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type sortOption = `${SORT_CRITERIA}-${SORT_ORDER}`;

export const SORT_OPTIONS: sortOption[] = ['price-ASC', 'price-DESC', 'rating-ASC', 'rating-DESC', 'discount-ASC', 'discount-DESC'];