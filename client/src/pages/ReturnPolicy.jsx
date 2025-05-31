import { useState, useEffect } from "react";
import NewsLetter from "../components/NewsLetter";
import { assets } from "../assets/assets";

const ReturnPolicy = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center text-3xl font-bold pt-10 border-t border-gray-300">
        <h2>
          Return & Refund <span className="text-blue-600">Policy</span>
        </h2>
      </div>

      {/* Content Section */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        {loading ? (
          <div className="w-full md:max-w-[450px] h-64 bg-gray-300 animate-pulse rounded"></div>
        ) : (
          <img
            src={assets.refund}
            alt="Return policy illustration"
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
            <>
              <p>
                At Kamma-Pharma, we are committed to customer satisfaction. We
                strive to ensure that all our pharmaceutical products are
                delivered in perfect condition. However, we understand that
                there may be situations where a return or refund is required.
              </p>
              <p>
                Due to the nature of pharmaceutical products, we accept returns
                only if the item is delivered damaged, expired, or incorrect.
                All claims must be submitted within 3 days of delivery.
              </p>
              <b className="text-gray-800">
                To initiate a return, please contact our customer service team
                with your order number and a photo of the product.
              </b>
              <p>
                Once approved, returns must be sent back in their original
                packaging. Upon inspection, a full refund or replacement will be
                issued based on the nature of the issue.
              </p>
              <p>
                Please note that we do not accept returns or offer refunds for
                temperature-sensitive or opened pharmaceutical products unless
                they are proven to be defective.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Guidelines Section */}
      <div className="text-center text-3xl font-bold mb-10">
        <h2>
          Our <span className="text-blue-600">Return Guidelines</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="flex-1 border rounded-lg px-8 py-10 shadow hover:shadow-md transition-shadow duration-300"
          >
            {loading ? (
              <>
                <div className="h-5 bg-gray-300 animate-pulse w-1/3 rounded mb-3"></div>
                <div className="h-4 bg-gray-300 animate-pulse w-5/6 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 animate-pulse w-4/5 rounded"></div>
              </>
            ) : (
              <>
                <b className="text-lg text-gray-800">
                  {index === 0
                    ? "Report Within 3 Days"
                    : index === 1
                    ? "Products Must Be Unused"
                    : "Refund Processing Time"}
                </b>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  {index === 0
                    ? "All return or refund claims must be made within 3 days of delivery with valid proof."
                    : index === 1
                    ? "Items should be returned in their original packaging and must not be used or tampered with."
                    : "Refunds will be processed within 5-7 business days after successful inspection and approval."}
                </p>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <NewsLetter />
    </div>
  );
};

export default ReturnPolicy;
