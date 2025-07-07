<script>
export default {
  name: 'AboutIntroSection'
}
</script>

<template>
  <section class="bg-gradient-to-r from-coolYellow to-yellow-400 py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-coolYellow/20 to-transparent"></div>
    
    <div class="relative max-w-7xl mx-auto text-center">
      <!-- Main title -->
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
        ¿Quiénes somos?
      </h1>
      
      <!-- Intro section -->
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-relaxed">
          Personas reales, soluciones reales
        </h2>
        
        <p class="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
          Somos un equipo pequeño pero versátil. Nos enfocamos en ofrecer soluciones digitales que aporten valor real a cada cliente.
        </p>
      </div>
      
      <!-- Decorative accent -->
      <div class="mt-12 flex justify-center">
        <div class="w-24 h-1 bg-white/30 rounded-full"></div>
      </div>
    </div>
    
    <!-- Decorative elements -->
    <div class="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
    <div class="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
  </section>
</template>

<style scoped>
/* Additional custom styles if needed */
</style> 