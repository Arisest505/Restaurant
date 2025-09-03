import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Microwave,
  PartyPopper,

  Truck,
} from "lucide-react";

const services = [
  {
    titulo: "Banquetes para Eventos",
    descripcion: "Platos a su preferencia para **bodas, cumpleaños, bautizos, reuniones y todo tipo de eventos**, garantizando sabor y abundancia en tu celebración.",
    icono: <PartyPopper className="w-8 h-8 text-mustard" />,
  },
  {
    titulo: "Especialidad en Horneados",
    descripcion: "El arte de hornear **pollo, chancho y pavo y muchas otras carnes** con un sazón único. Disponibles por encargo para tu banquete o reunión especial.",
    icono: <Microwave className="w-8 h-8 text-mustard" />,
  },
  {
    titulo: "Platos a la Carta",
    descripcion: "Disfruta de nuestros **platos caseros** con el auténtico sabor de casa, disponibles para pedidos individuales y listos para disfrutar.",
    icono: <UtensilsCrossed className="w-8 h-8 text-mustard" />,
  },

  {
    titulo: "Servicio a Domicilio",
    descripcion: "Llevamos todos tus pedidos directamente a tu puerta. Nuestro servicio de delivery propio asegura la calidad y frescura en cada entrega.",
    icono: <Truck className="w-8 h-8 text-mustard" />,
  },
];

export default function ServicesList() {
  return (
    <section className="px-6 py-20 bg-white md:px-16 text-charcoal">
      <div className="grid max-w-6xl gap-12 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {services.map((servicio, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: false }}
            className="p-6 transition shadow-lg bg-champagne rounded-2xl hover:shadow-xl"
          >
            <div className="mb-4">{servicio.icono}</div>
            <h3 className="mb-2 text-xl font-bold">{servicio.titulo}</h3>
            <p className="text-sm text-slateSoft">{servicio.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}