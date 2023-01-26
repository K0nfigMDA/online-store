import { useProducts } from "../../contexts/products/productsContext";
import SearchBar from "../SearchBar";
import SortSelect from "../SortSelect";
import ViewModeSwitch from "../ViewModeSwitch";
import './ControlPanel.scss';


export default function ControlPanel() { 
  const { filteredProducts } = useProducts();


  return (
    <div className="control-panel">
      <SortSelect/>
      <div className="stat">{`Found: ${filteredProducts.length}`}</div>
      <SearchBar/>
      <ViewModeSwitch/>
    </div>
  );
}