import {
  Soup,
  Drumstick,
  Flame,
  Sparkles,
  PartyPopper,
} from "lucide-react";

export interface Servicio {
  nombre: string;
  descripcion: string;
  imagen: string;
  icono: JSX.Element;
}

export const serviciosData: Record<string, Servicio[]> = {

  "Nuestra Especialidad: Horneados": [
    {
      nombre: "Chancho al Horno",
      descripcion: "Carne jugosa, marinada con especias de la casa, cocida lentamente para una textura perfecta.",
      imagen: "/Ronksbfjkbajk635sd65g23a.jpg",
      icono: <Flame />,
    },
    {
      nombre: "Pavo Entero",
      descripcion: "Ideal para grandes celebraciones. Jugoso por dentro y dorado por fuera, lleno de sabor tradicional.",
      imagen: "/Patod6s45g46512h0h0h0hh05r532d.jpg",
      icono: <Drumstick />,
    },
    {
      nombre: "Pollo Entero",
      descripcion: "Con nuestra receta especial de la selva, perfecto para cualquier tipo de celebración familiar.",
      imagen: "/5d4151g2h1g21j145jg4alñksmdk.jpg",
      icono: <Drumstick />,
    },
  ],
    "Servicios de Catering y Banquetes": [
    {
      nombre: "Banquete Completo",
      descripcion: "Menús diseñados para bodas, bautizos y reuniones, con servicio personalizado y atención de lujo.",
      imagen: "/Banqshgjk71g18f10532d605.jpg",
      icono: <Sparkles />,
    },
    
  ],
  "Pedidos a la Carta": [
    {
      nombre: "Menú Especial del Día",
      descripcion: "Disfruta de nuestros platos caseros con el sazón de siempre, disponibles para pedidos individuales.",
      imagen: "/MTOQIN6QSJC2PHDRN3B6NZWRLA.avif",
      icono: <Soup />,
    },
    {
      nombre: "Combos de Sabor",
      descripcion: "Una fusión de nuestros platos más populares, en un solo pedido. Sabor garantizado y al mejor precio.",
      imagen: "/receta-de-arroz-chaufa-selvatico-800x445.jpg.webp",
      icono: <PartyPopper />,
    },
  ],
};