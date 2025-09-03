import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  MoveRight,
  Video,
} from "lucide-react";
import logo from "/LogoAmarillo_SOLOLOGO_ADFont.png";

export default function Footer() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <footer
      ref={ref}
      className="px-6 py-12 text-white bg-black border-t md:px-16 border-white/10"
    >
      <motion.div
        key={inView ? "footer-in" : "footer-out"}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="grid max-w-6xl grid-cols-1 gap-10 mx-auto md:grid-cols-3"
      >
        {/* Logo + Nombre */}
        <div className="flex flex-col items-center md:items-start">
          <motion.img
            key={inView ? "logo-in" : "logo-out"}
            src={logo}
            alt="Logo AD"
            className="w-24 h-auto mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          />
          <h2 className="text-xl font-bold tracking-wide">Restaurante AD</h2>
          <p className="mt-2 text-sm text-center text-white/70 md:text-left">
            Tradición y sabor para tus celebraciones más importantes.
          </p>
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-mustard" />
            <span>+51 902 127 925</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-mustard" />
            <span>adeventos@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MoveRight className="w-5 h-5 text-mustard" />
            <span>Lima-Vegueta, Perú</span>
          </div>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col items-center gap-3 md:items-end">
          <h3 className="text-lg font-semibold">Síguenos</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 transition hover:text-mustard" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 transition hover:text-mustard" />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
              <Video className="w-6 h-6 transition hover:text-mustard" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Línea inferior */}
      <motion.div
        key={inView ? "by-in" : "by-out"}
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 text-xs text-center text-white/50"
      >
        © {new Date().getFullYear()} Restaurante AD. Página desarrollada por{" "}
        <span className="font-semibold text-mustard">ARISEI</span>
      </motion.div>
    </footer>
  );
}
