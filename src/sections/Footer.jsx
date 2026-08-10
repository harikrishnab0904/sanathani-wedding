import { motion } from "framer-motion";
import weddingData from "../config/weddingData";

function Footer() {
  const { footer } = weddingData;

  return (
    <footer className="bg-green-950 px-6 py-16 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto mb-6 h-px w-24 bg-yellow-300/60" />

        <p className="mx-auto max-w-xl font-serif text-xl italic leading-8 text-green-100">
          {footer.message}
        </p>

        <div className="mt-8 text-yellow-300">
          ✦
        </div>

        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-green-300">
          With Love & Blessings
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;