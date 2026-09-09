import React, { useState, useEffect } from 'react';
import { SeoHead } from './components/SeoHead';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { MaterialsSection } from './components/MaterialsSection';
import { DistributorsSection } from './components/DistributorsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';
import { LiveChatWidget } from './components/LiveChatWidget';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { FadeInSection } from './components/FadeInSection';
import { Product } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Track active scroll section for navbar highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'nosotros', 'productos', 'materiales', 'distribuidores', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuoteModal = (product?: Product | null) => {
    setQuoteProduct(product || null);
    setIsQuoteModalOpen(true);
  };

  const handleExploreProducts = () => {
    const element = document.getElementById('productos');
    if (element) {
      const navbarHeight = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-amber-500 selection:text-zinc-950">
      <SeoHead />
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenQuoteModal={() => handleOpenQuoteModal(null)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Landing Content */}
      <main>
        {/* 1. Hero Section (Inicio) */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal(null)}
          onExploreProducts={handleExploreProducts}
        />

        {/* 2. Nosotros Section */}
        <FadeInSection>
          <AboutSection />
        </FadeInSection>

        {/* 3. Productos Section (Interactive Catalog) */}
        <FadeInSection>
          <ProductsSection
            onOpenQuoteForProduct={(prod) => handleOpenQuoteModal(prod)}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          />
        </FadeInSection>

        {/* 4. Materiales & Certificaciones Section */}
        <FadeInSection>
          <MaterialsSection />
        </FadeInSection>

        {/* 5. Dónde Comprar & Distribuidores */}
        <FadeInSection>
          <DistributorsSection onOpenQuoteModal={() => handleOpenQuoteModal(null)} />
        </FadeInSection>

        {/* 6. Testimonios */}
        <FadeInSection>
          <TestimonialsSection />
        </FadeInSection>

        {/* 7. Preguntas Frecuentes */}
        <FadeInSection>
          <FaqSection />
        </FadeInSection>

        {/* 8. Contacto */}
        <FadeInSection>
          <ContactSection />
        </FadeInSection>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <LiveChatWidget
        onOpenQuoteModal={() => handleOpenQuoteModal(null)}
        onExploreProducts={handleExploreProducts}
      />
      <FloatingWhatsApp />
      <BackToTop />

      {/* Modals */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedProduct={quoteProduct}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}
