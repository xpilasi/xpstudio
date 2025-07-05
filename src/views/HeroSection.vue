    <script>
import ContactForm from '@/components/ContactForm.vue'
import HeroContent from '@/components/HeroContent.vue'
import HeroMobile from '@/components/HeroMobile.vue'
import HeroImage from '@/assets/img/img-test-xps.png'
import HorseCool from '@/assets/img/personajes/horse-cool.png'

export default {
  name: 'HeroSection',
  components: {
    ContactForm,
    HeroContent,
    HeroMobile
  },
  data() {
    return {
      HeroImage,
      HorseCool
    }
  },
  methods: {
    handleFormSubmitted(formData) {
      // Handle successful form submission
      console.log('Form submitted with data:', formData);
      // Aquí puedes agregar lógica adicional como analytics, etc.
    },
    handleFormError(error) {
      // Handle form submission error
      console.error('Form submission error:', error);
      // Aquí puedes agregar lógica de manejo de errores
    }
  }
}
</script>

<template>
  <!-- Hero Section -->
  <section id="hero-section" class="text-white px-4 sm:px-6 lg:px-50 2xl:px-90 min-h-screen hero-diagonal-container">
    <div class="container mx-auto h-screen flex items-center justify-center">
      <div class="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-0 items-center w-full">
        
        <!-- Left Column: Content -->
        <div class="order-1 lg:col-span-4 lg:py-20  ">
          <HeroContent
            pre-title="¿Listo para llevar tu negocio al siguiente nivel?"
            title="Tu web profesional empieza aquí"
            title-color="text-coolYellow"
            description="Haz crecer tu presencia digital y atrae más clientes."
          />
        </div>

        <!-- Right Column: Hero Animal Image -->
        <div class="order-2 lg:col-span-3">
          <!-- Desktop Version -->
          <div class="hidden lg:flex lg:flex-row justify-center items-center pt-30 relative z-20" style="height: 80vh;">
            <img 
              :src="HorseCool" 
              alt="Hero Cool Horse" 
              class="object-cover transition-transform duration-300 hover:scale-105"
            >
          </div>

          <!-- Mobile and Tablet Version -->
          <HeroMobile 
            :image-url="HorseCool"
            image-alt="Hero Cool Horse"
            primary-decor-color="bg-coolYellow"
            secondary-decor-color="bg-coolOrange"
            glow-from-color="from-coolYellow/20"
            glow-to-color="to-coolOrange/20"
            container-padding="py-0 md:py-12"
            image-size="h-60 sm:h-56 md:h-64"
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

/* Diagonal background effect with pseudo-element */
.hero-diagonal-container {
  position: relative;
  overflow: hidden;
  background-color: #F5F5F5;
}

.hero-diagonal-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #AB5CBB; /* coolPurple color */
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  z-index: 1;
  /* Para ajustar la altura de la diagonal en el lado derecho, 
     cambia el valor 80% por:
     - 90% = diagonal más alta (menos corte)
     - 80% = diagonal más baja (más corte)
     - 75% = diagonal aún más baja
     - 70% = diagonal muy baja (mucho corte) */
}

.hero-diagonal-container > * {
  position: relative;
  z-index: 2;
}

/* For mobile responsiveness */
@media (max-width: 768px) {
  .hero-diagonal-container::before {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
}
</style> 