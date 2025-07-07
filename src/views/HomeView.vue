<script>
import HeroSection from '@/views/HeroSection.vue'
import WhatWeDoSection from '@/views/WhatWeDoSection.vue'
import BenefitsSection from '@/views/BenefitsSection.vue'
import SectionNavigator from '@/components/SectionNavigator.vue'
import FAQSSmallSection from '@/views/FAQSSmallSection.vue'
import PresentationSection from '@/views/Presentation.vue'
export default {
  name: 'HomeView',
  components: {
    HeroSection,
    WhatWeDoSection,
    BenefitsSection,
    SectionNavigator,
    FAQSSmallSection,
    PresentationSection
  },
  data() {
    return {
      sections: [
        { id: 'hero-section', name: 'Inicio' },
        { id: 'presentation-section', name: 'Presentación' },
        { id: 'what-we-do-joker-cards-section', name: 'Nuestros Servicios' },
        { id: 'advantages-benefits-section', name: '¿Por qué Bestiari?' },
        { id: 'faqs-section', name: 'FAQs' }
      ]
    }
  }
}
</script>

<template>
  <div class="min-h-screen">
    
    <!-- Hero Section -->
    <HeroSection />

    <PresentationSection />

    <!-- What We Do Section -->
    <WhatWeDoSection />

    <BenefitsSection />

    <!-- FAQs Section -->
    <div id="faqs-section">
      <FAQSSmallSection />
    </div>

    <!-- Section Navigator -->
    <SectionNavigator :sections="sections" />
    
  </div>
</template>

 