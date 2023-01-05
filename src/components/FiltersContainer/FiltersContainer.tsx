import { useSearchParams } from "react-router-dom";
import { FILTERS } from "../../constants/filters";
import FilterDualSlider from "../FilterDualSlider/FilterDualSlider";
import FilterList from "../FilterList/FilterList";


export default function FiltersContainer() {
  const [searchParams, setSearchParams] = useSearchParams();

  const resetFiltersHandler = () => {
    const params = searchParams;
    
    for (const param of Array.from(params.keys())) {
      if (param in FILTERS) {
        params.delete(param);
      }
    }
    setSearchParams(params);
  }

  const copyLinkHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const targetText = target.textContent;
    const onClickText = 'Copied!';
    target.textContent = onClickText;
    setTimeout(() => {
      target.textContent = targetText;
    }, 500);
    
    const link = window.location.href;
    window.navigator.clipboard.writeText(link);
  }

  return (
    <div className="filters">
      <div className="filters__control">
        <button className="button" onClick={resetFiltersHandler}>Reset Filters</button>
        <button className="button" onClick={copyLinkHandler}>Copy Link</button>
      </div>
      <FilterList filterName={FILTERS.category}/>
      <FilterList filterName={FILTERS.brand}/>
      <FilterDualSlider filterName={FILTERS.price}/>
      <FilterDualSlider filterName={FILTERS.stock}/>
    </div>
  );
}