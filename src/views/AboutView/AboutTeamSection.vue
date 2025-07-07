<script>
import FerImage from '@/assets/img/fer.png'

export default {
  name: 'AboutTeamSection',
  data() {
    return {
      teamMembers: [
        {
          name: 'Xavi',
          role: 'Desarrollador',
          description: 'Construyo sitios rápidos, seguros y listos para escalar. Cada línea de código está pensada para mejorar la experiencia del usuario.',
          image: '/src/assets/img/personajes/horse-cool.png'
        },
        {
          name: 'Fer',
          role: 'Project Manager',
          description: 'Me encargo de que todo fluya. Escucho, planifico y conecto necesidades con soluciones digitales efectivas.',
          image: FerImage
        }
      ]
    }
  }
}
</script>

<template>
  <section class="bg-white py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          El equipo
        </h2>
        <div class="w-20 h-1 bg-coolYellow rounded-full mx-auto"></div>
      </div>

      <!-- Team Members Grid -->
      <div class="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
        <div 
          v-for="member in teamMembers" 
          :key="member.name"
          class="group"
        >
          <!-- Card Container -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <!-- Image Container -->
            <div class="bg-gradient-to-br from-coolYellow/10 to-yellow-100 p-8 flex justify-center items-center h-80">
              <div class="relative">
                <img 
                  :src="member.image" 
                  :alt="member.name"
                  class="w-48 h-48 object-cover rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <!-- Decorative ring -->
                <div class="absolute inset-0 rounded-full border-4 border-coolYellow/20 group-hover:border-coolYellow/40 transition-colors duration-300"></div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="p-8">
              <div class="text-center mb-6">
                <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {{ member.name }}
                </h3>
                <p class="text-lg font-semibold text-redAction bg-redAction/10 px-4 py-2 rounded-full inline-block">
                  {{ member.role }}
                </p>
              </div>
              
              <p class="text-gray-600 text-lg leading-relaxed text-center font-light">
                {{ member.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional custom styles if needed */
</style> 