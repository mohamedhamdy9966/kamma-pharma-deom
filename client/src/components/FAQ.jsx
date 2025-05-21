import { useState, useEffect } from "react";
import NewsLetter from "../components/NewsLetter";
import { assets } from "../assets/assets";

const FAQ = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const faqs = [
    {
      question: "What products does Kamma-Pharma offer?",
      answer:
        "We offer a wide range of pharmaceutical products including prescription medications, over-the-counter drugs, supplements, and health care items.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order directly on our website by creating an account and browsing through our product catalog.",
    },
    {
      question: "Can I cancel or change my order?",
      answer:
        "Orders can be modified or canceled within 2 hours of placement by contacting our customer service team.",
    },
    {
      question: "Do you offer delivery services?",
      answer:
        "Yes, we provide secure and prompt delivery services across the country, including temperature-sensitive handling where necessary.",
    },
    {
      question: "How do I return a damaged or incorrect product?",
      answer:
        "Please contact our support team within 3 days of delivery with photos and details. We'll assist you with the return or replacement process.",
    },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center text-3xl font-bold pt-10 border-t border-gray-300">
        <h2>
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
      </div>

      {/* FAQ Section */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        {loading ? (
          <div className="w-full md:max-w-[450px] h-64 bg-gray-300 animate-pulse rounded"></div>
        ) : (
          <img
            src={assets.faq}
            alt="FAQ illustration"
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
              At Kamma-Pharma, we know you may have questions. Below you'll find
              answers to the most common ones about our products, orders, and
              policies.
            </p>
          )}
        </div>
      </div>

      {/* FAQ List */}
      <div className="mb-20 space-y-6">
        {loading
          ? Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="space-y-2">
                  <div className="h-5 bg-gray-300 animate-pulse w-2/3 rounded"></div>
                  <div className="h-4 bg-gray-300 animate-pulse w-5/6 rounded"></div>
                </div>
              ))
          : faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b pb-5 transition-all hover:bg-gray-50 px-2"
              >
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
      </div>

      {/* Newsletter Section */}
      <NewsLetter />
    </div>
  );
};

export default FAQ;
