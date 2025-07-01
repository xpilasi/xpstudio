<script>
import HeroContent from '@/components/HeroContent.vue'
import HeroMobile from '@/components/HeroMobile.vue'
import PandaCool from '@/assets/img/personajes/panda-cool2.png'
import JabaliCool from '@/assets/img/personajes/jabali-maiden.png'

export default {
  name: 'ProjectsView',
  components: {
    HeroContent,
    HeroMobile
  },
  data() {
    return {
      JabaliCool
    }
  }
}
</script>
<template>
  <section class="bg-coolBlue text-white px-4 sm:px-6 lg:px-50 2xl:px-90 min-h-screen hero-diagonal">
    <div class="container mx-auto h-screen flex items-center justify-center">
      <div class="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-0 items-center w-full">
        
        <!-- Left Column: Content -->
        <div class="order-1 lg:col-span-4">
          <HeroContent
            pre-title="Nuestros proyectos hablan por nosotros."
            title="Resultados que brillan"
            title-color="text-coolYellow"
            description="Inspírate con lo que podemos lograr juntos."
          />
        </div>

        <!-- Right Column: Hero Image (Desktop) / Hero Mobile (Mobile/Tablet) -->
        <div class="order-2 lg:col-span-3">
          <!-- Hero Image - Only visible on desktop -->
          <div class="hidden lg:flex lg:flex-row justify-center items-center" style="height: 80vh;">
            <img :src="JabaliCool" alt="Hero Jabali Character" class="h-6/7 object-cover">
          </div>

          <!-- Mobile and Tablet Version -->
          <HeroMobile 
            :image-url="JabaliCool"
            image-alt="Hero Jabali Character"
            primary-decor-color="bg-coolYellow"
            secondary-decor-color="bg-redAction"
            glow-from-color="from-coolYellow/20"
            glow-to-color="to-redAction/20"
            container-padding="py-8 md:py-12"
            image-size="h-64 sm:h-72 md:h-80"
            :enable-hover="true"
          />
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