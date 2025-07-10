import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Cancel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.error("Payment cancelled.");
    navigate("/cart");
  }, []);

  return <div>Payment cancelled...</div>;
};

export default Cancel;