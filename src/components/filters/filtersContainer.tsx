import FilterDualSlider from "./dualSlider";
import FilterList from "./filterList";
import { useSearchParams } from "react-router-dom";

enum FILTERS {
  category = 'category',
  brand = 'brand',
  price = 'price',
  stock = 'stock',
  search = 'search'
}

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

  return (
    <div className="filters">
      <div className="filters__control">
        <button className="button" onClick={resetFiltersHandler}>Reset Filters</button>
        
      </div>
      <FilterList filterName={FILTERS.category}/>
      <FilterList filterName={FILTERS.brand}/>
      <FilterDualSlider filterName={FILTERS.price}/>
      <FilterDualSlider filterName={FILTERS.stock}/>
    </div>
  );
}