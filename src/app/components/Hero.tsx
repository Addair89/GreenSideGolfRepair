"use client";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="hero relative text-white flex flex-col items-center bg-cover bg-bottom md:bg-left"
      style={{
        backgroundImage: "url('/topdowngolfball.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-slate-50/0 to-70% to-slate-900  md:bg-gradient-to-r md:from-slate-50/0 md:to-70% md:to-slate-900"></div>

      {/* Content */}
      <div className="relative  flex flex-col items-center h-full lg:max-w-[50%] lg:ml-auto">
        <p className=" font-body font-bold max-w-[80%] text-center text-3xl md:text-4xl mb-2 mt-14 lg:text-right lg:text-4xl xl:text-5xl">
          At{" "}
          <span className="bg-gradient-to-r from-green-500 to-green-50 bg-clip-text text-transparent">
            Greenside Golf Repair
          </span>
          , we believe golf is more than a game.
        </p>
        <p className="font-body font-bold max-w-[80%] text-center text-lg md:text-lg mb-2 mt-14 lg:text-right lg:text-lg xl:text-xl">
          It&apos;s a craft where precision meets passion. Every repair we make
          goes beyond restoration; it&apos;s about strengthening the unique
          connection between you and your clubs.
        </p>
        <button
          onClick={scrollToContact}
          className="mt-10 mb-20 text-2xl font-body lg:ml-auto lg:mr-[10%] bg-white text-black font-bold shadow-2xl border border-black shadow-black py-2 px-6 rounded-md hover:bg-[#225d2d] transition duration-300"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
