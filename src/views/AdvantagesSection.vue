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
          title: 'Tiempos de entrega garantizados',
          description: 'Cumplimos con los plazos acordados sin comprometer la calidad. Tu proyecto estará listo cuando lo necesites.',
          iconBgColor: 'bg-[#AB5CBB]'
        },
        {
          id: 2,
          icon: UserGroupIcon,
          title: 'Equipo especializado',
          description: 'Nuestro equipo multidisciplinario aporta años de experiencia en desarrollo, diseño y estrategia digital.',
          iconBgColor: 'bg-[#F12E62]'
        },
        // {
        //   id: 3,
        //   icon: ChartBarIcon,
        //   title: 'Resultados medibles',
        //   description: 'Cada proyecto incluye métricas claras y reportes que demuestran el impacto real de nuestro trabajo.',
        //   iconBgColor: 'bg-[#FFC600]'
        // },
        // {
        //   id: 4,
        //   icon: ShieldCheckIcon,
        //   title: 'Soporte continuo',
        //   description: 'No terminamos al entregar el proyecto. Te acompañamos con mantenimiento y soporte técnico especializado.',
        //   iconBgColor: 'bg-[#AB5CBB]'
        // },
        // {
        //   id: 5,
        //   icon: LightBulbIcon,
        //   title: 'Innovación constante',
        //   description: 'Siempre utilizamos las últimas tecnologías y mejores prácticas para que tu solución esté a la vanguardia.',
        //   iconBgColor: 'bg-[#F12E62]'
        // },
        {
          id: 6,
          icon: HandThumbUpIcon,
          title: 'Satisfacción garantizada',
          description: 'Trabajamos hasta que estés 100% satisfecho. Tu éxito es nuestro objetivo principal.',
          iconBgColor: 'bg-[#FFC600]'
        }
      ]
    }
  }
}
</script>

<template>
  <!-- Advantages Section -->
  <section  id="advantages-benefits-section" class="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-50 2xl:px-90 min-h-screen flex flex-col items-center gap-10">
    
      
 

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
      <div  class="flex items-center">
        
        <!-- Desktop Layout: Grid -->
        <div class="hidden lg:grid lg:grid-cols-3 gap-8 xl:gap-10 w-full max-w-7xl mx-auto">
          <BenefitsCard
            v-for="advantage in advantages"
            :key="advantage.id"
            :icon="advantage.icon"
            :title="advantage.title"
            :description="advantage.description"
            :icon-bg-color="advantage.iconBgColor"
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
  </section>
</template>


 