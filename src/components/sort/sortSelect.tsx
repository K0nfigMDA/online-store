import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

export const SORT_PARAM = 'sort';

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

export default function SortSelect() { 
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams((prev) => {
      prev.set(SORT_PARAM, e.target.value);
      return prev;
    })
  }

  const inQuery = searchParams.has(SORT_PARAM) && SORT_OPTIONS.includes(searchParams.get(SORT_PARAM) as sortOption) 
    ? searchParams.get(SORT_PARAM) as sortOption 
    : 'sort-title'

  return (
    <div className="sort-bar">
      <select 
        onChange={onChangeHandler} 
        value={inQuery}
        name="sort-select" 
        id="sort-select"
        >
        {['sort-title', ...SORT_OPTIONS].map((el, i) => {
          if (el === 'sort-title') {
            return <option key={i} value={el} disabled>{`Sort options:`}</option>;
          }
          return <option key={i} value={el}>{`Sort by ${el.replace('-', ' ')}`}</option>;
        })}
      </select>
    </div>
  );
}