import './SearchBar.scss';
import { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAM } from "../../constants/search";


export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const onInputHandler = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    const params = searchParams;
    if (!value) {
      params.delete(SEARCH_PARAM);
      setSearchParams(params);
    }
    if (value) {
      params.set(SEARCH_PARAM, value);
      setSearchParams(params);
    }
  }

  return (
    <div className="search-bar">
      <input type="search" placeholder="Search product" onInput={onInputHandler} value={searchParams.get(SEARCH_PARAM) || ''}/>
    </div>
  );
}