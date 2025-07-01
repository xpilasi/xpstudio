    <script>
import ContactForm from '@/components/ContactForm.vue'
import HeroContent from '@/components/HeroContent.vue'
import HeroImage from '@/assets/img/img-test-xps.png'
import HorseCool from '@/assets/img/personajes/horse-cool.png'

export default {
  name: 'HeroSection',
  components: {
    ContactForm,
    HeroContent
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
  <section id="hero-section" class="text-white   pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-50 2xl:px-90 min-h-screen hero-diagonal-container">
    <div class="container mx-auto h-full flex flex-col justify-center  lg:mt-14">
             <div class="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-0 items-center h-full">
        
        <!-- Left Column: Content -->
        <div class="order-1 lg:col-span-4 py-20">
          <HeroContent
            pre-title="¿Listo para llevar tu negocio al siguiente nivel?"
            title="Tu web profesional empieza aquí"
            title-color="text-coolYellow"
            description="Haz crecer tu presencia digital y atrae más clientes."
          />
        </div>

        <!-- Right Column: Contact Form (Desktop) / Contact Button (Mobile/Tablet) -->
                 <div class="order-2 lg:col-span-3">
          <!-- Contact Form - Only visible on desktop -->
          <div class="hidden lg:flex lg:flex-row justify-center  items-center pt-30 relative z-20" style="height: 80vh;">
           
            <img :src="HorseCool" alt="Hero Image" class="object-cover">
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

/* Diagonal background effect with pseudo-element */
.hero-diagonal-container {
  position: relative;
  overflow: hidden;
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