'use client';

import React, { useState } from 'react';

const ContactHome = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    town: '',
    location: '',
    message: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-6 md:py-12 bg-cover bg-center"
      style={{ backgroundImage: 'url("/background.jpg")' }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white/70 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-[#3F444B]">
          Contact Us
        </h2>
        <p className="text-center text-sm mt-1 mb-6 text-[#3F444B]">
          Have a question? Reach out to us!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ['First name', 'firstName'],
            ['Last name', 'lastName'],
            ['Email', 'email'],
            ['Phone number', 'phone'],
            ['Town', 'town'],
            ['Location', 'location'],
          ].map(([label, name]) => (
            <div key={name} className="flex flex-col">
              <label
                htmlFor={name}
                className="text-sm font-medium mb-1 text-[#3F444B]"
              >
                {label}
              </label>
              <input
                type="text"
                id={name}
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder="Enter here"
                className="p-3 rounded-lg border border-gray-300 bg-white placeholder-[#B8B8B8] text-sm text-[#3F444B] focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>
          ))}
        </div>

        <div className="mt-4">
          <label
            htmlFor="message"
            className="text-sm font-medium mb-1 block text-[#3F444B]"
          >
            How can we help you?
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter here"
            className="w-full p-3 rounded-lg border border-gray-300 bg-white placeholder-[#B8B8B8] text-sm text-[#3F444B] focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2 rounded-lg shadow-md transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactHome;
