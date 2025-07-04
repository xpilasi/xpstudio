<script>
import HeroSection from '@/views/HeroSection.vue'
import WhatWeDoSection from '@/views/WhatWeDoSection.vue'
import AdvantagesSection from '@/views/AdvantagesSection.vue'
import SectionNavigator from '@/components/SectionNavigator.vue'
import FAQSSmallSection from '@/views/FAQSSmallSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    WhatWeDoSection,
    AdvantagesSection,
    SectionNavigator,
    FAQSSmallSection
  },
  data() {
    return {
      sections: [
        { id: 'hero-section', name: 'Inicio' },
        { id: 'what-we-do-header-section', name: '¿Qué hacemos?' },
        { id: 'what-we-do-joker-cards-section', name: 'Nuestros Servicios' },
        { id: 'advantages-benefits-section', name: 'Ventajas' },
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

    <!-- What We Do Section -->
    <WhatWeDoSection />

    <!-- Advantages Section -->
    <AdvantagesSection />

    <!-- FAQs Section -->
    <div id="faqs-section">
      <FAQSSmallSection />
    </div>

    <!-- Section Navigator -->
    <SectionNavigator :sections="sections" />
    
  </div>
</template>

 