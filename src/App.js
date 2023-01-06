import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Home from "./pages/home";
import ProductDetails from "./pages/product-details";
import ProductInBasket from "./pages/product-in-backet";
import ProductList from "./pages/product-list";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pages/product-list" element={<ProductList />} />
        <Route path="/pages/product-details/:id" element={<ProductDetails />} />
        <Route path="/pages/product-in-backet" element={<ProductInBasket />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
