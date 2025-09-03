import { motion } from "framer-motion";
import historiaImg from "/akjsbhudbaosfasd54s5g4da25142.jpg"; // Imagen de los inicios o cocina

export default function AboutHistoria() {
  return (
    <section className="px-6 py-20 bg-white md:px-16 text-charcoal">
      <div className="grid items-center max-w-6xl grid-cols-1 gap-10 mx-auto md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={historiaImg}
            alt="Historia AD"
            className="object-cover w-full h-auto shadow-xl rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="mb-4 text-3xl font-bold font-fancy text-mustard">
            Nuestra Historia
          </h2>
          <p className="font-sans text-lg leading-relaxed text-slateSoft">
              AD nació del profundo amor por la cocina familiar y la tradición de los **horneados caseros**. Lo que empezó como una pasión por compartir el sabor que nos une en cada reunión, se convirtió en nuestra misión de llevar esa misma esencia a tus celebraciones más importantes.
          </p>
          <p className="mt-4 font-sans text-base text-slateSoft">
              Con el tiempo, perfeccionamos nuestras recetas y nos especializamos en la **preparación de banquetes para grandes eventos**, donde nuestros horneados de carnes se convirtieron en los protagonistas. Desde las celebraciones familiares hasta los matrimonios y bautizos, cada evento es una nueva página en nuestra historia.
          </p>
          <p className="mt-4 font-sans text-base text-slateSoft">
              Hoy, AD es el resultado de esa pasión que se hizo real. Nos enorgullece ser los **maestros del horneado** que dan vida a tus fiestas, con el sabor de siempre y un servicio de calidad.
          </p>
          <p className="mt-4 font-sans text-base text-slateSoft">
              Gracias por su preferencia y que Dios los bendiga.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
