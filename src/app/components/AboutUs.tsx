"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutUs = () => {
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
    <section className="about-us flex flex-col justify-center items-center my-28 ">
      <motion.h2
        {...animationConfig}
        className="font-body font-bold text-3xl md:text-4xl mt-4 self-start ml-[10%] bg-gradient-to-br from-green-500 to-green-700 bg-clip-text text-transparent"
      >
        Why We Do It
      </motion.h2>
      <motion.h3
        {...animationConfig}
        className="text-2xl underline md:text-3xl mt-10 self-start ml-[10%] font-body"
      >
        Our Mission
      </motion.h3>
      <motion.p
        {...animationConfig}
        className="font-body mt-5 max-w-[80%] text-xl md:text-2xl"
      >
        At Greenside Golf Repair, we know that golf is more than a game;
        it&apos;s a craft that intertwines precision with passion. Every repair
        we undertake goes beyond mere restoration--its about preserving and
        enhancing the unique bond between golfer and club. We treat each grip,
        shaft, and head as a piece of your of your personal story, working with
        precision to ensure that your equipment is an extension of your own
        unique style and approach.
      </motion.p>
      <motion.p
        {...animationConfig}
        className=" font-body mt-5 max-w-[80%] text-xl md:text-2xl"
      >
        With your trusted clubs restored to their peak by Greenside, you&apos;ll
        walk the course not only with confidence but with a sense of heritage,
        feeling connected to the countless golfers who share your dedication to
        the sport. At our core, we believe that golf, like life, demands tools
        that resonate with who you are, aligning with your goals and enhancing
        your journey to greatness.
      </motion.p>
    </section>
  );
};

export default AboutUs;
