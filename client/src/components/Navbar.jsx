import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { translations } from "./locales";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    searchQuery,
    setSearchQuery,
    getCartCount,
    axios,
    setUserToken,
    lang,
    toggleLang,
  } = useAppContext();
  const t = translations[lang];
  const logout = async () => {
    try {
      const token = localStorage.getItem("userToken");
      const { data } = await axios.get("/api/user/logout", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) {
        localStorage.removeItem("userToken"); // Remove token
        setUserToken(null);
        toast.success(data.message);
        setUser(null);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img className="h-10" src={assets.logo} alt="logo" />
      </NavLink>
      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/">{t.home}</NavLink>
        <NavLink to="/products">{t.products}</NavLink>
        <NavLink to="/about">{t.about}</NavLink>
        <NavLink to="/contact">{t.contact}</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="searchIcon" />
        </div>

        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>
        <button
          onClick={toggleLang}
          className="flex items-center gap-1 text-sm px-3 py-1 border rounded-full"
        >
          <span className="rtl-flip">{lang === "en" ? "عربي" : "English"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 2a10 10 0 1 0 10 10"></path>
            <path d="M2 12h20"></path>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </button>
        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            {t.login}
          </button>
        ) : (
          <>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                alt="profile"
                className="cursor-pointer w-10  bg-primary hover:bg-primary-dull transition text-white rounded-full"
              />
              <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
                <li
                  onClick={() => {
                    navigate("my-orders");
                  }}
                  className="cursor-pointer p-1.5 pl-3 bg-primary hover:bg-primary-dull transition text-white rounded-full"
                >
                  {t.orders}
                </li>
                <li
                  onClick={logout}
                  className="cursor-pointer p-1.5 pl-3 bg-primary hover:bg-primary-dull transition text-white rounded-full"
                >
                  {t.logout}
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      <div className="flex items-center gap-6 sm:hidden">
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        <button onClick={() => setOpen(!open)} aria-label="Menu">
          <img src={assets.menu_icon} alt="menuIcon" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[37px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-start gap-2 px-5 text-sm md:hidden z-50 text-gray-800">
          <NavLink to="/" className="block" onClick={() => setOpen(false)}>
            {t.home}
          </NavLink>
          <NavLink
            to="/products"
            className="block"
            onClick={() => setOpen(false)}
          >
            {t.Products}
          </NavLink>
          {user && (
            <NavLink
              to="/my-orders"
              className="block"
              onClick={() => setOpen(false)}
            >
              {t.orders}
            </NavLink>
          )}
          <NavLink to="/about" className="block" onClick={() => setOpen(false)}>
            {t.about}
          </NavLink>
          <NavLink
            to="/contact"
            className="block"
            onClick={() => setOpen(false)}
          >
            {t.contact}
          </NavLink>
          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              {t.login}
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              {t.logout}
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
