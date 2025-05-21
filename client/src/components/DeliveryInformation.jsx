import { useState, useEffect } from "react";
import NewsLetter from "../components/NewsLetter";
import { assets } from "../assets/assets";

const DeliveryInformation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* Page Header */}
      <div className="text-center text-3xl font-bold pt-10 border-t border-gray-300">
        <h2>
          Delivery <span className="text-blue-600">Information & Policy</span>
        </h2>
      </div>

      {/* Delivery Image & Intro Text */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        {loading ? (
          <div className="w-full md:max-w-[450px] h-64 bg-gray-300 animate-pulse rounded"></div>
        ) : (
          <img
            src={assets.delivery}
            alt="Delivery illustration"
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
              Kamma-Pharma is committed to ensuring that all your pharmaceutical
              orders are delivered promptly and securely. Our delivery system is
              designed with health, efficiency, and reliability in mind.
            </p>
          )}
        </div>
      </div>

      {/* Delivery Policy Content */}
      <div className="mb-20 space-y-8 text-gray-700">
        {loading ? (
          Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-5 bg-gray-300 animate-pulse w-1/2 rounded"></div>
                <div className="h-4 bg-gray-300 animate-pulse w-4/5 rounded"></div>
                <div className="h-4 bg-gray-300 animate-pulse w-3/4 rounded"></div>
              </div>
            ))
        ) : (
          <>
            <section>
              <h3 className="font-semibold text-xl mb-2">Delivery Areas</h3>
              <p>
                We deliver nationwide, covering major cities and remote areas
                through trusted logistics partners. Cold-chain delivery is
                available for temperature-sensitive medications.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-2">
                Delivery Timeframes
              </h3>
              <p>
                Orders are processed within 24 hours. Standard delivery takes
                2–4 business days. Express options are available at checkout.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-2">Shipping Charges</h3>
              <p>
                Standard delivery is free on orders above SAR 200. Express
                delivery or cold-chain shipping may incur additional charges,
                clearly displayed at checkout.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-2">Tracking Orders</h3>
              <p>
                Once your order ships, you’ll receive a tracking number via SMS
                and email. You can monitor delivery progress in your account
                dashboard.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-2">Failed Deliveries</h3>
              <p>
                If a delivery attempt fails, our courier will retry or contact
                you directly. After multiple failed attempts, your order will be
                returned and refunded according to our return policy.
              </p>
            </section>
          </>
        )}
      </div>

      {/* Newsletter */}
      <NewsLetter />
    </div>
  );
};

export default DeliveryInformation;
