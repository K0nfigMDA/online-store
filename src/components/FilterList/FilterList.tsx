import { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { IProduct } from "../../interfaces/products";
import './FilterList.scss';

interface IFilterListProps {
  filterName: string;
  products: IProduct[];
}

export default function FilterList({ filterName, products }: IFilterListProps) { 
  const [searchParams, setSearchParams] = useSearchParams();
  const items = new Set(products.map(el => el[filterName as keyof IProduct] as string));

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

  return (
    <div className="filter-list">
      <h3 className="filter-title">{`${filterName[0].toUpperCase()}${filterName.slice(1)}`}</h3>
      <ul className="filter-list__items" onChange={checkBoxHandler}>
        {[...items].map((el, i) => {
          return (
          <li className="checkbox-line" key={i}>
            <input type="checkbox" id={el} checked={isChecked(el)} readOnly/>
            <label htmlFor={el}>{el}</label>
          </li>)
        })}
      </ul>
    </div>
  );
}