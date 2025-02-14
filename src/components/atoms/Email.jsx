import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";

export default function Email() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/xbldakjn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ email: "", message: "" });
    } else {
      setStatus("Something went wrong, try again.");
    }
  };
  return (
    <main
      className="font-mono text-primary flex"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className="p-6 md:p-6 lg:p-8 bg-white shadow-md rounded-xl">
        <h2 className="text-3xl max-sm:text-2xl font-bold mb-2 md:mb-5 font-kanit">
          Send Me Message
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col-reverse">
            <div className="relative mb-5">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border pl-12 pr-4 py-2 border-gray-300 rounded-md relative w-full md:w-64 lg:w-96 outline-none max-sm:placeholder:text-xs"
              />
              <MdOutlineEmail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 border-r-2 border-gray-200 h-full  pr-2"
                size={30}
              />
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="mb-2 p-2 border rounded !h-32 md:!h-52 lg:!h-64 outline-none max-sm:placeholder:text-xs"
          />
          <button type="submit" className="bg-primary text-white p-2 rounded">
            Send
          </button>
        </form>
        {status && <p className="mt-2 text-green-500">{status}</p>}
      </div>
    </main>
  );
}
