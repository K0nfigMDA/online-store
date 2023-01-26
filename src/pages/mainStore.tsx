import FiltersContainer from "../components/FiltersContainer";
import ControlPanel from "../components/ControlPanel";
import ProductsContainer from "../components/ProductsContainer";
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