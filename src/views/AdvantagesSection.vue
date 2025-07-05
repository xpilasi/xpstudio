<script>
import BenefitsCard from '@/components/BenefitsCard.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import SectionTop from '@/components/SectionTop.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Importar iconos de Heroicons
import ClockIcon from 'heroicons/24/outline/clock.svg?component'
import UserGroupIcon from 'heroicons/24/outline/user-group.svg?component'
import ChartBarIcon from 'heroicons/24/outline/chart-bar.svg?component'
import ShieldCheckIcon from 'heroicons/24/outline/shield-check.svg?component'
import LightBulbIcon from 'heroicons/24/outline/light-bulb.svg?component'
import HandThumbUpIcon from 'heroicons/24/outline/hand-thumb-up.svg?component'

export default {
  name: 'AdvantagesSection',
  components: {
    BenefitsCard,
    SectionHeader,
    Swiper,
    SwiperSlide,
    SectionTop
  },
  data() {
    return {
      modules: [Pagination, Navigation],
      advantages: [
        {
          id: 1,
          icon: ClockIcon,
          title: 'Entregas contínuas',
          titleColor: 'text-gray-600',
          description: 'Cumplimos con los plazos acordados sin comprometer la calidad. Tu proyecto estará listo cuando lo necesites.',
          iconBgColor: 'coolPurple',
          iconColor: 'text-coolPurple',
          descriptionColor: 'text-gray-600'
        },
        {
          id: 2,
          icon: UserGroupIcon,
          title: 'Visión de negocio  ',
          titleColor: 'text-gray-600',
          description: 'No solo desarrollamos tu proyecto: pensamos en cómo este aporta valor real, conecta con clientes y apoya tus objetivos comerciales.', 
          iconBgColor: 'bg-coolPurple',
          iconColor: 'text-coolPurple',
          descriptionColor: 'text-gray-600'
        },
   
        {
          id: 3,
          icon: HandThumbUpIcon,
          title: 'Tecnología moderna',
          titleColor: 'text-gray-600',
          description: 'Usamos las herramientas más actuales para crear webs y apps más rápidas, seguras y listas para escalar junto a tu negocio.',
          iconBgColor: 'bg-coolPurple',
          iconColor: 'text-coolPurple',
          descriptionColor: 'text-gray-600'
        }
      ]
    }
  }
}
</script>

<template>
  <!-- Advantages Section -->
  <section id="advantages-benefits-section" class="bg-gradient-to-t from-gray-100 to-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-50 2xl:px-90 min-h-screen flex flex-col items-center gap-10 relative overflow-hidden">
    
    <!-- Subtle Blurred Circles Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <!-- Circle 1 - Top Left -->
      <div class="absolute  z-50 top-1/2 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-coolPurple to-purple-200/80 opacity-40 blur-2xl"></div>
      
      <!-- Circle 2 - Middle Right -->
      <!-- <div class="absolute top-1/3 -right-10 z-50 w-64 h-64 rounded-full bg-gradient-to-br from-coolPurple to-purple-200/50 blur-2xl opacity-55"></div> -->
      
      <!-- Circle 3 - Bottom Center -->
      <!-- <div class="absolute top-96 left-2/3 z-50 transform -translate-x-1/2  w-20 h-20 rounded-full bg-gradient-to-br from-coolPurple to-purple-200/60 blur-sm opacity-60"></div> -->
      
      <!-- Circle 4 - Bottom Right -->
      <!-- <div class="absolute top-40 -right-5 z-50 w-64 h-64 rounded-full bg-gradient-to-br from-coolPurple to-purple-200/60 blur-2xl opacity-50"></div> -->
    </div>

    <!-- Content Container -->
    <div class="relative z-10 w-full flex flex-col items-center gap-10">
      
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

      <!-- Benefits Cards Section -->
      <div class="flex items-center">
        
        <!-- Desktop Layout: Grid -->
        <div class="hidden lg:grid lg:grid-cols-3 gap-8 xl:gap-10 w-full max-w-7xl mx-auto">
          <BenefitsCard
            v-for="advantage in advantages"
            :key="advantage.id"
            :icon="advantage.icon"
            :title="advantage.title"
            :title-color="advantage.titleColor"
            :description="advantage.description"
            :description-color="advantage.descriptionColor"
            :icon-bg-color="advantage.iconBgColor"
            :icon-color="advantage.iconColor"
          />
        </div>

        <!-- Mobile/Tablet Layout: Swiper Slider -->
        <div class="lg:hidden w-full">
          <div class="pb-12">
            <Swiper
              :modules="modules"
              :slides-per-view="1"
              :space-between="20"
              :pagination="{ clickable: true }"
              :navigation="true"
              :autoplay="{
                delay: 4000,
                disableOnInteraction: false,
              }"
              :breakpoints="{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                }
              }"
              class="w-full"
            >
              <SwiperSlide 
                v-for="advantage in advantages" 
                :key="advantage.id"
                class="h-auto"
              >
                <BenefitsCard
                  :icon="advantage.icon"
                  :title="advantage.title"
                  :description="advantage.description"
                  :icon-bg-color="advantage.iconBgColor"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>


 