import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { Plato } from "./data/platos";


interface Props {
  titulo: string;
  platos: Plato[];
}

export default function PlatoCategoria({ titulo, platos }: Props) {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section ref={ref} className="px-6 py-16 bg-white md:px-16 text-charcoal">
      <motion.h2
        key={inView ? titulo + "-in" : titulo + "-out"}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-10 text-3xl font-bold text-center font-fancy text-mustard"
      >
        {titulo}
      </motion.h2>

      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {platos.map((plato, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="overflow-hidden transition shadow-md bg-champagne rounded-2xl hover:shadow-lg"
          >
            <img
              src={plato.imagen}
              alt={plato.nombre}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2 text-mustard">
                {plato.icono}
                <h3 className="text-xl font-semibold">{plato.nombre}</h3>
              </div>
              <p className="text-sm text-slateSoft">{plato.descripcion}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
