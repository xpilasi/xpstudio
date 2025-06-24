<script>
import ContactForm from '@/components/ContactForm.vue'
import SectionHeader from '@/components/SectionHeader.vue'

export default {
  name: 'ContactView',
  components: {
    ContactForm,
    SectionHeader
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
  <div class="min-h-screen bg-redAction text-white pt-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-40 py-8">
      
      

      <!-- Contact Form Section -->
      <div class="max-w-4xl mx-auto">
        
          
          <!-- Left Column: Contact Info -->
          

          <!-- Right Column: Contact Form -->
          <div class=" backdrop-blur-sm rounded-lg p-6 lg:p-8">
            <h3 class="text-2xl font-bold mb-6 text-center">Envíanos tu consulta</h3>
            <ContactForm 
              @form-submitted="handleFormSubmitted"
              @form-error="handleFormError"
            />
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
</style> 