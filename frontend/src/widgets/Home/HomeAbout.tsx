import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImg from "/5d4151g2h1g21j145jg4alñksmdk.jpg";

export default function HomeAbout() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section
      ref={ref}
      className="px-6 py-20 bg-champagne md:px-16 text-charcoal"
    >
      <div className="grid items-center max-w-6xl grid-cols-1 gap-12 mx-auto md:grid-cols-2">
        {/* Imagen con animación persistente */}
        <motion.div
          key={inView ? "img-in" : "img-out"}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img
            src={aboutImg}
            alt="Cocina tradicional"
            className="object-cover w-full h-auto shadow-xl rounded-3xl"
          />
        </motion.div>

        {/* Texto con animación persistente */}
        <motion.div
          key={inView ? "text-in" : "text-out"}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="mb-4 text-4xl font-bold font-fancy text-mustard">
          La Tradición en tus Celebraciones
          </h2>
          <p className="font-sans text-lg leading-relaxed text-slateSoft">
              En <span className="font-bold text-charcoal">AD</span>, nos especializamos en llevar el arte de la alta cocina a tus eventos más importantes. Fusionamos la pasión por el sabor con la maestría en el banquete, creando una experiencia culinaria inolvidable.
          </p>
          <p className="mt-4 font-sans text-base text-slateSoft">
              Somos expertos en <strong>horneados de carnes selectas</strong> como pollo, chancho y pavo, preparados a la perfección para deleitar a todos tus invitados. Ofrecemos menús completos y personalizados, que capturan el auténtico sabor de nuestras raíces peruanas.
          </p>
          <p className="mt-4 font-sans text-base text-slateSoft">
              Deleita a tus invitados en **matrimonios, cumpleaños y celebraciones familiares**. En <span className="font-bold text-charcoal">AD</span>, garantizamos un servicio de lujo y un sabor excepcional para que disfrutes de tu evento sin preocupaciones.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
