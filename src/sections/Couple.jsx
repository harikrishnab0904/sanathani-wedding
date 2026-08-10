import { motion } from "framer-motion";
import weddingData from "../config/weddingData";

function Couple() {
  const { couple } = weddingData;

  return (
    <section
      id="couple"
      className="wedding-section relative flex min-h-screen items-center overflow-hidden bg-[#f5f8f1] px-6 py-16 sm:py-20"
    >
      {/* Decorative Background Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-green-200/30 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-100/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">

        {/* Section Heading */}
        <motion.div
          className="mb-12 text-center sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-green-700">
            Two Souls • One Journey
          </p>

          <h2 className="font-serif text-4xl text-green-950 sm:text-5xl md:text-6xl">
            The Beautiful Couple
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-yellow-600/50" />
            <span className="text-yellow-600">✦</span>
            <span className="h-px w-16 bg-yellow-600/50" />
          </div>
        </motion.div>

        {/* Bride and Groom */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">

          {/* Bride */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            {/* Bride Image */}
            <motion.div
              className="glass-card mx-auto max-w-sm rounded-[2rem] p-2"
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={couple.brideImage}
                alt={couple.brideName}
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                initial={{ scale: 1.08, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              />
            </motion.div>

            {/* Bride Name */}
            <h3 className="mt-6 font-serif text-3xl text-green-950 sm:text-4xl">
              {couple.brideName}
            </h3>

            {/* Bride Parents */}
            <p className="mt-3 text-sm leading-7 text-green-800">
              {couple.brideParents}
            </p>

            {/* Bride Quote */}
            <p className="mx-auto mt-4 max-w-sm font-serif text-lg italic text-green-700">
              "{couple.brideQuote}"
            </p>
          </motion.div>

          {/* Groom */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            {/* Groom Image */}
            <motion.div
              className="glass-card mx-auto max-w-sm rounded-[2rem] p-2"
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src={couple.groomImage}
                alt={couple.groomName}
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                initial={{ scale: 1.08, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              />
            </motion.div>

            {/* Groom Name */}
            <h3 className="mt-6 font-serif text-3xl text-green-950 sm:text-4xl">
              {couple.groomName}
            </h3>

            {/* Groom Parents */}
            <p className="mt-3 text-sm leading-7 text-green-800">
              {couple.groomParents}
            </p>

            {/* Groom Quote */}
            <p className="mx-auto mt-4 max-w-sm font-serif text-lg italic text-green-700">
              "{couple.groomQuote}"
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Couple;