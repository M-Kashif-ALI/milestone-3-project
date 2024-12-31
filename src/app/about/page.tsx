import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white py-8">
        <h1 className="text-center text-4xl font-bold">About Nike</h1>
      </header>
      <main className="px-6 py-12 md:px-20">
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-7 mb-6">
            Nike, Inc. is a global leader in athletic footwear, apparel, and equipment.
            Since our founding, we have been committed to creating innovative products
            that inspire athletes of all levels to perform at their best.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-7 mb-6">
            To bring inspiration and innovation to every athlete in the world.
            We believe that if you have a body, you are an athlete.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Innovation</li>
            <li>Sustainability</li>
            <li>Diversity and Inclusion</li>
            <li>Commitment to Athletes</li>
          </ul>
        </section>
        <section className="mt-12 bg-gray-900 text-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="leading-7 mb-6">
            Founded in 1964 as Blue Ribbon Sports and officially becoming Nike, Inc. in 1971,
            we have grown into one of the most recognizable and respected brands in the world.
          </p>
          <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
          <p className="leading-7">
            From groundbreaking designs to sustainability initiatives,
            Nike consistently pushes the boundaries of innovation, helping athletes
            achieve greatness while caring for the planet.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;