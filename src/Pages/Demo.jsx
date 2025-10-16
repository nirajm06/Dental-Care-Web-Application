import React from "react";

const Demo = () => {
  const handleChange = () => {};

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full bg-gradient-to-b from-blue-900 to-blue-600 text-white text-center py-20">
        <h2 className="text-lg mt-10">Demonstration for DentalGuru software.</h2>
        <h1 className="text-4xl font-bold mt-10">Book A Demo</h1>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="bg-white shadow-lg rounded-2xl p-12 w-full max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xl font-semibold">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="w-full p-5 border rounded-lg text-xl"
                  required
                />
              </div>
              <div>
                <label className="block text-xl font-semibold">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="w-full p-5 border rounded-lg text-xl"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xl font-semibold">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                className="w-full p-5 border rounded-lg text-xl"
                required
              />
            </div>
            <div>
              <label className="block text-xl font-semibold">Comments *</label>
              <textarea
                name="message"
                onChange={handleChange}
                className="w-full p-5 border rounded-lg text-xl h-40"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-5 rounded-lg text-xl font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Demo;
