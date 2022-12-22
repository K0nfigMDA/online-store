import { useSearchParams } from "react-router-dom";



export default function SortSelect() { 
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="sort-bar">
      <select name="sort-select" id="sort-select">

      </select>
    </div>
  );
}