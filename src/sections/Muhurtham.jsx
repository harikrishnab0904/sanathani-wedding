import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import weddingData from "../config/weddingData";

function Muhurtham() {
  const { muhurtham } = weddingData;

  return (
    <section
      id="muhurtham"
      className="wedding-section relative flex min-h-screen items-center overflow-hidden bg-[#f5f8f1] px-6 py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-4xl">

        <motion.div
          className="rounded-[2rem] border border-yellow-600/30 bg-green-950 p-8 text-center text-white shadow-2xl sm:p-12 md:p-16"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1 }}
        >

          {/* Lotus Decoration */}
          <div className="mb-6 text-4xl text-yellow-300">
            🪷
          </div>

          {/* Small Heading */}
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-200">
            The Auspicious Moment
          </p>

          {/* Main Heading */}
          <h2 className="mt-3 font-serif text-5xl text-white sm:text-6xl">
            {muhurtham.title}
          </h2>

          {/* Divider */}
          <div className="mx-auto my-8 h-px w-24 bg-yellow-300/60" />

          {/* Details */}
          <div className="grid gap-8 sm:grid-cols-3">

            {/* Date */}
            <div>
              <FaCalendarAlt className="mx-auto mb-3 text-xl text-yellow-300" />

              <p className="text-xs uppercase tracking-widest text-green-200">
                Date
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                {muhurtham.date}
              </p>
            </div>

            {/* Time */}
            <div>
              <FaClock className="mx-auto mb-3 text-xl text-yellow-300" />

              <p className="text-xs uppercase tracking-widest text-green-200">
                Time
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                {muhurtham.time}
              </p>
            </div>

            {/* Venue */}
            <div>
              <FaMapMarkerAlt className="mx-auto mb-3 text-xl text-yellow-300" />

              <p className="text-xs uppercase tracking-widest text-green-200">
                Venue
              </p>

              <p className="mt-2 font-serif text-lg text-white">
                {muhurtham.venue}
              </p>
            </div>

          </div>

          {/* Address */}
          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-green-200">
            {muhurtham.address}
          </p>

          {/* Quote */}
          <p className="mx-auto mt-8 max-w-2xl font-serif text-lg italic leading-8 text-green-100">
            "With the blessings of our elders, we request your gracious presence."
          </p>

          {/* Maps Button */}
          <a
            href={muhurtham.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full border border-yellow-300/70 px-7 py-3 text-sm font-medium text-yellow-100 transition hover:bg-yellow-300 hover:text-green-950"
          >
            View Location
          </a>

        </motion.div>
      </div>
    </section>
  );
}

export default Muhurtham;