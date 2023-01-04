import { FormEvent } from 'react';
import { masterImg, mirImg, noLogoImg, visaImg } from '../constants/modal';

export function restrictInput(e: FormEvent, length: number) {
   const target = e.target as HTMLInputElement;
   const value = target.value;
   if (value.length > length) {
      const newValue = value.slice(0, length);
      target.value = newValue;
   }
}

export function addSeparator(e: FormEvent) {
   const target = e.target as HTMLInputElement;
   const value = target.value;
   const clearValue = clearNumber(value);

   if (clearValue.length >= 3) {
      target.value = `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
   } else {
      target.value = clearValue;
   }
}

export function clearNumber(value = '') {
   return value.replace(/\D+/g, '');
}

export function changeCardImg(num: string) {
   if (num === '5') {
      return visaImg;
   }
   if (num === '6') {
      return masterImg;
   }
   if (num === '4') {
      return mirImg;
   }
   return noLogoImg;
}
