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
    <div className="px-4 md:px-10 lg:px-20 py-12">
      {/* Header */}
      <div className="text-center text-4xl font-bold mb-6">
        <h2>
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <p className="text-gray-500 mt-2 text-base">
          Got questions? We've got answers.
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-16 mb-16">
        {/* Image or Placeholder */}
        {loading ? (
          <div className="w-full lg:max-w-md h-64 bg-gray-200 animate-pulse rounded-xl"></div>
        ) : (
          <img
            src={assets.faq}
            alt="FAQ illustration"
            className="w-full lg:max-w-md rounded-xl shadow-lg"
          />
        )}

        {/* Description */}
        <div className="flex flex-col justify-center gap-4 text-gray-700 max-w-2xl">
          {loading ? (
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 animate-pulse w-3/4 rounded"></div>
              <div className="h-4 bg-gray-300 animate-pulse w-full rounded"></div>
              <div className="h-4 bg-gray-300 animate-pulse w-5/6 rounded"></div>
            </div>
          ) : (
            <p className="text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold text-blue-600">Kamma-Pharma</span>,
              we know you may have questions. Below you’ll find the most
              commonly asked questions about our services, products, and
              policies.
            </p>
          )}
        </div>
      </div>

      {/* FAQ Cards */}
      <div className="grid gap-6 mb-20">
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
                className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition duration-300 bg-white"
              >
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
      </div>

      {/* Newsletter */}
      <NewsLetter />
    </div>
  );
};

export default FAQ;
