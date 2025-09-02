import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section
      className="relative px-6 py-32 text-center text-white bg-center bg-cover md:px-16"
      style={{ backgroundImage: "url('/5d4151g2h1g21j145jg4alñksmdk.jpg')" }} // Reemplaza por tu ruta real
    >
      <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h1 className="mb-4 text-4xl font-bold md:text-6xl font-fancy">
          Nuestros Servicios
        </h1>
        <p className="text-lg text-white/90">
          Descubre todo lo que ofrecemos para ti, tu familia o tu evento especial.
        </p>
      </motion.div>
    </section>
  );
}
