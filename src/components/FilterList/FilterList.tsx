import { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/products/productsContext";
import { IProduct } from "../../interfaces/products";
import './FilterList.scss';

interface IFilterListProps {
  filterName: keyof IProduct;
}

interface IFilterItemProps {
  item: string;
}

export default function FilterList({ filterName }: IFilterListProps) { 
  const { allProducts, filteredProducts } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
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
          const params = prev.get(filterName)!.split('↕'); // .get => always not undefined because checked 
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

  function isChecked(el: string) {
    const queryParam = searchParams.get(filterName);
    if (!queryParam) return false;
    if (queryParam) {
      return queryParam.split('↕').some(elem => elem === el);
    }
  }

  function countProducts(products: IProduct[], searchField: string) {
    const filtered = products.filter((el) => el[filterName] === searchField);
    return filtered.length;
  }

  function Item({ item }: IFilterItemProps) {
    const allCount = countProducts(allProducts, item);
    const filteredCount = countProducts(filteredProducts, item);

    const className = filteredCount ? "checkbox-line" : "checkbox-line item-not-active";

    return (
      <li className={className}>
        <input type="checkbox" id={item} checked={isChecked(item)} readOnly/>
        <label htmlFor={item}>{item}</label>
        <span>{`(${filteredCount}/${allCount})`}</span>
      </li>);
  }

  return (
    <div className="filter-list">
      <h3 className="filter-title">{`${filterName[0].toUpperCase()}${filterName.slice(1)}`}</h3>
      <ul className="filter-list__items" onChange={checkBoxHandler}>
        {[...items].map((el, i) => <Item item={el} key={i}/>)}
      </ul>
    </div>
  );
}