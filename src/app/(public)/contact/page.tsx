import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <div className="min-h-screen w-full overflow-hidden line-bg px-2 md:px-8">
        <div className="w-full overflow-hidden border-x border-gray-300">
          <Navbar />

          <h2 className="bg-white py-12 border-y border-gray-300 px-6 my-6 text-[clamp(34px,6vw,72px)] font-black uppercase leading-[0.92] tracking-[-0.08em] text-neutral-900">
            CONTACT US
          </h2>

          {/* MAIN GRID */}
          <div className="min-h-screen w-full bg-white grid grid-rows-2 border border-gray-300">
            {/* ROW 1 */}
            <div className="grid grid-cols-2 border-b border-gray-300">
              {/* LEFT: CONTACT FORM */}
              <div className="p-8 border-r border-gray-300 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>

                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="border border-gray-300 p-3 outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="border border-gray-300 p-3 outline-none"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-gray-300 p-3 outline-none"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="border border-gray-300 p-3 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="border border-gray-300 p-3 outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Company (optional)"
                    className="border border-gray-300 p-3 outline-none"
                  />

                  <select
                    title="Select"
                    className="border border-gray-300 p-3 outline-none bg-white"
                  >
                    <option value="">Select Inquiry Type</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="sales">Sales</option>
                    <option value="partnership">Partnership</option>
                  </select>

                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="border border-gray-300 p-3 outline-none"
                  />

                  <button
                    type="submit"
                    className="bg-black text-white py-3 hover:opacity-80 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="grid grid-rows-2 grid-cols-2 aspect-square">
                <div className="p-8 border-b border-gray-300 flex flex-col justify-center">
                  <h4 className="text-xl font-semibold mb-2">Email Us</h4>
                  <p className="text-gray-600">support@example.com</p>
                </div>

                <div className="p-8 border border-gray-300 flex flex-col justify-center">
                  <h4 className="text-xl font-semibold mb-2">Call Us</h4>
                  <p className="text-gray-600">+977-98XXXXXXXX</p>
                </div>
                <div className="p-8 border border-gray-300 flex flex-col justify-center">
                  <h4 className="text-xl font-semibold mb-2">Call Us</h4>
                  <p className="text-gray-600">+977-98XXXXXXXX</p>
                </div>
                <div className="p-8 border border-gray-300 flex flex-col justify-center">
                  <h4 className="text-xl font-semibold mb-2">Call Us</h4>
                  <p className="text-gray-600">+977-98XXXXXXXX</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Map Goes Here
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
