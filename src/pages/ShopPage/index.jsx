import { useContext } from "react";
import { ProductContext } from "../../context/products.context";
import ProductCard from "../../components/ProductCard";
import "./styles.scss";
const ShopPage = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ShopPage;
