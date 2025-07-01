<script>
import HeroDude from '@/assets/img/personajes/foxy-coool-2.png'
import HeroContent from '@/components/HeroContent.vue'
import HeroMobile from '@/components/HeroMobile.vue'

export default {
  name: 'HeroAboutSection',
  components: {
    HeroContent,
    HeroMobile
  },
  data() {
    return {
      HeroDude,
    }
  }
}
</script>

<template>
  <section id="aboutHero" class="bg-coolYellow text-white px-4 sm:px-6 lg:px-50 2xl:px-90 min-h-screen hero-diagonal">
    <div class="container mx-auto h-screen flex items-center justify-center">
      <div class="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-0 items-center w-full">
        
        <!-- Left Column: Content -->
        <div class="order-1 lg:col-span-4">
          <HeroContent
            pre-title="¿Quiénes somos?"
            pre-title-color="text-black"
            title="Somos tu equipo digital."
            title-color="text-redAction"
            description="Conoce al equipo que lleva tu marca al siguiente nivel."
            description-color="text-black"
          />
        </div>

        <!-- Right Column: Hero Image (Desktop) / Hero Mobile (Mobile/Tablet) -->
        <div class="order-2 lg:col-span-3">
          <!-- Hero Image - Only visible on desktop -->
          <div class="hidden lg:flex lg:flex-row justify-center items-center" style="height: 80vh;">
            <img :src="HeroDude" alt="Hero Foxy Character" class="h-6/7 object-cover">
          </div>

          <!-- Mobile and Tablet Version -->
          <HeroMobile 
            :image-url="HeroDude"
            image-alt="Hero Foxy Character"
            primary-decor-color="bg-redAction"
            secondary-decor-color="bg-coolOrange"
            glow-from-color="from-redAction/20"
            glow-to-color="to-coolOrange/20"
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