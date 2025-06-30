<script>
import ValuesCard from './ValuesCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import ChatBubbleLeftRightIcon from 'heroicons/24/outline/chat-bubble-left-right.svg?component'
import CogIcon from 'heroicons/24/outline/cog.svg?component'
import HeartIcon from 'heroicons/24/outline/heart.svg?component'

export default {
  name: 'OurValuesSection',
  components: {
    ValuesCard,
    SectionTitle
  },
  data() {
    return {
      values: [
        {
          id: 1,
          title: 'Claridad ante todo',
          description: 'Nos comunicamos sin rodeos. Plazos, presupuestos y alcances bien definidos desde el inicio. Sin ambigüedades ni sorpresas.',
          icon: ChatBubbleLeftRightIcon
        },
        {
          id: 2,
          title: 'Enfoque práctico',
          description: 'Creamos, medimos y mejoramos. No apostamos todo a una gran idea inicial, sino a procesos inteligentes que evolucionan con el tiempo.',
          icon: CogIcon
        },
        {
          id: 3,
          title: 'Compromiso total con cada proyecto',
          description: 'Elegimos bien a quién ayudamos, y cuando lo hacemos, nos involucramos de verdad. Lo tomamos como si fuera nuestro.',
          icon: HeartIcon
        }
      ]
    }
  }
}
</script>

<template>
  <section id="aboutValues" class="min-h-screen bg-white py-12 md:py-16">
    <div class="flex flex-col justify-center gap-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      
      <!-- Section Title -->
      <SectionTitle 
        title="Valores" 
        color="text-[#FFC600]"
      />

      <!-- Values Cards -->
      <div class="space-y-6 lg:space-y-14">
        <ValuesCard
          v-for="value in values"
          :key="value.id"
          :title="value.title"
          :description="value.description"
          :icon="value.icon"
        />
      </div>
      
    </div>
  </section>
</template>