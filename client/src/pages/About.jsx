import React from "react";

export default function About() {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6 text-slate-800 text-center">
          About Sayin Properties
        </h1>
        <p className="mb-4 text-lg text-slate-700 text-center max-w-3xl mx-auto">
          Sayin Properties is a leading real estate agency that specializes in
          helping clients buy, sell, and rent properties in the most desirable
          neighborhoods. Our team of experienced agents is dedicated to
          providing exceptional service and making the buying and selling
          process as smooth as possible.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Our Mission
          </h2>
          <p className="text-slate-700">
            Our mission is to help our clients achieve their real estate goals
            by providing expert advice, personalized service, and a deep
            understanding of the local market. We strive to make every
            transaction seamless and rewarding.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Our Vision
          </h2>
          <p className="text-slate-700">
            To be the most trusted and innovative real estate agency, setting
            the standard for excellence in the industry while empowering
            communities through exceptional service and sustainable growth.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800 text-center">
          Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p>Upholding the highest ethical standards in every interaction.</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p>
              Delivering outstanding results through dedication and expertise.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p>
              Embracing new ideas and technologies to better serve our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800 text-center">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"></div>
            <h3 className="text-xl font-bold mb-2 text-slate-800">John Doe</h3>
            <p className="text-slate-700">Founder & CEO</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"></div>
            <h3 className="text-xl font-bold mb-2 text-slate-800">
              Jane Smith
            </h3>
            <p className="text-slate-700">Lead Agent</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"></div>
            <h3 className="text-xl font-bold mb-2 text-slate-800">
              Alex Brown
            </h3>
            <p className="text-slate-700">Marketing Manager</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800 text-center">
          Why Choose Us
        </h2>
        <ul className="list-disc list-inside text-slate-700 space-y-2 max-w-3xl mx-auto">
          <li>Comprehensive market knowledge and expertise.</li>
          <li>Personalized service tailored to your needs.</li>
          <li>Commitment to transparency and integrity.</li>
          <li>Innovative solutions for all your real estate needs.</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800 text-center">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-slate-700 italic mb-4">
              "Sayin Properties made the process of buying our dream home so
              easy and stress-free. Their team was professional, knowledgeable,
              and always available to answer our questions."
            </p>
            <h3 className="text-lg font-bold text-slate-800">- Daniel Kepha</h3>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-slate-700 italic mb-4">
              "I highly recommend Sayin Properties to anyone looking to sell
              their home. They provided expert advice and helped us get the best
              possible price for our property."
            </p>
            <h3 className="text-lg font-bold text-slate-800">- Daniel Kepha</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
