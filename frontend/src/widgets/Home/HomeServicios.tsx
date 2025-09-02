import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  PartyPopper,
  UtensilsCrossed,
  Drumstick,

} from "lucide-react";

const servicios = [
 {
  titulo: "Catering para Eventos",
  descripcion: "Diseñamos menús personalizados para bodas, cumpleaños y celebraciones, asegurando una experiencia culinaria inolvidable.",
  icono: PartyPopper,
 },
 {
  titulo: "Horneados a la Perfección",
  descripcion: "Especialistas en carnes como pollo, chancho y pavo, preparadas con sazón de tradición para tu banquete.",
  icono: Drumstick,
 },
 {
  titulo: "Menús Exclusivos",
  descripcion: "Ofrecemos una variedad de platos únicos y sabores regionales que se adaptan a tus gustos y a la ocasión.",
  icono: UtensilsCrossed,
 },
];

export default function HomeServicios() {
  const { ref, inView } = useInView({ triggerOnce: false }); // ← persistente

  return (
    <section
      ref={ref}
      className="bg-[#F7F3E3] py-20 px-6 md:px-16 text-charcoal"
    >
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold font-fancy text-mustard">
          Nuestros Servicios
        </h2>
        <p className="mt-4 font-sans text-lg text-slateSoft">
          Adaptados a cada ocasión, con amor, tradición y sabor real.
        </p>
      </div>

      <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map(({ titulo, descripcion, icono: Icon }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="p-6 text-center transition-shadow duration-300 shadow-md bg-white/70 backdrop-blur-xl rounded-2xl hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <Icon className="w-10 h-10 text-mustard" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-charcoal">{titulo}</h3>
            <p className="text-slateSoft">{descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
