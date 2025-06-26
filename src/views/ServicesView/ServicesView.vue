<script>
import HeroContent from '@/components/HeroContent.vue'
import PandaCool from '@/assets/img/personajes/panda-cool2.png'

export default {
  name: 'ServicesView',
  components: {
    HeroContent
  },
  data() {
    return {
      PandaCool
    }
  }
}
</script>
<template>
  <section class="bg-coolGreen text-white   pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-50 2xl:px-90 min-h-screen hero-diagonal">
    <div class="container mx-auto h-full flex flex-col justify-center  lg:mt-14">
             <div class="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-0 items-center h-full">
        
        <!-- Left Column: Content -->
        <div class="order-1 lg:col-span-4 py-20">
          <HeroContent
            pre-title="Servicios digitales que transforman tu negocio."
            title="Soluciones que inspiran"
            title-color="text-coolYellow"
            description="Todo lo que necesitas para destacar online."
          />
        </div>

        <!-- Right Column: Contact Form (Desktop) / Contact Button (Mobile/Tablet) -->
                 <div class="order-2 lg:col-span-3">
          <!-- Contact Form - Only visible on desktop -->
          <div class="hidden lg:flex lg:flex-row justify-center  items-center" style="height: 80vh;">
           
            <img :src="PandaCool" alt="Hero Image" class="h-6/7 object-cover">
          </div>

          <!-- Contact Button - Only visible on tablet and mobile -->
          <div class="xl:hidden flex justify-center">
            <router-link 
              to="/contact"
              class="inline-flex items-center justify-center bg-coolOrange text-white py-4 px-8 font-medium text-lg lg:text-xl hover:bg-coolYellow transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Contáctanos
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </section>
</template> 
<style scoped>
/* Custom focus styles for form inputs */
input:focus, textarea:focus {
  outline: none;
}

/* Diagonal background effect */
.hero-diagonal {
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  /* Para ajustar la altura de la diagonal en el lado derecho, 
     cambia el valor 80% por:
     - 90% = diagonal más alta (menos corte)
     - 80% = diagonal más baja (más corte)
     - 75% = diagonal aún más baja
     - 70% = diagonal muy baja (mucho corte) */
}

/* For mobile responsiveness */
@media (max-width: 768px) {
  .hero-diagonal {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
}
</style> 