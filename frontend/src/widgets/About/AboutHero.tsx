import { motion } from "framer-motion";
import heroImg from "/Ronksbfjkbajk635sd65g23a.jpg"; // Imagen del restaurante, personal o ambiente

export default function AboutHero() {
  return (
    <section
      className="relative h-[70vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6"
      >
        <h1 className="text-5xl font-bold font-fancy text-champagne">
          Sobre Nosotros
        </h1>
        <p className="mt-4 text-lg text-[#f2e9d6] font-sans max-w-xl mx-auto">
          Primeramente doy gracias a Dios por permitirme cumplir mis sueños 
        </p>
        <p className="mt-4 text-lg text-[#f2e9d6] font-sans max-w-xl mx-auto">
          Somos más que un servicio de Horneados: somos maestros del sabor. Descubre la historia, la misión y los valores que nos inspiran a convertir tu evento en un momento inolvidable.
        </p>
      </motion.div>
    </section>
  );
}
