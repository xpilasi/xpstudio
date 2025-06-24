<script>
import FeatureSection from '@/components/FeatureSection.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import ImgFeature1 from '@/assets/img/img-test-xps.png'

export default {
  name: 'WhatWeDoSection',
  components: {
    FeatureSection,
    SectionHeader
  },
  data() {
    return {
      ImgFeature1
    }
  }
}
</script>

<template>
  <!-- What We Do Section -->
  <section class="bg-white py-0 px-4 sm:px-6 lg:px-90">
    <div class="container mx-auto">
      
      <!-- Header Section -->
      <SectionHeader
        section-id="what-we-do-header-section"
        title="¿Qué hacemos?"
        subtitle="Creamos soluciones atractivas, funcionales e intuitivas"
        description="Los detalles marcan la diferencia. Contar con sitios de calidad o aplicaciones que faciliten el acceso a tus servicios potencia la fidelización e impulsa el crecimiento de tu negocio."
        title-color="text-gray-600"
        subtitle-color="text-coolPurple"
        description-color="text-gray-600"
        alignment="center"
        :is-full-screen="true"
        margin-bottom="mb-16 lg:mb-20"
      />

      <!-- Feature 1: Soluciones Personalizadas -->
      <div id="feature-soluciones-personalizadas-section" class="h-screen flex items-center">
        <FeatureSection
          :image-src="ImgFeature1"
          image-alt="Soluciones personalizadas XpStudio"
          label-text="¿Por qué XPS?"
          title-text="Soluciones Personalizadas"
          description-text="Trabajo contigo para crear productos que se ajusten a las necesidades únicas de tu negocio y reflejen la esencia de tu marca y tus objetivos."
          image-position="right"
          margin-bottom=""
        />
      </div>

      <!-- Feature 2: Diseño Responsivo -->
      <div id="feature-diseno-responsivo-section" class="h-screen flex items-center">
        <FeatureSection
          :image-src="ImgFeature1"
          image-alt="Diseño responsivo XpStudio"
          label-text="Multi-plataforma"
          title-text="Diseño Responsivo"
          description-text="Experiencia diseñada para ordenadores, móviles y tablets, todo enfocado en que tus clientes tengan una gran experiencia sin importar el dispositivo."
          image-position="left"
          margin-bottom=""
        />
      </div>

      <!-- Feature 3: Foco en el usuario -->
      <div id="feature-foco-usuario-section" class="h-screen flex items-center">
        <FeatureSection
          :image-src="ImgFeature1"
          image-alt="Foco en el usuario UX XpStudio"
          label-text="UX"
          title-text="Foco en el usuario"
          description-text="Interfaces claras y fáciles de usar, para que tus usuarios se sientan cómodos y tomen acción."
          image-position="right"
          margin-bottom=""
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Smooth transitions for hover effects */
.grid > div {
  transition: transform 0.3s ease;
}

.grid:hover > div {
  transform: translateY(-2px);
}

/* Ensure proper font rendering for large text */
h1, h2, h3 {
  font-feature-settings: "kern" 1;
}

/* Responsive image sizing */
img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.02);
}
</style> 