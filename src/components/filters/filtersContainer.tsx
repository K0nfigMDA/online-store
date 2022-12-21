import { IProduct } from "../../interfaces/products";
import FilterDualSlider from "./dualSlider";
import FilterList from "./filterList";

interface IFiltersContainerProps {
  products: IProduct[];
}

export default function FiltersContainer({products}: IFiltersContainerProps) {
  return (
    <div className="filters">
      <FilterList filterName="category" products={products}/>
      <FilterList filterName="brand" products={products}/>
      <FilterDualSlider filterName="price" products={products}/>
      <FilterDualSlider filterName="stock" products={products}/>
    </div>
  );
}