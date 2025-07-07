<script>
import { Users, Heart, Lightbulb } from 'lucide-vue-next'

export default {
  name: 'AboutWhyUsSection',
  components: {
    Users,
    Heart,
    Lightbulb
  },
  data() {
    return {
      reasons: [
        {
          title: 'Trato directo',
          text: 'Sin intermediarios ni jerarquías. Hablas con quienes ejecutan el proyecto.',
          icon: 'Users',
          color: 'bg-coolYellow'
        },
        {
          title: 'Compromiso real',
          text: 'Nos implicamos como si el proyecto fuera nuestro. Solo tomamos lo que podemos entregar con calidad.',
          icon: 'Heart',
          color: 'bg-redAction'
        },
        {
          title: 'Soluciones pensadas',
          text: 'No solo hacemos lo que se pide, proponemos lo que funciona mejor para tus objetivos.',
          icon: 'Lightbulb',
          color: 'bg-coolYellow'
        }
      ]
    }
  },
  computed: {
    getIconComponent() {
      return {
        Users: Users,
        Heart: Heart,
        Lightbulb: Lightbulb
      }
    }
  }
}
</script>

<template>
  <section class="bg-gray-50 py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          ¿Por qué trabajar con nosotres?
        </h2>
        <div class="w-20 h-1 bg-redAction rounded-full mx-auto"></div>
      </div>

      <!-- Reasons Grid -->
      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div 
          v-for="(reason, index) in reasons" 
          :key="index"
          class="group"
        >
          <!-- Card -->
          <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-8 h-full flex flex-col">
            <!-- Icon -->
            <div class="mb-8 flex justify-center">
              <div :class="[
                'w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110',
                reason.color
              ]">
                <component 
                  :is="getIconComponent[reason.icon]"
                  class="w-10 h-10 text-white"
                />
              </div>
            </div>
            
            <!-- Content -->
            <div class="text-center flex-grow">
              <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {{ reason.title }}
              </h3>
              <p class="text-gray-600 text-lg leading-relaxed font-light">
                {{ reason.text }}
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