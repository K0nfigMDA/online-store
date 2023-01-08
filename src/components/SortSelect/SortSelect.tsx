import './SortSelect.scss';
import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { sortOption, SORT_OPTIONS, SORT_PARAM, SORT_TITLE } from "../../constants/sort";


export default function SortSelect() { 
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams((prev) => {
      prev.set(SORT_PARAM, e.target.value);
      return prev;
    })
  }

  const selectedValue = searchParams.has(SORT_PARAM) && SORT_OPTIONS.includes(searchParams.get(SORT_PARAM) as sortOption) 
    ? searchParams.get(SORT_PARAM) as sortOption 
    : SORT_TITLE

  return (
    <div className="sort-bar">
      <select 
        onChange={onChangeHandler} 
        value={selectedValue}
        name="sort-select" 
        id="sort-select"
        >
        {[SORT_TITLE, ...SORT_OPTIONS].map((el, i) => {
          if (el === SORT_TITLE) {
            return <option key={i} value={el} disabled>{`Sort options:`}</option>;
          }
          return <option key={i} value={el}>{`Sort by ${el.replace('-', ' ')}`}</option>;
        })}
      </select>
    </div>
  );
}