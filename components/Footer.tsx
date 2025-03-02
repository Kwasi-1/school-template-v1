const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact & About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact & About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
              <li><a href="#" className="hover:text-gray-400">Book a demo</a></li>
              <li><a href="#" className="hover:text-gray-400">Reacher</a></li>
              <li><a href="#" className="hover:text-gray-400">Get a quote</a></li>
              <li><a href="#" className="hover:text-gray-400">Reviews</a></li>
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href="#" className="hover:text-gray-400">Industries</a></li>
            </ul>
          </div>

          {/* Technical */}
          <div>
            <h3 className="text-lg font-bold mb-4">Technical</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Release Notes</a></li>
              <li><a href="#" className="hover:text-gray-400">Service Status</a></li>
              <li><a href="#" className="hover:text-gray-400">Streamup</a></li>
            </ul>
          </div>

          {/* Terms & Conditions */}
          <div>
            <h3 className="text-lg font-bold mb-4">Terms & Conditions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-400">Service Level Agreement</a></li>
              <li><a href="#" className="hover:text-gray-400">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Copyright */}
          <div>
            <h3 className="text-lg font-bold mb-4">Courssins, Inc.</h3>
            <p className="text-gray-400">
              Copyright © 2023 Courssins, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;