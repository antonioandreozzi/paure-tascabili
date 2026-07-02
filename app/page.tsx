import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import HeroScene from "@/components/homepage/HeroScene";
import ManifestoScene from "@/components/homepage/ManifestoScene";
import AboutScene from "@/components/homepage/AboutScene";
import MysteryCardsScene from "@/components/homepage/MysteryCardsScene";
import SurvivorsGallery from "@/components/homepage/SurvivorsGallery";
import BlogPreviewScene from "@/components/homepage/BlogPreviewScene";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <HeroScene />
        <ManifestoScene />
        <AboutScene />
        <MysteryCardsScene />
        <SurvivorsGallery />
        <BlogPreviewScene />
      </main>
      <Footer />
    </>
  );
}
