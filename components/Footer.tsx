"use client";

const Footer = () => {
  return (
    <div>
      {/* <div></div> */}

      <div className="relative container mx-auto">
        <div
          className="relative flex md:flex-row justify-around items-center bg-red-800 md:w-11/12 lg:w-4/5 py-4 md:py-8 lg:py-10 rounded-2xl mx-4 md:mx-auto text-white mb-8 top-16 md:top-24"
          style={{
            backgroundImage: "url('footer_image.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Contact Information using reusable component */}
          <a href="https://maps.app.goo.gl/Kdr4PQ27nfd6ukvJ7">
            Achimota Mile 7
          </a>
          <a href="mailto:autochef83@gmail.com">theautochef83@gmail.com</a>
          <a href="tel:+233200666211">0200666211</a>
        </div>
      </div>


      <footer className="bg-black text-white py-12 px-6 md:px-20  pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section: Logo and Info */}
          <div>
            <h2 className="text-2xl font-semibold">UNIPIX UNIVERSITY</h2>
            <p className="text-gray-400 mt-4">
              We are passionate about education, dedicated to providing
              high-quality resources for learners of all backgrounds.
            </p>
            <div className="mt-4 space-y-2 text-gray-400">
              <p>📍 Park, Melbourne, Australia</p>
              <p>📞 485-826-710</p>
            </div>
          </div>

          {/* Our Campus */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Our Campus</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Academic</li>
              <li>Athletics</li>
              <li>Campus Life</li>
              <li>Research</li>
              <li>Academic Area</li>
            </ul>
          </div>

          {/* Our Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Our Pages</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Tuition Fee</li>
              <li>Alumni</li>
              <li>Faculty Staff</li>
              <li>Event</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
            <div className="space-y-4">
              {/* Post 1 */}
              <div className="flex items-center space-x-3">
                <img
                  src="/post1.jpg"
                  alt="Post 1"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="text-gray-400 text-sm">📅 August 6, 2024</p>
                  <p className="text-white">
                    Those Inequalities Are Inequalities That
                  </p>
                </div>
              </div>

              {/* Post 2 */}
              <div className="flex items-center space-x-3">
                <img
                  src="/post2.jpg"
                  alt="Post 2"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="text-gray-400 text-sm">📅 July 4, 2024</p>
                  <p className="text-white">
                    After Decades Of Improvement, Cardiovascular
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 text-center text-gray-500 border-t border-gray-700 pt-6">
          <p>
            Copyright &copy; {new Date().getFullYear()}. All Rights Reserved by 
            <span className="text-white font-semibold"> Unipix</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
