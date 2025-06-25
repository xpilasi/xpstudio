<script>
import LionHipster from '@/assets/img/lion-girl-hipster.png'
import CoolContactForm from '@/components/CoolContactForm.vue'

export default {
  name: 'ContactView',
  components: {
    CoolContactForm
  },
  data() {
    return {
      LionHipster
    }
  },
  methods: {
    handleFormSubmitted(formData) {
      // Handle successful form submission
      console.log('Form submitted with data:', formData);
      // Aquí puedes agregar lógica adicional como envío a servidor, analytics, etc.
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
  <div class="min-h-screen text-white  hero-diagonal-container">
    <div class="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-40 py-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
        
        <!-- Left Column: Content and Form -->
        <div class="space-y-8">
          
          <!-- Title -->
          <div>
            <h1 class="text-2xl sm:text-3xl lg:text-3xl xl:text-3xl font-bold">
              ¿Tienes una idea de proyecto para tu negocio?<br>
              <span class="text-coolYellow">Conversémoslo.</span>
            </h1>
          </div>

          <!-- Contact Form -->
          <CoolContactForm 
            @form-submitted="handleFormSubmitted"
            @form-error="handleFormError"
          />
        </div>

        <!-- Right Column: Image -->
        <div class="hidden lg:flex justify-center items-center relative z-10 pt-30">
          <div class=" max-w-md">
            <img :src="LionHipster" alt="Lion Hipster" class="w-4/5 2xl:w-full object-cover">
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
/* Custom styles for contact page */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
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
  background-color: #F12E62; /* redAction color */
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