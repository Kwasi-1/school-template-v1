import Head from "next/head";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Contact Us - Peskab Construction</title>
        <meta
          name="description"
          content="Get in touch with Peskab Construction for personalized consultation and expert advice."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Building Trust, Delivering Excellence
          </h1>
          <p className="text-xl">Get in Touch and Start Your Project Today</p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-8">
              We’re here to bring your vision to life. Whether you’re planning a
              residential build, a commercial development, or a renovation
              project, our team is ready to assist you every step of the way.
              Reach out to Peskab Construction Limited for personalized
              consultation, expert advice, and tailored solutions that meet your
              specific needs. Contact us today to start building your future.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Email:</h3>
                <p>amozbenk20@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Phone:</h3>
                <p>020 86 4539 / 024 482 7449</p>
              </div>
              <div>
                <h3 className="font-semibold">Location:</h3>
                <p>KTU, Junction 4</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <Input type="text" placeholder="Name" required />
              <Input type="email" placeholder="Email" required />
              <Input type="text" placeholder="Subject" required />
              <Textarea placeholder="Your Message" rows={5} required />
              <Button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800"
              >
                Send Email
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Peskab */}
            <div>
              <h3 className="text-lg font-bold mb-4">Peskab Construction</h3>
              <p className="text-gray-400">
                With years of experience, Peskab has built a reputation for
                excellence, precision, and customer satisfaction.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Our Projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-lg font-bold mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>+233 30 816 4576</li>
                <li>+233 24 482 7441</li>
                <li>amozbenk24@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
