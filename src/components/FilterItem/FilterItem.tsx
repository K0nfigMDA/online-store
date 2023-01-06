import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/products/productsContext";
import { countProducts } from "../../helpers/products";
import { IProduct } from "../../interfaces/products";

interface IFilterItemProps {
  item: string;
  filterName: keyof IProduct;
}

export default function FilterItem({ item, filterName }: IFilterItemProps) {
  const { allProducts, filteredProducts } = useProducts();
  const [searchParams] = useSearchParams();
  const allCount = countProducts(allProducts, filterName, item);
  const filteredCount = countProducts(filteredProducts, filterName, item);

  const className = filteredCount ? "checkbox-line" : "checkbox-line item-not-active";

  function isChecked(el: string) {
    const queryParam = searchParams.get(filterName);
    if (!queryParam) return false;
    if (queryParam) {
      return queryParam.split('↕').some(elem => elem === el);
    }
  }

  return (
    <li className={className}>
      <input type="checkbox" id={item} checked={isChecked(item)} readOnly/>
      <label htmlFor={item}>{item}</label>
      <span>{`(${filteredCount}/${allCount})`}</span>
    </li>);
}