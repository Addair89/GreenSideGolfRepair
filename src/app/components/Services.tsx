"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
  }, []);

  const animationConfig = {
    // For mobile, set the initial state to the final position
    initial: isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
    // For mobile, keep it in the final position
    whileInView: { opacity: 1, x: 0 },
    // Viewport config can stay the same for both
    viewport: { once: false, amount: 0.4 },
    // No transition needed for mobile
    transition: isMobile ? { duration: 0 } : { duration: 0.6 },
  };

  return (
    <>
      <motion.h2
        {...animationConfig}
        className="font-body font-bold text-3xl md:text-4xl  mt-20 mb-10 self-start ml-[10%] mr-[10%] bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent"
      >
        What We Do... Other Than Golf
      </motion.h2>
      <section className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 pb-8 ml-[10%] mr-[10%] relative">
        <div className="bg-[#2af753] absolute top-[2rem] -z-10 right-0 h-[21.25rem] rounded-full blur-[12rem] w-[8.75rem] md:w-[15.75rem]"></div>
        <div className="bg-[#2af753] absolute bottom-[0rem] -z-10 left-0 h-[21.25rem] rounded-full blur-[12rem] w-[10.75rem] "></div>
        {/* <div className="bg-[#45e565] absolute top-0 -z-10 right-[41rem] h-[21.25rem] w-[11.25rem] rounded-full blur-[12rem] sm:w-[68.75rem] dark:bg-[#45e565]"></div> */}
        <motion.div
          {...animationConfig}
          className="service-card  flex flex-col items-center ease-in-out duration-300 text-black  rounded-lg p-6 space-x-1"
        >
          <h3 className="font-body text-2xl font-bold underline mb-10">
            Re-Grips + Build-Ups
          </h3>
          <p className="text-lg font-body font-bold">
            Over time, golf club grips wear out, becoming slippery and reducing
            control. This service replaces old grips with new ones and can add
            layers of tape under the grip (build-ups) to adjust its thickness
            for a custom fit that enhances comfort and performance.
          </p>
          <p
            onClick={scrollToContact}
            className="self-end font-body mt-auto justify-self-end text-[#2a8d3e] underline hover:text-gray-700 hover:cursor-pointer"
          >
            Click to Schedule
          </p>
        </motion.div>
        <motion.div
          {...animationConfig}
          className="service-card   flex flex-col items-center ease-in-out duration-300 text-black  rounded-lg p-6 space-x-1"
        >
          <h3 className="font-body text-2xl font-bold underline mb-10">
            Shaft Swaps
          </h3>
          <p className="text-lg font-body font-bold">
            If a golf club&apos;s shaft breaks, does not match the golfer&apos;s
            swing style, or needs an upgrade, a shaft swap involves replacing
            the old shaft with a new one. This ensures the club performs
            optimally for the golfer&apos;s unique needs.
          </p>
          <p
            onClick={scrollToContact}
            className="self-end font-body mt-auto text-[#2a8d3e] underline hover:text-gray-700 hover:cursor-pointer"
          >
            Click to Schedule
          </p>
        </motion.div>
        <motion.div
          {...animationConfig}
          className="service-card   flex flex-col items-center ease-in-out duration-300 text-black  rounded-lg p-6 space-x-1"
        >
          <h3 className="font-body text-2xl font-bold underline mb-10">
            Shaft Length Trimming + Extensions
          </h3>
          <p className="text-lg font-body font-bold">
            Golfers of different heights or swing styles often need clubs of
            specific lengths. This service trims or extends shafts to the
            desired length, ensuring better control and a more natural swing.
          </p>
          <p
            onClick={scrollToContact}
            className="self-end font-body mt-auto text-[#2a8d3e] underline hover:text-gray-700 hover:cursor-pointer"
          >
            Click to Schedule
          </p>
        </motion.div>
        <motion.div
          {...animationConfig}
          className="service-card flex flex-col items-center ease-in-out duration-300 text-black  rounded-lg p-6 space-x-1"
        >
          <h3 className="font-body text-2xl font-bold underline mb-10">
            Shaft Adapter Tip Installations + Swaps
          </h3>
          <p className="text-lg font-body font-bold">
            Modern golf drivers often use adjustable shaft adapters. This
            service involves installing or swapping adapter tips, allowing
            golfers to experiment with different shafts or club head
            configurations for optimized performance.
          </p>
          <p
            onClick={scrollToContact}
            className="self-end font-body mt-auto text-[#2a8d3e] underline hover:text-gray-700 hover:cursor-pointer"
          >
            Click to Schedule
          </p>
        </motion.div>
        <motion.div
          {...animationConfig}
          className="service-card  flex flex-col items-center ease-in-out duration-300 text-black   rounded-lg p-6 space-x-1"
        >
          <h3 className="font-body text-2xl font-bold underline mb-10">
            Ferrule Fixes and Customizations
          </h3>
          <p className="text-lg font-body font-bold">
            Ferrules are the small decorative collars that sit between the
            clubhead and the shaft. This service repairs or replaces damaged
            ferrules and can even customize them with unique designs or colors
            for a personalized touch.
          </p>
          <p
            onClick={scrollToContact}
            className="self-end font-body mt-auto text-[#2a8d3e] underline hover:text-gray-700 hover:cursor-pointer"
          >
            Click to Schedule
          </p>
        </motion.div>
        <motion.div
          {...animationConfig}
          className="service-card flex flex-col items-center ease-in-out duration-300 text-black  rounded-lg p-6 space-x-1"
        >
          <h3 className="font-body text-2xl font-bold underline mb-10">
            Shaft Rattle Removal
          </h3>
          <p className="text-lg font-body font-bold">
            A rattling sound in a club can be distracting and indicate loose
            materials inside the shaft. This service identifies and removes the
            source of the rattle, restoring the club&apos;s feel and sound.
          </p>
          <p
            onClick={scrollToContact}
            className="self-end font-body mt-auto text-[#2a8d3e] underline hover:text-gray-700 hover:cursor-pointer"
          >
            Click to Schedule
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default Services;
