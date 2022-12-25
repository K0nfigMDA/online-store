import FilterDualSlider from "./dualSlider";
import FilterList from "./filterList";

enum FILTERS {
  category = 'category',
  brand = 'brand',
  price = 'price',
  stock = 'stock',
  search = 'search'
}

export default function FiltersContainer() {
  return (
    <div className="filters">
      <FilterList filterName={FILTERS.category}/>
      <FilterList filterName={FILTERS.brand}/>
      <FilterDualSlider filterName={FILTERS.price}/>
      <FilterDualSlider filterName={FILTERS.stock}/>
    </div>
  );
}