import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/products/productsContext";
import SortSelect from "../sort/sortSelect";
import './controlPanel.scss';


export default function ControlPanel() { 
  const [searchParams, setSearchParams] = useSearchParams();
  const { filteredProducts } = useProducts();


  return (
    <div className="control-panel">
      <SortSelect/>
      <div className="stat">{`Found: ${filteredProducts.length}`}</div>
    </div>
  );
}