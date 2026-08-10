import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import weddingData from "../config/weddingData";

function Reception() {
  const { reception } = weddingData;

  return (
    <section
      id="reception"
      className="wedding-section relative flex min-h-screen items-center overflow-hidden bg-[#eef4e9] px-6 py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          className="glass-card rounded-[2rem] p-8 text-center sm:p-12 md:p-16"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1 }}
        >
          {/* Decorative Symbol */}
          <div className="mb-6 text-4xl text-yellow-600">
            ✦
          </div>

          {/* Small Heading */}
          <p className="text-sm uppercase tracking-[0.3em] text-green-700">
            Join Us For
          </p>

          {/* Main Heading */}
          <h2 className="mt-3 font-serif text-5xl text-green-950 sm:text-6xl">
            {reception.title}
          </h2>

          {/* Divider */}
          <div className="mx-auto my-8 h-px w-24 bg-yellow-600/50" />

          {/* Reception Details */}
          <div className="grid gap-8 sm:grid-cols-3">
            {/* Date */}
            <div>
              <FaCalendarAlt className="mx-auto mb-3 text-xl text-yellow-600" />

              <p className="text-xs uppercase tracking-widest text-green-600">
                Date
              </p>

              <p className="mt-2 font-serif text-lg text-green-950">
                {reception.date}
              </p>
            </div>

            {/* Time */}
            <div>
              <FaClock className="mx-auto mb-3 text-xl text-yellow-600" />

              <p className="text-xs uppercase tracking-widest text-green-600">
                Time
              </p>

              <p className="mt-2 font-serif text-lg text-green-950">
                {reception.time}
              </p>
            </div>

            {/* Venue */}
            <div>
              <FaMapMarkerAlt className="mx-auto mb-3 text-xl text-yellow-600" />

              <p className="text-xs uppercase tracking-widest text-green-600">
                Venue
              </p>

              <p className="mt-2 font-serif text-lg text-green-950">
                {reception.venue}
              </p>
            </div>
          </div>

          {/* Address */}
          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-green-800">
            {reception.address}
          </p>

          {/* Google Maps Button */}
          <a
            href={reception.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-green-800 px-7 py-3 text-sm font-medium text-white transition hover:bg-green-900"
          >
            View Location
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Reception;