import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IProduct } from "../../interfaces/products";
import './FilterDualSlider.scss';

interface IFilterDualSliderProps {
  filterName: 'price' | 'stock';
  products: IProduct[];
}

export default function FilterDualSlider({ filterName, products }: IFilterDualSliderProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const values = products.map(el => el[filterName]);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const [minVal, setMinVal] = useState(minValue);
  const [maxVal, setMaxVal] = useState(maxValue);
 
  useEffect(() => {
    const params = searchParams.get(filterName);
    if (params) {
      const paramsArr = params.split('↕');
      setMinVal(Number(paramsArr[0]));
      setMaxVal(Number(paramsArr[1]));  
    } else {
      setMinVal(minValue);
      setMaxVal(maxValue);
    }
  }, 
  [minValue])
  
  return (
    <>
      <div className="dual-slider">
        <h3 className="filter-title">{`${filterName[0].toUpperCase()}${filterName.slice(1)}`}</h3>
        <div className="out-data">
          <p className="from-data">{`${filterName === 'price' ? '€' : ''}${minVal}`}</p>
          <p>{" ⟷ "}</p>
          <p className="to-data">{`${filterName === 'price' ? '€' : ''}${maxVal}`}</p>
        </div>
        <div className="multi-range">
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={minVal}
            onInput={(event: FormEvent<HTMLInputElement>) => {
              const target = event.target as HTMLInputElement;
              const value = Math.min(+target.value, maxVal - 1);
              setMinVal(value);
              target.value = value.toString();
              setSearchParams((prev) => {
                prev.set(filterName, `${value}↕${maxVal}`);
                return prev;
              })
            }}
            className={minVal > maxVal - 100 ? "thumb thumb--zindex-5" : "thumb thumb--zindex-3"}
          />
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={maxVal}
            onInput={(event: FormEvent<HTMLInputElement>) => {
              const target = event.target as HTMLInputElement;
              const value = Math.max(+target.value, minVal + 1);
              setMaxVal(value);
              target.value = value.toString();
              setSearchParams((prev) => {
                prev.set(filterName, `${minVal}↕${value}`);
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
    </>
  );
}