import FiltersContainer from "../components/filters/filtersContainer";
import ControlPanel from "../components/main-control-panel/controlPanel";
import ProductsContainer from "../components/products-container/productsContainer";
import './mainStore.scss';


export default function MainStore() {
  return (
    <main className="store-page">
      <FiltersContainer/>
      <div className="products">
        <ControlPanel/>
        <ProductsContainer/>
      </div>
    </main>
  );
}