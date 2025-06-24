<script>
import HeroSection from '@/components/HeroSection.vue'
import WhatWeDoSection from '@/components/WhatWeDoSection.vue'
import SectionNavigator from '@/components/SectionNavigator.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    WhatWeDoSection,
    SectionNavigator
  },
  data() {
    return {
      sections: [
        { id: 'hero-section', name: 'Inicio' },
        { id: 'what-we-do-header-section', name: '¿Qué hacemos?' },
        { id: 'feature-soluciones-personalizadas-section', name: 'Soluciones Personalizadas' },
        { id: 'feature-diseno-responsivo-section', name: 'Diseño Responsivo' },
        { id: 'feature-foco-usuario-section', name: 'Foco en el Usuario' }
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

    <!-- Section Navigator -->
    <SectionNavigator :sections="sections" />
    
  </div>
</template>

 