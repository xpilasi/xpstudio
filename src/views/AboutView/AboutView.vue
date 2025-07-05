<script>
import HeroDude from '@/assets/img/personajes/foxy-coool-2.png'
import HeroContent from '@/components/HeroContent.vue'
import OurTeamSection from './OurTeamSection.vue'
import HeroAboutSection from './HeroAboutSection.vue'
import SectionNavigator from '@/components/SectionNavigator.vue'
import OurValuesSection from './OurValuesSection.vue'

export default {
  name: 'AboutView',
  components: {
    HeroContent,
    OurTeamSection,
    HeroAboutSection,
    SectionNavigator,
    OurValuesSection
  },
  data() {
    return {
      HeroDude,
      aboutSections: [
        {
          id: 'aboutHero',
          name: 'Inicio'
        },
          {
            id: 'aboutTeam',
            name: 'Equipo'
          },
          {
            id: 'aboutValues',
            name: 'Valores'
          }
      ]
    }
  }
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <HeroAboutSection />
    
    <!-- Our Team Section -->
    <OurTeamSection />

    <!-- Our Values Section -->
    <OurValuesSection />

    <!-- Section Navigator -->
    <SectionNavigator :sections="aboutSections" />
  </div>
</template>

<style scoped>
/* AboutView specific styles */
</style> 