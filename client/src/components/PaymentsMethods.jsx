import { useState, useEffect } from "react";
import NewsLetter from "../components/NewsLetter";
import { assets } from "../assets/assets";

const PaymentMethods = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const methods = [
    {
      name: "Visa",
      description:
        "Secure and instant payments using your Visa credit or debit card.",
    },
    {
      name: "Mastercard",
      description:
        "We accept Mastercard payments for your convenience and safety.",
    },
    {
      name: "Vodafone Cash",
      description: "Fast mobile wallet payments for Vodafone users in Egypt.",
    },
    {
      name: "Orange Cash",
      description:
        "Convenient payment through your Orange mobile wallet account.",
    },
    {
      name: "Etisalat Cash",
      description: "Easily pay using your Etisalat mobile wallet balance.",
    },
    {
      name: "WE Pay",
      description: "WE Cash wallet users can enjoy smooth and quick payments.",
    },
    {
      name: "Cash on Delivery",
      description: "Pay in cash at the time of delivery for eligible orders.",
    },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* Page Header */}
      <div className="text-center text-3xl font-bold pt-10 border-t border-gray-300">
        <h2>
          Payment <span className="text-blue-600">Methods</span>
        </h2>
      </div>

      {/* Image and Intro */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        {loading ? (
          <div className="w-full md:max-w-[450px] h-64 bg-gray-300 animate-pulse rounded"></div>
        ) : (
          <img
            src={assets.payment}
            alt="Payment options"
            className="w-full md:max-w-[450px] rounded-lg shadow-md"
          />
        )}

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
          {loading ? (
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 animate-pulse w-3/4 rounded"></div>
              <div className="h-4 bg-gray-300 animate-pulse w-full rounded"></div>
              <div className="h-4 bg-gray-300 animate-pulse w-5/6 rounded"></div>
              <div className="h-4 bg-gray-300 animate-pulse w-2/3 rounded"></div>
            </div>
          ) : (
            <p>
              At Kamma-Pharma, we offer multiple payment options to make your
              experience smooth and convenient. Whether you prefer online
              transactions or paying upon delivery, we’ve got you covered.
            </p>
          )}
        </div>
      </div>

      {/* Payment Options List */}
      <div className="mb-20 space-y-10 text-gray-700">
        {loading
          ? Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="space-y-3">
                  <div className="h-5 bg-gray-300 animate-pulse w-1/2 rounded"></div>
                  <div className="h-4 bg-gray-300 animate-pulse w-4/5 rounded"></div>
                  <div className="h-4 bg-gray-300 animate-pulse w-3/4 rounded"></div>
                </div>
              ))
          : methods.map((method, index) => (
              <div key={index}>
                <h3 className="font-semibold text-xl mb-1">{method.name}</h3>
                <p>{method.description}</p>
              </div>
            ))}
      </div>

      {/* Newsletter */}
      <NewsLetter />
    </div>
  );
};

export default PaymentMethods;
