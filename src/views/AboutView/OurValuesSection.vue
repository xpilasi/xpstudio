<script>
import ValuesCard from './ValuesCard.vue'
import ValuesMobileCard from './ValuesMobileCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import ChatBubbleLeftRightIcon from 'heroicons/24/outline/chat-bubble-left-right.svg?component'
import CogIcon from 'heroicons/24/outline/cog.svg?component'
import HeartIcon from 'heroicons/24/outline/heart.svg?component'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: 'OurValuesSection',
  components: {
    ValuesCard,
    ValuesMobileCard,
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
  <section id="aboutValues" class="bg-gradient-to-t from-gray-100 to-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-50 2xl:px-90 min-h-screen flex flex-col items-center gap-10 relative overflow-hidden">
    
    <!-- Subtle Blurred Circles Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <!-- Circle 1 - Top Right -->
      <div class="absolute z-50 top-1/2 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-coolYellow to-yellow-200/80 opacity-40 blur-2xl"></div>
      
      <!-- Circle 2 - Bottom Left -->
      <div class="absolute bottom-1/4 -left-10 z-50 w-64 h-64 rounded-full bg-gradient-to-br from-coolYellow to-yellow-200/60 blur-2xl opacity-50"></div>
    </div>

    <!-- Content Container -->
    <div class="relative z-10 w-full flex flex-col items-center gap-10">
      
      <!-- Section Title -->
      <SectionTitle 
        title="Valores" 
        color="text-coolYellow"
      />

      <!-- Desktop Layout - Solo visible en pantallas grandes -->
      <div class="hidden lg:block space-y-6 lg:space-y-14 max-w-7xl mx-auto">
        <ValuesCard
          v-for="value in values"
          :key="value.id"
          :title="value.title"
          :description="value.description"
          :icon="value.icon"
        />
      </div>

      <!-- Mobile/Tablet Swiper - Solo visible en pantallas pequeñas y medianas -->
      <div class="lg:hidden w-full">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          :loop="true"
          class="values-swiper"
        >
          <!-- Slide para cada valor -->
          <SwiperSlide v-for="value in values" :key="value.id">
            <div class="w-full h-full flex items-center justify-center py-12">
              <ValuesMobileCard 
                :title="value.title"
                :description="value.description"
                :icon="value.icon"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
      
  </section>
</template>

<style scoped>
/* Values Swiper customization */
.values-swiper {
  width: 100%;
  min-height: 500px;
  padding-bottom: 50px;
}

/* Swiper slide styling */
.values-swiper .swiper-slide {
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
  background: #FFC600; /* coolYellow */
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
  color: #FFC600; /* coolYellow */
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
  
  .values-swiper {
    min-height: 450px;
  }
}

/* Adjust swiper height for tablets */
@media (min-width: 481px) and (max-width: 1023px) {
  .values-swiper {
    min-height: 550px;
  }
}
</style>