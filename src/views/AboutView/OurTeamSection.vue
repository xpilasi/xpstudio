<script>
import MemberCard from './MemberCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import ChatBubbleLeftRightIcon from 'heroicons/24/outline/chat-bubble-left-right.svg?component'
import CogIcon from 'heroicons/24/outline/cog.svg?component'
import HeartIcon from 'heroicons/24/outline/heart.svg?component'
import FotoXavi from '@/assets/img/perfil_final_2024_pink.png'
import FotoFer from '@/assets/img/fer.png'

export default {
  name: 'OurTeamSection',
  components: {
    MemberCard,
    SectionTitle
  },
  data() {
    return {
      values: [
        {
          id: 1,
          memberName: 'XAVI',
          memberRole1: 'Ingeniero Comercial U. Diego Portales',
          memberRole2: 'Desarrollador de Software U. Ramón Llul BCN',
          description: 'Apasionado del código y las buenas ideas: con 12 años liderando proyectos y dominio de tecnologías como Vue, Flutter y Firebase, combino negocio y desarrollo para crear soluciones digitales ágiles, funcionales y con estilo.',
          imageUrl: FotoXavi
        },
        {
          id: 2,
          memberName: 'FER',
          memberRole1: 'HR Senior Consultant',
          memberRole2: 'Senior Project Manager',
          description: 'Apasionado del código y las buenas ideas: con 12 años liderando proyectos y dominio de tecnologías como Vue, Flutter y Firebase, combino negocio y desarrollo para crear soluciones digitales ágiles, funcionales y con estilo.',
          imageUrl: FotoFer
        },
      
      ]
    }
  }
}
</script>

<template>
  <section id="aboutTeam" class="min-h-screen bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-50 2xl:px-90">
    <div class="flex flex-col justify-center gap-10 mx-auto">
      
      <!-- Section Title -->
      <SectionTitle 
        title="Equipo" 
        color="text-[#FFC600]"
      />

      <!-- Values Cards -->
      <div class="flex flex-col justify-center gap-20 mx-auto">
        <MemberCard 
            :memberName="values[1].memberName"
            :memberRole1="values[1].memberRole1"
            :memberRole2="values[1].memberRole2"
            :description="values[1].description"
            :imageUrl="values[1].imageUrl"
            align="right"
          /> 
          <MemberCard 
            :memberName="values[0].memberName"
            :memberRole1="values[0].memberRole1"
            :memberRole2="values[0].memberRole2"
            :description="values[0].description"
            :imageUrl="values[0].imageUrl"
          /> 
          
      </div>
      
    </div>
  </section>
</template>