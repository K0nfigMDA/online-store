import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

export const SORT_PARAM = 'sort';
export const SORT_OPTIONS = ['sort-title', 'price-ASC', 'price-DESC', 'rating-ASC', 'rating-DESC', 'discountPercentage-ASC', 'discountPercentage-DESC'];

export default function SortSelect() { 
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams((prev) => {
      prev.set(SORT_PARAM, e.target.value);
      return prev;
    })
  }

  const inQuery = searchParams.has(SORT_PARAM) && SORT_OPTIONS.includes(searchParams.get(SORT_PARAM) as string) 
    ? searchParams.get(SORT_PARAM) as string 
    : 'sort-title'

  return (
    <div className="sort-bar">
      <select 
        onChange={onChangeHandler} 
        value={inQuery}
        name="sort-select" 
        id="sort-select"
        >
        {SORT_OPTIONS.map((el, i) => {
          if (el === 'sort-title') {
            return <option key={i} value={el} disabled>{`Sort options:`}</option>;
          }
          return <option key={i} value={el}>{`Sort by ${el.replace('-', ' ')}`}</option>;
        })}
      </select>
    </div>
  );
}