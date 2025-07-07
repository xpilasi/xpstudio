<script>
import AboutIntroSection from './AboutIntroSection.vue'
import AboutTeamSection from './AboutTeamSection.vue'
import AboutWhyUsSection from './AboutWhyUsSection.vue'
import AboutCTASection from './AboutCTASection.vue'
import SectionNavigator from '@/components/SectionNavigator.vue'

export default {
  name: 'AboutView',
  components: {
    AboutIntroSection,
    AboutTeamSection,
    AboutWhyUsSection,
    AboutCTASection,
    SectionNavigator
  },
  data() {
    return {
      aboutSections: [
        {
          id: 'about-intro',
          name: 'Inicio'
        },
        {
          id: 'about-team',
          name: 'Equipo'
        },
        {
          id: 'about-why-us',
          name: '¿Por qué nosotros?'
        },
        {
          id: 'about-cta',
          name: 'Contacto'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="min-h-screen">
    <!-- About Intro Section -->
    <div id="about-intro">
      <AboutIntroSection />
    </div>
    
    <!-- About Team Section -->
    <div id="about-team">
      <AboutTeamSection />
    </div>

    <!-- About Why Us Section -->
    <div id="about-why-us">
      <AboutWhyUsSection />
    </div>

    <!-- About CTA Section -->
    <div id="about-cta">
      <AboutCTASection />
    </div>

    <!-- Section Navigator -->
    <SectionNavigator :sections="aboutSections" />
  </div>
</template>

<style scoped>
/* AboutView specific styles */
</style> 