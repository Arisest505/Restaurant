import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Utensils, Info, Timer } from "lucide-react";

const platosImages = [
  "/Ronksbfjkbajk635sd65g23a.jpg",
  "/receta-de-arroz-chaufa-selvatico-800x445.jpg.webp",
  "/5d4151g2h1g21j145jg4alñksmdk.jpg",
  "/MTOQIN6QSJC2PHDRN3B6NZWRLA.avif",
];

const platosInfo = [
 {
    nombre: "Costillas de Cerdo Horneadas",
    descripcion: "Costillas marinadas en nuestra sazón especial, horneadas lentamente hasta conseguir una carne jugosa y un sabor ahumado irresistible, acompañadas de papas doradas.",
    tiempo: "1 hr 30 min",
    tipo: "Especialidad al Horno",
  },
  {
    nombre: "Arroz Chaufa Selvático",
    descripcion: "Un clásico de la cocina amazónica: arroz salteado con cecina, chorizo regional, tortilla de huevo y el toque dulce y único del plátano maduro frito.",
    tiempo: "25 min",
    tipo: "Fusión Amazónica",
  },
  {
    nombre: "Pollo Entero al Horno",
    descripcion: "Pollo entero, marinado con una mezcla de hierbas y especias, horneado hasta obtener una piel dorada y crujiente, y una carne tierna y jugosa.",
    tiempo: "1 hr",
    tipo: "Clásico Familiar",
  },
  {
    nombre: "Tacacho con Cecina",
    descripcion: "El icónico plato de la selva. Bolas de plátano verde asado y machacado con un toque de manteca, servidas con cecina ahumada, con todo el sabor de la tradición.",
    tiempo: "30 min",
    tipo: "Tradición Amazónica",
  },
];

export default function HomePlatos() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % platosImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={platosImages[index]}
          src={platosImages[index]}
          alt="Plato destacado"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex items-center justify-end h-full px-6 md:px-16"
      >
        <div className="w-full max-w-md p-8 text-white shadow-xl bg-white/20 backdrop-blur-md rounded-3xl">
          <h3 className="text-3xl font-bold font-fancy text-mustard drop-shadow-lg">
            {platosInfo[index].nombre}
          </h3>

          <div className="flex items-center gap-2 mt-4 text-champagne">
            <Utensils className="w-5 h-5" />
            <span className="text-sm italic">{platosInfo[index].tipo}</span>
          </div>

          <div className="flex items-center gap-2 mt-1 text-champagne">
            <Timer className="w-5 h-5" />
            <span className="text-sm">{platosInfo[index].tiempo}</span>
          </div>

          <p className="flex items-start gap-2 mt-4 text-base leading-relaxed text-white/90">
            <Info className="w-5 h-5 text-white/70" />
            {platosInfo[index].descripcion}
          </p>

          <div className="flex justify-end mt-4">
            <button className="px-5 py-2 text-sm font-semibold text-black transition-all rounded-full bg-white/90 hover:bg-white">
              Ver más
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}