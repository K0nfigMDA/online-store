import { IProduct } from "../../interfaces/products";
import FilterList from "./filterList";

interface IFiltersContainerProps {
  products: IProduct[];
}

export default function FiltersContainer({products}: IFiltersContainerProps) {
  return (
    <div className="filters">
      <FilterList filterName="category" products={products}/>
      <FilterList filterName="brand" products={products}/>
    </div>
  );
}