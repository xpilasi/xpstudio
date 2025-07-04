<script>
import JokerCard from '@/components/JokerCard.vue'
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
  <section class="bg-white py-16 sm:py-20  px-4 sm:px-6 lg:px-50 2xl:px-90">
    
      
      <!-- Header Section -->
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

      <!-- JokerCards Section -->
      <div id="what-we-do-joker-cards-section" class="min-h-screen flex flex-col justify-center items-center gap-14 ">
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
        <div class="hidden lg:flex flex-row gap-8  justify-center items-center max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div 
            v-for="feature in features" 
            :key="feature.id"
            :id="feature.id"
            class="flex justify-center items-center"
          >
            <JokerCard
              :label-text="feature.labelText"
              :title-text="feature.titleText"
              :description-text="feature.descriptionText"
              :image-src="feature.imageSrc"
              :image-alt="feature.imageAlt"
            />
          </div>
        </div>

        <!-- Mobile/Tablet Layout: Swiper Slider -->
        <div class="lg:hidden w-full px-4">
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
              <JokerCard
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
 