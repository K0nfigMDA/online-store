import { Link, useParams } from "react-router-dom";
import ProductCartButton from "../components/ProductCartButton/ProductCartButton";
import ProductDetailsPhotos from "../components/ProductDetailsPhotos/ProductDetailsPhotos";
import { useProducts } from "../contexts/products/productsContext";
import './productDetails.scss';

export default function ProductDetails() {
  const { id } = useParams();
  const { allProducts } = useProducts();

  const product = allProducts.find(el => el.id === Number(id));
  
  return (
    <main className="product-details-page">
      {product 
        ? (<>
            <div className="link-navigation">
              <Link to={'/'}><span>STORE</span></Link>
              &gt;&gt;
              <Link to={`/?category=${product.category}`}><span>{product.category.toUpperCase()}</span></Link>
              &gt;&gt;
              <Link to={`/?brand=${product.brand}`}><span>{product.brand.toUpperCase()}</span></Link>
              &gt;&gt;
              <span>{product.title.toUpperCase()}</span>
            </div>
            <div className="product-details">
              <div className="product-title">{product?.title}</div>
              <div className="product-data">
                <ProductDetailsPhotos product={product}/>
                <div className="product-info">
                  <div className="product-detail-item">
                    <h3>Description:</h3>
                    <p>{product.description}</p>
                  </div>
                  <div className="product-detail-item">
                    <h3>Discount Percentage:</h3>
                    <p>{product.discountPercentage}</p>
                  </div>
                  <div className="product-detail-item">
                    <h3>Rating:</h3>
                    <p>{product.rating}</p>
                  </div>
                  <div className="product-detail-item">
                    <h3>Stock:</h3>
                    <p>{product.stock}</p>
                  </div>
                  <div className="product-detail-item">
                    <h3>Brand:</h3>
                    <p>{product.brand}</p>
                  </div>
                  <div className="product-detail-item">
                    <h3>Category:</h3>
                    <p>{product.category}</p>
                  </div>
                </div>
                <div className="add-to-cart">
                  <div className="cart-button">
                    {`€${product.price}`}
                    <ProductCartButton product={product} bigMode={true}/>
                    <Link to={'/cart'}><button className="button">BUY NOW</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </>)
        : (<div className="not-found">Product number <span>{id}</span> not found</div>)
      }
    </main>   
  );
}