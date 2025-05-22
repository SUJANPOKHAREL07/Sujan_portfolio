import { useForm } from '@formspree/react';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  type formdata = {
    name: string;
    email: string;
    message: string;
  };

  const [formData, setFormData] = useState<formdata>({
    name: '',
    email: '',
    message: '',
  });

  const [state, handleSubmit] = useForm("mqaqjpbj");

  if (state.succeeded) {
    alert("message sent");
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full bg-gray-800 min-h-screen px-4 py-[25rem] md:py-0">
      <h2 className="text-4xl font-bold text-white mb-10 text-center">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
        <div className="w-full h-72 sm:h-96 md:h-[21rem] rounded-lg overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2970.1943184688935!2d83.46755495586206!3d27.711845004943676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1747564745177!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="w-full max-w-md bg-gray-800 p-5 rounded-2xl drop-shadow-lg shadow-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border text-white border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 text-white py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 text-white py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
