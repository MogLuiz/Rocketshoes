// Packages
import React, { useState, useEffect } from "react";

// Assets
import { MdAddShoppingCart } from "react-icons/md";

// Utils
import { formatPrice } from "../../util/format";

// Hooks
import { useCart } from "../../hooks/useCart";

// Services
import { api } from "../../services/api";

// Styles
import { ProductList } from "./styles";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------

  const [products, setProducts] = useState<ProductFormatted[]>([]);

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  // const { addProduct, cart } = useCart();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>("products");
      const formattedProduct = response.data.map((product: Product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(formattedProduct);
    }

    loadProducts();
  }, []);
  console.log(products);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  // const cartItemsAmount = cart.reduce((sumAmount, product) => {
  //   // TODO
  // }, {} as CartItemsAmount)

  function handleAddProduct(id: number) {
    // TODO
  }

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <ProductList>
      {products.map((product) => (
        <li>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button
            type="button"
            data-testid="add-product-button"
            // onClick={() => handleAddProduct(product.id)}
          >
            <div data-testid="cart-product-quantity">
              <MdAddShoppingCart size={16} color="#FFF" />
              {/* {cartItemsAmount[product.id] || 0} */} 2
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

export default Home;
