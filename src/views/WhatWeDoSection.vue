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
    SectionTop
  },
  data() {
    return {
      modules: [Pagination, Navigation],
      SolucionesPersonalizadasImage,
      DisenoResponsivoImage,
      FocoEnUsuarioImage,

      features: [
        {
          id: 'feature-soluciones-personalizadas-section',
          labelText: 'A la medida',
          titleText: 'Soluciones personalizadas',
          descriptionText: 'Trabajo contigo para crear productos que se ajusten a las necesidades únicas de tu negocio y reflejen la esencia de tu marca y tus objetivos.',
          imageSrc: SolucionesPersonalizadasImage,
          imageAlt: 'Soluciones personalizadas Illustration'
        },
        {
          id: 'feature-diseno-responsivo-section',
          labelText: 'Multi-plataforma',
          titleText: 'Diseño Responsivo',
          descriptionText: 'Experiencia diseñada para ordenadores, móviles y tablets, todo enfocado en que tus clientes tengan una gran experiencia sin importar el dispositivo.',
          imageSrc: DisenoResponsivoImage,
          imageAlt: 'Diseño Responsivo Illustration'
        },
        {
          id: 'feature-foco-usuario-section',
          labelText: 'UX',
          titleText: 'Foco en el usuario',
          descriptionText: 'Interfaces claras y fáciles de usar, para que tus usuarios se sientan cómodos y tomen acción.',
          imageSrc: FocoEnUsuarioImage,
          imageAlt: 'Foco en el usuario Illustration'
        }
      ]
    }
  }
}
</script>

<template>
  <!-- What We Do Section -->
  <section id="what-we-do-joker-cards-section" class="min-h-screen bg-gradient-to-r from-gray-200/30 to-white flex flex-col justify-center px-4 sm:px-6 lg:px-50 2xl:px-90 relative overflow-hidden">
    
    <!-- Decorative Background Icons -->
    <div class="absolute inset-0 z-0 pointer-events-none">
    
      
      
      <!-- Bottom decorative elements -->
      <div class="absolute bottom-20 right-1/3 opacity-15 transform rotate-12">
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L22 12L12 22L2 12L12 2Z" fill="#AB5CBB" />
        </svg>
      </div>
      
      <div class="absolute bottom-32 left-1/2 opacity-25 transform -translate-x-1/2">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l1.09 2.26L16 5.27l-2 1.87.71 2.88L12 8.77l-2.71 1.25L10 7.14 8 5.27l2.91-1.01L12 2z" fill="#F12E62" />
        </svg>
      </div>
      
    
    </div>

    <!-- Content Container (with higher z-index) -->
    <div class="relative z-10">
      <!-- Header Section -->
    

      <!-- JokerCards Section -->
      <div  class=" flex flex-col justify-center items-center gap-14 ">
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

        
        <!-- Desktop Layout: Alternating cards left-right-left -->
        <div class="hidden lg:flex flex-col gap-5 justify-start items-start max-w-7xl mx-auto  w-full">
          <!-- Card 1: Left aligned -->
          <div 
            :id="features[0].id"
            class="w-full"
          >
            <div class="mr-auto ml-0" style="width: fit-content;">
              <JokerCardHorizontal
                :label-text="features[0].labelText"
                :title-text="features[0].titleText"
                :description-text="features[0].descriptionText"
                :image-src="features[0].imageSrc"
                :image-alt="features[0].imageAlt"
              />
            </div>
          </div>

          <!-- Card 2: Right aligned -->
          <div 
            :id="features[1].id"
            class="w-full"
          >
            <div class="ml-auto mr-0" style="width: fit-content;">
              <JokerCardHorizontal
                :label-text="features[1].labelText"
                :title-text="features[1].titleText"
                :description-text="features[1].descriptionText"
                :image-src="features[1].imageSrc"
                :image-alt="features[1].imageAlt"
              />
            </div>
          </div>

          <!-- Card 3: Left aligned -->
          <div 
            :id="features[2].id"
            class="w-full"
          >
            <div class="mr-auto ml-0" style="width: fit-content;">
              <JokerCardHorizontal
                :label-text="features[2].labelText"
                :title-text="features[2].titleText"
                :description-text="features[2].descriptionText"
                :image-src="features[2].imageSrc"
                :image-alt="features[2].imageAlt"
              />
            </div>
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
              v-for="feature in features" 
              :key="feature.id"
              class="flex justify-center items-center pb-12"
            >
              <JokerCardMobile
                :label-text="feature.labelText"
                :title-text="feature.titleText"
                :description-text="feature.descriptionText"
                :image-src="feature.imageSrc"
                :image-alt="feature.imageAlt"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        
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
 