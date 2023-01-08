import { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/products";
import './ProductDetailsPhotos.scss';

interface IProductDetailsPhotos {
  product: IProduct;
}

export default function ProductDetailsPhotos({product}: IProductDetailsPhotos) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [mainPhoto, setMainPhoto] = useState('');
  
  useEffect(() => {
    if (product) {
      const images = Promise.all(product.images.map((el) => fetch(el)));
      images.then(data => {
        const contents = data.map((el) => el.headers.get('content-length'));
        const uniqueContents = [...new Set(contents)];
        const uniqueLinks = uniqueContents.map(el => {
          const response = data.find(res => res.headers.get('content-length') === el) as Response;
          return response.url;
        });
        setPhotos(uniqueLinks);
        setMainPhoto(uniqueLinks[0]);
      });
    }
  }, [product]);

  return (
    <div className="product-photos">
      <div className="slides">
        {photos.map((image, index) => <img onClick={() => setMainPhoto(image)} alt="slide" src={image} key={index}/>)}
      </div>
      <div className="grand-photo">
        <img alt="slide" src={mainPhoto}/>
      </div>
    </div>);
}