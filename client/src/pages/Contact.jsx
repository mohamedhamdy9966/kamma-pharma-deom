import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const Contact = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      <div className="text-center text-3xl font-bold pt-10 border-t border-gray-300">
        <h2>
          We Love To Contact With <span className="text-blue-600">You</span>
        </h2>
      </div>

      <div className="my-10 flex flex-col-reverse items-center justify-center md:flex-row gap-10 mb-28">
        <div className="flex flex-col justify-center items-start gap-6 w-full md:w-1/2">
          <p className="font-semibold text-2xl text-gray-700">Where To Find Us</p>
          <address className="not-italic text-gray-600 leading-relaxed">

              <br />
             <br />
            <span className="block mt-2">0550681549 - 0558658516</span>
          </address>

          <p className="font-semibold text-2xl text-gray-700 mt-6">Jobs</p>
          <button
            className="border border-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 rounded-md"
            aria-label="Learn more about working with us"
          >
            Contact With Us
          </button>
        </div>

        <img
          className="w-full md:max-w-[480px] rounded-lg shadow-md"
          src={assets.contact}
          alt="Contact Us Illustration"
        />
      </div>

      <NewsLetter />
    </div>
  );
};

export default Contact;
