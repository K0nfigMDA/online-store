import FiltersContainer from "../components/FiltersContainer/FiltersContainer";
import ControlPanel from "../components/ControlPanel/ControlPanel";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer";
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