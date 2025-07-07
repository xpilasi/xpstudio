<script>
import JokerCard from '@/components/JokerCard.vue'
import JokerCardHorizontal from '@/components/JokerCardHorizontal.vue'
import JokerCardMobile from '@/components/JokerCardMobile.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import SolucionesPersonalizadasImage from '@/assets/img/what-we-do/wwdo-1.svg?url'
import DisenoResponsivoImage from '@/assets/img/what-we-do/wwdo-2.svg?url'
import FocoEnUsuarioImage from '@/assets/img/what-we-do/wwdo-3.svg?url'
import SectionTop from '@/components/SectionTop.vue'
import BenefitsCardMobile from '@/components/BenefitsCardMobile.vue'
import BenefitsCard from '@/components/BenefitsCard.vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default {
  name: 'WhatWeDoSection',
  components: {
    JokerCard,
    JokerCardHorizontal,
    JokerCardMobile,
    SectionHeader,
    Swiper,
    SwiperSlide,
    SectionTop,
    BenefitsCard,
    BenefitsCardMobile
  },
  data() {
    return {
      modules: [Pagination, Navigation],
      SolucionesPersonalizadasImage,
      DisenoResponsivoImage,
      FocoEnUsuarioImage,

      advantages: [
        {
          id: 1,
          icon: 'clock',
          title: 'Entregas contínuas',
          titleColor: 'text-gray-600',
          description: 'Cumplimos con los plazos acordados sin comprometer la calidad. Tu proyecto estará listo cuando lo necesites.',
          iconBgColor: 'bg-coolPurple',
          iconColor: 'text-white',
          descriptionColor: 'text-gray-600'
        },
        {
          id: 2,
          icon: 'users',
          title: 'Visión de negocio',
          titleColor: 'text-gray-600',
          description: 'Pensamos en cómo tu proyecto aporta valor real, conecta con clientes y apoya tus objetivos comerciales.', 
          iconBgColor: 'bg-coolPurple',
          iconColor: 'text-white',
          descriptionColor: 'text-gray-600'
        },
   
        {
          id: 3,
          icon: 'zap',
          title: 'Tecnología moderna',
          titleColor: 'text-gray-600',
          description: 'Usamos las herramientas más actuales para crear webs y apps más rápidas, seguras y listas para escalar junto a tu negocio.',
          iconBgColor: 'bg-coolPurple',
          iconColor: 'text-white',
          descriptionColor: 'text-gray-600'
        }
      ]
    }
  }
}
</script>

<template>
  <!-- What We Do Section -->
  <section id="advantages-benefits-section" class="bg-gradient-to-t from-white to-purple-100/40    px-4 sm:px-6 lg:px-50 2xl:px-90">
 

      <!-- JokerCards Section -->
      <div  class="min-h-screen flex flex-col justify-center items-center gap-14 lg:pb-10 ">
        <SectionTop
        header="¿Por qué Bestiari?"
        title=""
        header-color="text-coolPurple"
        subtitle="Utilizamos estándares de la industria con interfaces intuitivas y modernas"
        description=""
        title-color="text-gray-600"
        subtitle-color="text-gray-600"
        description-color="text-gray-600"
      ></SectionTop>

        
        <!-- Desktop Layout: 3 cards in a row -->
        <div class="hidden lg:flex flex-row gap-8  justify-center items-center max-w-7xl mx-auto px-6 lg:px-8 w-full lg:py-10 0 ">
          <div 
            v-for="advantage in advantages" 
            :key="advantage.id"
            :id="advantage.id"
            class="flex justify-center items-center"
          >
            <BenefitsCard
              :icon="advantage.icon"
              :title="advantage.title"
              :description="advantage.description"
            />
          </div>
        </div>

        <!-- Mobile/Tablet Layout: Swiper Slider -->
        <div class="lg:hidden w-full px-4 ">
          <Swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="20"
            :pagination="{ clickable: true }"
            :navigation="true"
            :breakpoints="{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              }
            }"
            class="joker-cards-swiper"
          >
            <SwiperSlide 
              v-for="advantage in advantages" 
              :key="advantage.id"
              class="flex justify-center items-center pb-12"
            >
              <BenefitsCardMobile
                :icon="advantage.icon"
                :title="advantage.title"
                :description="advantage.description"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        
      </div>

   
  </section>
</template>

<style>
/* Swiper custom styles */
.joker-cards-swiper {
  padding-bottom: 50px !important;
}

.joker-cards-swiper .swiper-pagination {
  bottom: 10px !important;
}

.joker-cards-swiper .swiper-pagination-bullet {
  background: #AB5CBB !important;
  opacity: 0.3 !important;
  width: 12px !important;
  height: 12px !important;
}

.joker-cards-swiper .swiper-pagination-bullet-active {
  opacity: 1 !important;
  transform: scale(1.2) !important;
}

.joker-cards-swiper .swiper-button-next,
.joker-cards-swiper .swiper-button-prev {
  color: #AB5CBB !important;
  font-weight: bold !important;
  background: white !important;
  width: 44px !important;
  height: 44px !important;
  border-radius: 50% !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  transition: all 0.3s ease !important;
}

.joker-cards-swiper .swiper-button-next:hover,
.joker-cards-swiper .swiper-button-prev:hover {
  background: #AB5CBB !important;
  color: white !important;
  transform: scale(1.1) !important;
}

.joker-cards-swiper .swiper-button-next::after,
.joker-cards-swiper .swiper-button-prev::after {
  font-size: 18px !important;
  font-weight: bold !important;
}

.joker-cards-swiper .swiper-button-disabled {
  opacity: 0.3 !important;
}

/* Hide navigation arrows on very small screens */
@media (max-width: 480px) {
  .joker-cards-swiper .swiper-button-next,
  .joker-cards-swiper .swiper-button-prev {
    display: none !important;
  }
}
</style>
 