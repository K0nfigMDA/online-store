import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IProduct } from "../../interfaces/products";
import './dualSlider.scss';

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
  // const minValRef = useRef(null);
  // const maxValRef = useRef(null);

  // console.log(minValue);
  
  // const range = useRef(null);

  
  // useEffect(() => {
  //   setSearchParams((prev) => {
  //     prev.set(filterName, `${minValue}↕${maxValue}`);
  //     return prev;
  //   })
  // }, [minVal])

  // const sliderRef = useRef(null);
  
  // function onInputHandler(e: ChangeResult) { 
  //   setMinVal(e.minValue);
  //   setMaxVal(e.maxValue);
  //   console.log(`${minVal} - ${maxVal}`);
    

  //   // setSearchParams((prev) => {
  //   //   prev.set(filterName, `${e.minValue}↕${e.maxValue}`);
  //   //   return prev;
  //   // })
  // }
  
  return (
    <>
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={minVal}
        step={100}
        // ref={minValRef}
        onChange={(event) => {
          // const value = Math.min(+event.target.value, maxVal - 1);
          // setMinVal(value);
          // event.target.value = value.toString();
        }}
        onInput={(event: FormEvent<HTMLInputElement>) => {
          const target = event.target as HTMLInputElement;
          const value = Math.min(+target.value, maxVal - 1);
          setMinVal(value);
          target.value = value.toString();
          setSearchParams((prev) => {
            prev.set(filterName, `${minVal}↕${maxVal}`);
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
        // ref={maxValRef}
        onChange={(event) => {
          // const value = Math.max(+event.target.value, minVal + 1);
          // setMaxVal(value);
          // event.target.value = value.toString();
        }}
        onInput={(event: FormEvent<HTMLInputElement>) => {
          const target = event.target as HTMLInputElement;
          const value = Math.max(+target.value, minVal + 1);
          setMaxVal(value);
          target.value = value.toString();
          setSearchParams((prev) => {
            prev.set(filterName, `${minVal}↕${maxVal}`);
            return prev;
          })
        }}
        className="thumb thumb--zindex-4"
      />
      <div className="slider">
        <div className="slider__track" />
        <div className="slider__range" />
      </div>
    </>
  );
}