import FiltersContainer from "../components/filters/filtersContainer";
import ProductsContainer from "../components/products-container/productsContainer";
import { useProducts } from "../hooks/useProducts";
import './mainStore.scss';

export default function MainStore() {
  const {products, error} = useProducts();

  return (
    <main className="store-page">
      <FiltersContainer products={products}/>
      <ProductsContainer products={products} error={error}/>
    </main>
  );
}