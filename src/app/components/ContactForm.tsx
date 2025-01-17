"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    service: "re-grips",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "eba8aee1-5fe3-422b-8332-57c0033d29e9", // Replace with your access key
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          service: "re-grips",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-emerald-900 to-emerald-500 md:grid md:grid-cols-3 gap-8 py-20 px-[10%]"
    >
      <div className="mb-10">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl mb-10 font-bold md:text-4xl font-body text-white"
        >
          How Can We Help You
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-body text-xl text-white"
        >
          We&apos;d love to hear from you! Whether you have questions about our
          services, need advice on your golf gear, or want to schedule a repair,
          we&apos;re here to help. Send us a message using the form here or
          reach out out to us on{" "}
          <a className="text-green-300 font-bold" href="">
            FaceBook
          </a>{" "}
          or{" "}
          <a className="text-green-300 font-bold" href="">
            Instagram
          </a>
          .
        </motion.p>
      </div>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="md:col-span-2 flex justify-center items-center flex-col md:grid gap-5 md:grid-cols-2 bg-white/20 rounded-lg shadow-md p-5 md:p-10"
      >
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        />
        <input
          type="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone*"
          className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        />
        <select
          value={formData.service}
          onChange={handleChange}
          name="service"
          className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        >
          <option value="re-grips">Re-Grips + Build-Ups</option>
          <option value="shaft-swaps">Shaft Swaps</option>
          <option value="shaft-length">
            Shaft Length Trimming + Extensions
          </option>
          <option value="shaft-adapter">
            Shaft Adapter Tip Installations + Swaps
          </option>
          <option value="ferrule">Ferrule Fixes and Customizations</option>
          <option value="other">Other...</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          className="w-full md:col-span-2 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        ></textarea>
        <button
          type="submit"
          disabled={isLoading}
          className="col-span-2 mt-10 text-xl font-body md:w-1/3 mx-auto bg-white text-black font-bold shadow-2xl shadow-black py-2 px-6 rounded-md hover:bg-[#225d2d] transition duration-300"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
        {submitStatus === "success" && (
          <p className="text-green-500">Message sent successfully!</p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-500">
            Failed to send message. Please try again.
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default ContactForm;
