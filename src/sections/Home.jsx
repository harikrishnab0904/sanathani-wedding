import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import weddingData from "../config/weddingData";

function Home() {
  const { websiteTitle, couple } = weddingData;

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${couple.coupleImage})`,
        }}
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-950/55" />

      {/* Soft Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(5,35,20,0.55)_100%)]" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center text-white">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        >
          {/* Ganesh Mantra */}
          <motion.p
            className="mb-6 text-sm tracking-[0.35em] text-yellow-100 sm:text-base"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            || श्री गणेशाय नमः ||
          </motion.p>

          {/* Decorative Divider */}
          <div className="mx-auto mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-yellow-200/70 sm:w-20" />

            <span className="text-lg text-yellow-200">✦</span>

            <span className="h-px w-12 bg-yellow-200/70 sm:w-20" />
          </div>

          {/* Title */}
          <motion.h1
            className="font-serif text-4xl font-medium leading-tight tracking-wide text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 1.2,
            }}
          >
            {websiteTitle}
          </motion.h1>

          {/* Invitation Message */}
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 tracking-wide text-green-50/90 sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,
              duration: 1.2,
            }}
          >
            With the blessings of our families, we invite you to celebrate
            the beginning of a beautiful journey together.
          </motion.p>

          {/* Names */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 1,
            }}
          >
            <p className="font-serif text-2xl tracking-wide text-yellow-100 sm:text-3xl md:text-4xl">
              {couple.brideName}

              <span className="mx-3 text-xl text-yellow-300 sm:mx-5 sm:text-2xl">
                ♥
              </span>

              {couple.groomName}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-[10px] uppercase tracking-[0.35em]">
            Scroll
          </span>

          <FaChevronDown className="text-sm text-yellow-200" />
        </div>
      </motion.div>

      {/* Decorative Corner */}
      <div className="absolute left-5 top-5 h-16 w-16 border-l border-t border-yellow-200/40 sm:left-8 sm:top-8 sm:h-20 sm:w-20" />

      <div className="absolute bottom-5 right-5 h-16 w-16 border-b border-r border-yellow-200/40 sm:bottom-8 sm:right-8 sm:h-20 sm:w-20" />
    </section>
  );
}

export default Home;