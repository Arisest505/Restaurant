import PlatoCategoria from "../widgets/Platos/PlatoCategoria";
import Navbar from "../widgets/Navbar";
import Footer from "../widgets/Footer";
import ServicesHero from "../widgets/Services/ServicesHero";
import ServicesList from "../widgets/Services/ServicesList";
import { serviciosData } from "../widgets/Platos/data/platos";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesList />
        <PlatoCategoria titulo="Nuestra Especialidad: Horneados" platos={serviciosData["Nuestra Especialidad: Horneados"]} />
        <PlatoCategoria titulo="Servicios de  Banquetes" platos={serviciosData["Servicios de  Banquetes"]} />
        <PlatoCategoria titulo="Pedidos a la Carta" platos={serviciosData["Pedidos a la Carta"]} />
      </main>
      <Footer />
    </>
  );
}