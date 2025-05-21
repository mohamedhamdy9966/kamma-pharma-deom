import { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* About Us Section */}
      <div className="text-center text-3xl font-bold pt-10 border-t border-gray-300">
        <h2>
          About <span className="text-blue-600">Kamma-Pharma</span>
        </h2>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        {loading ? (
          <div className="w-full md:max-w-[450px] h-64 bg-gray-300 animate-pulse rounded"></div>
        ) : (
          <img
            src={assets.about}
            alt="Pharmaceutical professionals"
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
                Kamma-Pharma is a leading pharmaceutical company dedicated to
                improving lives through high-quality, innovative healthcare
                solutions. Our journey began with a clear vision: to make
                healthcare safer, more accessible, and more effective for
                everyone.
              </p>
              <p>
                At Kamma-Pharma, our core values are integrity, quality, and
                innovation. We are committed to advancing pharmaceutical science
                and delivering trusted medicines that meet global standards.
              </p>
              <b className="text-gray-800">
                Join us on our mission to shape a healthier future by developing
                and distributing reliable, affordable medicines.
              </b>
              <p>
                Our team of dedicated scientists, pharmacists, and healthcare
                professionals works tirelessly to meet the needs of patients and
                communities, backed by transparent practices and strong
                partnerships.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center text-3xl font-bold mb-10">
        <h2>
          Why Choose <span className="text-blue-600">Kamma-Pharma</span>
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
                    ? "High Quality Standards"
                    : index === 1
                    ? "Innovation in Research"
                    : "Trusted by Professionals"}
                </b>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  {index === 0
                    ? "We adhere to the strictest quality control protocols, ensuring that every product is safe, effective, and reliable."
                    : index === 1
                    ? "Our R&D team focuses on developing new treatments and improving existing formulations to meet evolving healthcare demands."
                    : "Hospitals, doctors, and patients trust us for our transparency, consistency, and commitment to excellence."}
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

export default About;
