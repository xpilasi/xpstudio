<script>
import HeroSection from '@/views/HeroSection.vue'
import WhatWeDoSection from '@/views/WhatWeDoSection.vue'
import SectionNavigator from '@/components/SectionNavigator.vue'
import FAQSSmallSection from '@/views/FAQSSmallSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    WhatWeDoSection,
    SectionNavigator,
    FAQSSmallSection
  },
  data() {
    return {
      sections: [
        { id: 'hero-section', name: 'Inicio' },
        { id: 'what-we-do-header-section', name: '¿Qué hacemos?' },
        { id: 'feature-soluciones-personalizadas-section', name: 'Soluciones Personalizadas' },
        { id: 'feature-diseno-responsivo-section', name: 'Diseño Responsivo' },
        { id: 'feature-foco-usuario-section', name: 'Foco en el Usuario' },
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

    <!-- FAQs Section -->
    <div id="faqs-section">
      <FAQSSmallSection />
    </div>

    <!-- Section Navigator -->
    <SectionNavigator :sections="sections" />
    
  </div>
</template>

 