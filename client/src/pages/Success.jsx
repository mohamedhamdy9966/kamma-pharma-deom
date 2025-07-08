// Success.jsx
import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Success = () => {
  const { setCartItems } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    toast.success("Payment successful! Order placed.");
    setCartItems({});
    navigate("/my-orders");
  }, []);

  return <div>Processing your payment...</div>;
};

export default Success;