import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaFileContract,
  FaHeadset,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-300 via-pink-200 to-purple-300 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {/* Left: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-black">Contact Us</h3>
          <ul className="space-y-2 text-gray">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />{" "}
              <span>123 Winter Street, Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" />{" "}
              <span>+880 123 456 789</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />{" "}
              <span>support@warmpaws.com</span>
            </li>
          </ul>
        </div>

        {/* Center: Social Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4 text-black">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400 hover:text-sky-500 transition transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-pink-500 hover:text-pink-600 transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Stay connected for winter pet care tips & offers!
          </p>
        </div>

        {/* Right: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-black">Quick Links</h3>
          <ul className="space-y-3 text-gray">
            <li>
              <a
                href="https://www.privacypolicies.com/live/2a4e5f1d-dc47-41d6-8393-0e7c1a8b4b23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition transform hover:scale-105"
              >
                <FaShieldAlt className="text-blue-500" /> Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.termsandconditionsgenerator.com/live.php?token=Qx0K2wH5xk5qR1fZ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-600 transition transform hover:scale-105"
              >
                <FaFileContract className="text-purple-500" /> Terms &
                Conditions
              </a>
            </li>
            <li>
              <a
                href="https://www.contactus.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-orange-600 transition transform hover:scale-105"
              >
                <FaHeadset className="text-orange-500" /> Contact Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* End Line */}
      <div className="border-t border-white/30 py-4 text-center text-sm text-gray">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-black">WarmPaws</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
