import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutMisionVision() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section ref={ref} className="px-6 py-20 bg-champagne md:px-16 text-charcoal">
      <div className="grid max-w-5xl gap-10 mx-auto md:grid-cols-2">
        <motion.div
          key={inView ? "mision-in" : "mision-out"}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-3xl font-bold font-fancy text-mustard">Nuestra Misión</h2>
          <p className="text-lg text-slateSoft">
            Ofrecer experiencias culinarias excepcionales, especializándonos en "horneados de carnes" y banquetes completos, para hacer de cada celebración un momento memorable e inigualable.
          </p>
        </motion.div>

        <motion.div
          key={inView ? "vision-in" : "vision-out"}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="mb-4 text-3xl font-bold font-fancy text-mustard">Nuestra Visión</h2>
          <p className="text-lg text-slateSoft">
            Ser la empresa líder en catering para eventos en la región, reconocida por nuestra excelencia en la cocina de horneados y nuestro compromiso inquebrantable con la satisfacción de cada cliente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}