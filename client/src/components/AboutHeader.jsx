const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="/about.webp"
          alt="About-cover"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 container mx-auto px-5 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Sayin Properties Ltd
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            We are a leading real estate agency that specializes in helping
            clients buy, sell, and rent properties in the most desirable
            neighborhoods. Our team of experienced agents is dedicated to
            providing exceptional service and making the buying and selling
            process as smooth as possible.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
