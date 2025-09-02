import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import backgroundImg from "/akjsbhudbaosfasd54s5g4da25142.jpg";
import logo from "/LogoAmarillo_SOLOLOGO_ADFont.png";
import { useNavigate } from "react-router-dom";

export default function HomeHero() {
  const { ref, inView } = useInView({ triggerOnce: false });
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center text-center py-60"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa de oscurecimiento con blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      <motion.div
        key={inView ? "visible" : "hidden"} // ← esto reinicia la animación
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl px-6"
      >
        {/* LOGO del restaurante */}
        <div className="flex justify-center mb-6">
          <motion.img
            key={inView ? "logo-visible" : "logo-hidden"}
            src={logo}
            alt="Logo AD"
            className="w-24 h-auto md:w-32 drop-shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
          />
        </div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-bold leading-tight tracking-tight md:text-6xl font-fancy text-champagne drop-shadow-xl"
        >
          Bienvenidos a <span className="text-mustard">AD</span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5 text-lg md:text-xl text-[#f2e9d6] font-sans tracking-wide leading-relaxed"
        >
          El sabor que tus eventos merecen. Nuestra pasión por el horneado hace de tu banquete una experiencia única.
        </motion.p>

        {/* Botón */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="px-6 py-3 mt-8 font-semibold text-black transition-all duration-300 rounded-full shadow-lg bg-mustard hover:shadow-gold"
          onClick={() => navigate("/platos")}
        >
          Ver Servicios
        </motion.button>
      </motion.div>
    </section>
  );
}
