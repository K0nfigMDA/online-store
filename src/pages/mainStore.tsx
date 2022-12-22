import FiltersContainer from "../components/filters/filtersContainer";
import ProductsContainer from "../components/products-container/productsContainer";
import './mainStore.scss';


export default function MainStore() {
  return (
    <main className="store-page">
      <FiltersContainer/>
      <div className="products">
        <ProductsContainer/>
      </div>
    </main>
  );
}