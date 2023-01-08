import { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/products/productsContext";
import { IProduct } from "../../interfaces/products";
import FilterItem from "../FilterItem/FilterItem";
import './FilterList.scss';

interface IFilterListProps {
  filterName: keyof IProduct;
}

export default function FilterList({ filterName }: IFilterListProps) { 
  const { allProducts } = useProducts();
  const [, setSearchParams] = useSearchParams();
  const items = new Set(allProducts.map(el => el[filterName as keyof IProduct] as string));

  function checkBoxHandler(e: FormEvent) {
    const target = e.target as HTMLInputElement;
    
    if (target.type === 'checkbox') {
      if (target.checked) {
        setSearchParams((prev) => {
          prev.set(
            filterName, 
            `${prev.get(filterName) ? prev.get(filterName) + '↕' : ''}${target.id}`
          );
          return prev;
        });
      }
      if (!target.checked) {
        setSearchParams((prev) => {
          const param = prev.get(filterName) as string; // .get => always not undefined because checked
          const params = param.split('↕'); 
          if (params.length > 1) {
            const newParams = params.filter(el => el !== target.id);
            prev.set(filterName, newParams.join('↕'));
          } else {
            prev.delete(filterName);
          }
          return prev;
        });
      }
    }
  }

  return (
    <div className="filter-list">
      <h3 className="filter-title">{`${filterName[0].toUpperCase()}${filterName.slice(1)}`}</h3>
      <ul className="filter-list__items" onChange={checkBoxHandler}>
        {[...items].map((el, i) => <FilterItem item={el} filterName={filterName} key={i}/>)}
      </ul>
    </div>
  );
}