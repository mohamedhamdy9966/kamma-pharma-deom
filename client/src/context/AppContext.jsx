import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const [userToken, setUserToken] = useState(null);
  const [sellerToken, setSellerToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  // Update fetchUser function
  const fetchUser = async () => {
    const token = localStorage.getItem("userToken");
    if (!token) return;
    try {
      const { data } = await axios.get("api/user/is-auth", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) {
        setUser(data.user);
        setCartItems(data.user.cartItems);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("userToken");
        setUserToken(null);
        delete axios.defaults.headers.common["Authorization"];
      }
      setUser(null);
    }
  };
  // Fetch All Products
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/product/list");
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  // Fetch Seller Status
  const fetchSeller = async () => {
    const token = localStorage.getItem("sellerToken");
    if (!token) return;
    try {
      const { data } = await axios.get("api/seller/is-auth", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setIsSeller(data.success);
    } catch (error) {
      setIsSeller(false);
      localStorage.removeItem("sellerToken");
      toast.error(error.message);
    }
  };
  // add product to cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added To Cart");
  };
  // update cart item Quantity
  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  };
  // Remove Product From Cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    toast.success("Removed From Cart");
    setCartItems(cartData);
  };
  // get cart item count
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };
  // get cart total amount
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      if (cartItems[items] > 0) {
        totalAmount += itemInfo.offerPrice * cartItems[items];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };
  // Add useEffect to re-check auth on refresh
  useEffect(() => {
    const checkAuth = async () => {
      await fetchUser();
      await fetchSeller();
    };
    window.addEventListener("focus", checkAuth);
    return () => window.removeEventListener("focus", checkAuth);
  }, []);
  // Add useEffect for initial token loading
  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    const sellerToken = localStorage.getItem("sellerToken");

    if (userToken) setUserToken(userToken);
    if (sellerToken) setSellerToken(sellerToken);

    fetchUser();
    fetchSeller();
    fetchProducts();
  }, []);
  // load All The Products
  useEffect(() => {
    fetchUser();
    fetchSeller();
    fetchProducts();
  }, []);
  // update Database Cart Items
  useEffect(() => {
    const updateCart = async () => {
      try {
        const token = localStorage.getItem("userToken");
        if (!token || !user) return;

        await axios.post(
          "/api/cart/update",
          { cartItems },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (error) {
        toast.error(error.message);
      }
    };
    if (user) {
      updateCart();
    }
  }, [cartItems]);
  const value = {
    currency,
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    setProducts,
    cartItems,
    setCartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    searchQuery,
    setSearchQuery,
    getCartCount,
    getCartAmount,
    axios,
    fetchProducts,
    userToken,
    setUserToken,
    sellerToken,
    setSellerToken,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
