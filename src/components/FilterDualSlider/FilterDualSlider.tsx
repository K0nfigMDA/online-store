import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FILTERS } from "../../constants/filters";
import { useProducts } from "../../contexts/products/productsContext";
import { IProduct } from "../../interfaces/products";
import './FilterDualSlider.scss';

interface IFilterDualSliderProps {
  filterName: keyof Pick<IProduct, 'price' | 'stock'>;
}

export default function FilterDualSlider({ filterName }: IFilterDualSliderProps) {
  const { allProducts, filteredProducts } = useProducts();
  const [, setSearchParams] = useSearchParams();
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(0);
  const items = [...new Set(allProducts.map(el => el[filterName]))].sort((a, b) => a - b);
 
  useEffect(() => {
    const values = filteredProducts.map(el => el[filterName]);
    if (values.length) {
      const minValue = Math.min(...values);
      const maxValue = Math.max(...values);
      setMinVal(items.findIndex(el => el === minValue));
      setMaxVal(items.findIndex(el => el === maxValue));
    } else {
      setMinVal(0);
      setMaxVal(items.length - 1);
    }
  }, [filteredProducts])
  
  const isPrice = filterName === FILTERS.price; 
  const priceSymbol = isPrice ? '€' : '';

  return (
      <div className="dual-slider">
        <h3 className="filter-title">{`${filterName[0].toUpperCase()}${filterName.slice(1)}`}</h3>
        <div className="out-data">
          {
            filteredProducts.length 
              ? (minVal === maxVal 
                  ? <span>{`${priceSymbol}${items[minVal]}`}</span>
                  : <>
                      <p className="from-data">{`${priceSymbol}${items[minVal]}`}</p>
                      <p>{" ⟷ "}</p>
                      <p className="to-data">{`${priceSymbol}${items[maxVal]}`}</p>
                    </>)
              : <span>NOT FOUND</span>
          }
        </div>
        <div className="multi-range">
          <input
            type="range"
            min={0}
            max={items.length - 1}
            value={minVal}
            onInput={(event: FormEvent<HTMLInputElement>) => {
              const target = event.target as HTMLInputElement;
              const value = Math.min(+target.value, maxVal - 1);
              setMinVal(value);
              target.value = value.toString();
              setSearchParams((prev) => {
                prev.set(filterName, `${items[value]}↕${items[maxVal]}`);
                return prev;
              })
            }}
            className={minVal > maxVal - 1 ? "thumb thumb--zindex-5" : "thumb thumb--zindex-3"}
          />
          <input
            type="range"
            min={0}
            max={items.length - 1}
            value={maxVal}
            onInput={(event: FormEvent<HTMLInputElement>) => {
              const target = event.target as HTMLInputElement;
              const value = Math.max(+target.value, minVal + 1);
              setMaxVal(value);
              target.value = value.toString();
              setSearchParams((prev) => {
                prev.set(filterName, `${items[minVal]}↕${items[value]}`);
                return prev;
              })
            }}
            className="thumb thumb--zindex-4"
          />
          <div className="slider">
            <div className="slider__track" />
            <div className="slider__range" />
          </div>
        </div>
      </div>
  );
}