export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">MoveIn</h3>
            <p className="text-gray-400 mb-4">
              Premium real estate services for discerning clients worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Property Sales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Property Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Investment Advisory
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Market Analysis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Property Valuation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                <span>123 Estate Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <span>info@estateelite.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              © 2025 EstateElite. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm cursor-pointer"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm cursor-pointer"
              >
                Sitemap
              </a>
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <i className="fab fa-cc-visa text-gray-500 text-2xl"></i>
            <i className="fab fa-cc-mastercard text-gray-500 text-2xl"></i>
            <i className="fab fa-cc-amex text-gray-500 text-2xl"></i>
            <i className="fab fa-cc-paypal text-gray-500 text-2xl"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}
