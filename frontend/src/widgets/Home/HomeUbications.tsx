 import { MapPin, Phone, Mail } from "lucide-react";

export default function HomeUbications() {
  return (
    <section className="px-6 py-20 bg-champagne md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center font-fancy text-mustard">
          ¿Dónde nos encontramos?
        </h2>

        {/* Información de contacto */}
        <div className="p-6 mb-10 shadow-md bg-white/80 backdrop-blur-xl rounded-3xl">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center text-charcoal">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-mustard" />
              <span>Medio Mundo , Vegueta , Lima , Perú</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-mustard" />
              <span>+51 902 127 925</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-mustard" />
              <span>adeventos@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg">
          <iframe
            title="Ubicación Sabor Real"
           src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d316.5292126287911!2d-77.64612002776315!3d-10.968696238238444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2spe!4v1754588063578!5m2!1ses!2spe"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

