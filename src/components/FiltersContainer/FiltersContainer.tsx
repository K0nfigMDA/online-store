import { useProducts } from "../../contexts/products/productsContext";
import FilterDualSlider from "../FilterDualSlider/FilterDualSlider";
import FilterList from "../FilterList/FilterList";


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