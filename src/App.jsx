import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Homepage from "./pages/Home";
import Productspage from "./pages/Products";
import Aboutpage from "./pages/About";
import Contactpage from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ConfirmOrder from "./pages/ConfirmOrder";
import Success from "./pages/Success";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={'loading......'}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productspage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/cart" element={<Cart />}  />
          <Route path="/checkout" element={<Checkout />}  />
          <Route path="/confirm-order" element={<ConfirmOrder />}  />
          <Route path="/success" element={<Success />}  />
          <Route path="/products/:slug" element={<SingleProduct />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
