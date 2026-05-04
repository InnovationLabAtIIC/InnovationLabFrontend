import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ContactInfoCard } from "@/components/Contacts/ContactInfoCard";
import Button from "@/components/primitives/Button";

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
          <div className=" w-full bg-white grid grid-rows-2 border border-gray-300">
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

                  <Button>Send Message</Button>
                </form>
              </div>

              <div className="grid grid-rows-2 grid-cols-2 aspect-square"></div>
            </div>
            <div className="flex flex-row">
              <ContactInfoCard
                title="Email Us"
                content="support@example.com"
                isBordered={true}
              />
              <ContactInfoCard
                title="Email Us"
                content="support@example.com"
                isBordered={true}
              />
              <ContactInfoCard
                title="Email Us"
                content="support@example.com"
                isBordered={true}
              />
              <ContactInfoCard
                title="Email Us"
                content="support@example.com"
                isBordered={true}
              />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
