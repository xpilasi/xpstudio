<script>
import SectionHeader from '@/components/SectionHeader.vue'
export default {
  name: 'PresentationSection',
  data() {
    return {
      title: 'Presentación',
    }
  },
  components: {
    SectionHeader
  }
}
</script>

<template>  
<div id="presentation-section" class="bg-gradient-to-b from-gray-100 to-purple-100 px-4 sm:px-6 lg:px-50 2xl:px-90 min-h-screen flex flex-col justify-center items-center" value="">
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
        margin-bottom=" "
      />
</div>
 
</template>