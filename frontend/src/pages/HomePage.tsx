import Footer from "../widgets/Footer";
import HomeHero from "../widgets/Home/HomeHero";
import HomeAbout from "../widgets/Home/HomeAbout";
import HomePlatos from "../widgets/Home/HomePlatos";
import HomeServicios from "../widgets/Home/HomeServicios";
import HomeUbications from "../widgets/Home/HomeUbications";
import Navbar from "../widgets/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <HomeAbout />
        <HomePlatos />
        <HomeServicios />
        <HomeUbications />
      </main>
      <Footer />
    </>
  );
}

