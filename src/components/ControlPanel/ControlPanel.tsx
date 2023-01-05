import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/products/productsContext";
import SearchBar from "../SearchBar/SearchBar";
import SortSelect from "../SortSelect/SortSelect";
import './ControlPanel.scss';


export default function ControlPanel() { 
  const [searchParams, setSearchParams] = useSearchParams();
  const { filteredProducts } = useProducts();


  return (
    <div className="control-panel">
      <SortSelect/>
      <div className="stat">{`Found: ${filteredProducts.length}`}</div>
      <SearchBar/>
    </div>
  );
}