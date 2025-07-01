<script>
import MemberCard from './MemberCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import ChatBubbleLeftRightIcon from 'heroicons/24/outline/chat-bubble-left-right.svg?component'
import CogIcon from 'heroicons/24/outline/cog.svg?component'
import HeartIcon from 'heroicons/24/outline/heart.svg?component'
import FotoXavi from '@/assets/img/perfil_final_2024_pink.png'
import FotoFer from '@/assets/img/fer.png'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: 'OurTeamSection',
  components: {
    MemberCard,
    SectionTitle,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      // Swiper modules
      modules: [Navigation, Pagination, Autoplay],
      values: [
        {
          id: 1,
          memberName: 'XAVI',
          memberRole1: 'Ingeniero Comercial U. Diego Portales',
          memberRole2: 'Desarrollador de Software U. Ramón Llul BCN',
          description: 'Apasionado del código y las buenas ideas: con 12 años liderando proyectos y dominio de tecnologías como Vue, Flutter y Firebase, combino negocio y desarrollo para crear soluciones digitales ágiles, funcionales y con estilo.',
          imageUrl: FotoXavi,
          linkedinUrl: 'https://www.linkedin.com/in/xavierpilasi/'
        },
        {
          id: 2,
          memberName: 'FER',
          memberRole1: 'HR Senior Consultant',
          memberRole2: 'Senior Project Manager',
          description: 'Apasionado del código y las buenas ideas: con 12 años liderando proyectos y dominio de tecnologías como Vue, Flutter y Firebase, combino negocio y desarrollo para crear soluciones digitales ágiles, funcionales y con estilo.',
          imageUrl: FotoFer,
          linkedinUrl: 'https://www.linkedin.com/in/fernanda-bravo-luengo/'
        },
      
      ]
    }
  }
}
</script>

<template>
  <section id="aboutTeam" class="min-h-screen bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-50 2xl:px-90">
    
      
    <!-- Section Title -->
    <SectionTitle 
      title="Equipo" 
      color="text-[#FFC600]"
    />

    <!-- Desktop Layout - Solo visible en pantallas grandes -->
    <div class="hidden lg:flex flex-col justify-center gap-20 mx-auto">
      <MemberCard 
        :memberName="values[1].memberName"
        :memberRole1="values[1].memberRole1"
        :memberRole2="values[1].memberRole2"
        :description="values[1].description"
        :imageUrl="values[1].imageUrl"
        :linkedinUrl="values[1].linkedinUrl"
        align="right"
      /> 
      <MemberCard 
        :memberName="values[0].memberName"
        :memberRole1="values[0].memberRole1"
        :memberRole2="values[0].memberRole2"
        :description="values[0].description"
        :imageUrl="values[0].imageUrl"
        :linkedinUrl="values[0].linkedinUrl"
      /> 
    </div>

    <!-- Mobile/Tablet Swiper - Solo visible en pantallas pequeñas y medianas -->
    <div class="lg:hidden">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :loop="true"
        class="member-swiper"
      >
        <!-- Slide para FER (values[1]) -->
        <SwiperSlide>
          <div class="w-full h-full flex items-center justify-center py-8">
            <MemberCard 
              :memberName="values[1].memberName"
              :memberRole1="values[1].memberRole1"
              :memberRole2="values[1].memberRole2"
              :description="values[1].description"
              :imageUrl="values[1].imageUrl"
              :linkedinUrl="values[1].linkedinUrl"
              align="right"
            />
          </div>
        </SwiperSlide>

        <!-- Slide para XAVI (values[0]) -->
        <SwiperSlide>
          <div class="w-full h-full flex items-center justify-center py-8">
            <MemberCard 
              :memberName="values[0].memberName"
              :memberRole1="values[0].memberRole1"
              :memberRole2="values[0].memberRole2"
              :description="values[0].description"
              :imageUrl="values[0].imageUrl"
              :linkedinUrl="values[0].linkedinUrl"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
      
  </section>
</template>

<style scoped>
/* Swiper customization */
.member-swiper {
  width: 100%;
  min-height: 600px;
  padding-bottom: 50px;
}

/* Swiper slide styling */
.member-swiper .swiper-slide {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Pagination styling */
:deep(.swiper-pagination) {
  bottom: 10px !important;
}

:deep(.swiper-pagination-bullet) {
  background: #AB5CBB; /* coolPurple */
  opacity: 0.3;
  width: 12px;
  height: 12px;
}

:deep(.swiper-pagination-bullet-active) {
  background: #F12E62; /* redAction */
  opacity: 1;
  transform: scale(1.2);
}

/* Navigation arrows styling */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #AB5CBB; /* coolPurple */
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  margin-top: -22px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background: #F12E62; /* redAction */
  color: white;
  transform: scale(1.1);
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
  font-size: 18px;
  font-weight: bold;
}

/* Hide navigation on very small screens */
@media (max-width: 480px) {
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    display: none;
  }
  
  .member-swiper {
    min-height: 550px;
  }
}

/* Adjust swiper height for tablets */
@media (min-width: 481px) and (max-width: 1023px) {
  .member-swiper {
    min-height: 650px;
  }
}
</style>