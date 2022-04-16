import { useContext } from "react";
import { ProductContext } from "../../context/products.context";
const ShopPage = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      {products.map(({ id, name }) => {
        return (
          <div key={id}>
            <h1>{name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default ShopPage;
