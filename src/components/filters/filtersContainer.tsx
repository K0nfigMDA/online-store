import { useProducts } from "../../contexts/products/productsContext";
import FilterDualSlider from "./dualSlider";
import FilterList from "./filterList";


export default function FiltersContainer() {
  const { allProducts } = useProducts();

  return (
    <div className="filters">
      <FilterList filterName="category" products={allProducts}/>
      <FilterList filterName="brand" products={allProducts}/>
      <FilterDualSlider filterName="price" products={allProducts}/>
      <FilterDualSlider filterName="stock" products={allProducts}/>
    </div>
  );
}