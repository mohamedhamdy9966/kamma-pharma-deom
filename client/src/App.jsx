import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import AllProducts from "./pages/AllProducts";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AddAddress from "./pages/AddAddress";
import MyOrders from "./pages/MyOrders";
import SellerLayout from "./pages/seller/SellerLayout";
import AddProduct from "./pages/seller/AddProduct";
import ProductList from "./pages/seller/ProductList";
import AllOrders from "./pages/seller/AllOrders";
import Loading from "./components/Loading";
import SellerLogin from "./components/seller/SellerLogin";
import Login from "./components/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ReturnPolicy from "./pages/ReturnPolicy";
import DeliveryInformation from "./pages/DeliveryInformation";
import PaymentMethods from "./pages/PaymentsMethods";
import FAQ from "./pages/FAQ";
import Success from "./pages/Success"; // Add this import
import Cancel from "./pages/Cancel";  // Add this import

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin, isSeller, lang } = useAppContext();
  useEffect(() => {
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Login /> : null}
      <Toaster />
      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/delivery" element={<DeliveryInformation />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/success" element={<Success />} />{" "}
          {/* Ensure this route exists */}
          <Route path="/cancel" element={<Cancel />} />{" "}
          {/* Ensure this route exists */}
          <Route path="/loader" element={<Loading />} />
          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route index element={isSeller ? <AddProduct /> : <Home />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="orders" element={<AllOrders />} />
          </Route>
        </Routes>
      </div>
      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
