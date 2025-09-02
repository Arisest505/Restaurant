import AboutHero from "../widgets/About/AboutHero";
import AboutMisionVision from "../widgets/About/AboutMisionVision";
import AboutHistoria from "../widgets/About/AboutHistoria";
import Navbar from "../widgets/Navbar";
import Footer from "../widgets/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
    <main>
      <AboutHero />
      <AboutMisionVision />
      <AboutHistoria />
    </main>
        <Footer />
    </>

  );
}
