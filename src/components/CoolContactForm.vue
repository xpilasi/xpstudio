<script>
import { useCalendly } from '@/composables/useCalendly'

export default {
  name: 'CoolContactForm',
  emits: ['form-submitted', 'form-error'],
  setup() {
    const { openCalendlyPopup, buildCalendlyUrl } = useCalendly()
    
    return {
      openCalendlyPopup,
      buildCalendlyUrl
    }
  },
  data() {
    return {
      formData: {
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        empresa: '',
        mensaje: ''
      }
    }
  },
  methods: {
    handleFormSubmit() {
      try {
        // Basic validation
        if (!this.formData.nombre || !this.formData.email) {
          throw new Error('Nombre y email son requeridos');
        }

        // Emit success event
        this.$emit('form-submitted', this.formData);
        
        // Reset form after successful submission
        this.resetForm();
        
      } catch (error) {
        // Emit error event
        this.$emit('form-error', error.message);
      }
    },
    async scheduleMetering() {
      // Handle meeting scheduling with Calendly
      console.log('Schedule meeting clicked');
      
      // Calendly configuration
      const calendlyUsername = 'pilasiha';
      const eventType = '30min';
      
      // Build Calendly URL with form data prefill
      const calendlyUrl = this.buildCalendlyUrl(calendlyUsername, eventType, {
        name: this.formData.nombre + ' ' + this.formData.apellido,
        email: this.formData.email,
        company: this.formData.empresa,
        phone: this.formData.telefono,
        hideEventTypeDetails: true,
        primaryColor: 'F12E62' // redAction color
      });
      
      // Open Calendly popup
      const success = await this.openCalendlyPopup(calendlyUrl, {
        // Callback when meeting is scheduled
        onEventScheduled: (e) => {
          console.log('Meeting scheduled:', e.detail);
          this.handleFormSubmit(); // Submit form after successful booking
        }
      });
      
      if (!success) {
        console.error('Failed to open Calendly');
        // Fallback: submit form normally
        this.handleFormSubmit();
      }
    },
    resetForm() {
      this.formData = {
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        empresa: '',
        mensaje: ''
      };
    }
  }
}
</script>

<template>
  <!-- Contact Form -->
  <div class="space-y-6">
    
    <!-- Name and Last Name Row -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="space-y-2">
        <input 
          v-model="formData.nombre"
          type="text" 
          placeholder="Nombre"
          class="w-full bg-transparent border-b-2 border-white pb-2 text-white placeholder-white/80 focus:outline-none focus:border-coolYellow focus:placeholder-white/40 text-lg"
          required
        >
      </div>
      <div class="space-y-2">
        <input 
          v-model="formData.apellido"
          type="text" 
          placeholder="Apellido"
          class="w-full bg-transparent border-b-2 border-white pb-2 text-white placeholder-white/80 focus:outline-none focus:border-coolYellow focus:placeholder-white/40 text-lg"
        >
      </div>
    </div>

    <!-- Email and Phone Row -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="space-y-2">
        <input 
          v-model="formData.email"
          type="email" 
          placeholder="Email"
          class="w-full bg-transparent border-b-2 border-white pb-2 text-white placeholder-white/80 focus:outline-none focus:border-coolYellow focus:placeholder-white/40 text-lg"
          required
        >
      </div>
      <div class="space-y-2">
        <input 
          v-model="formData.telefono"
          type="tel" 
          placeholder="Teléfono"
          class="w-full bg-transparent border-b-2 border-white pb-2 text-white placeholder-white/80 focus:outline-none focus:border-coolYellow focus:placeholder-white/40 text-lg"
        >
      </div>
    </div>

    <!-- Company -->
    <div class="space-y-2">
      <input 
        v-model="formData.empresa"
        type="text" 
        placeholder="Empresa"
        class="w-full bg-transparent border-b-2 border-white pb-2 text-white placeholder-white/80 focus:outline-none focus:border-coolYellow focus:placeholder-white/40 text-lg"
      >
    </div>

    <!-- Message Area -->
    <div class="space-y-2">
      <textarea 
        v-model="formData.mensaje"
        rows="4"
        placeholder="Hola, quiero cotizar el diseño del sitio web para mi restaurant, te envío una cita para reunirnos, gracias!"
        class="w-full bg-transparent border-b-2 border-white pb-2 text-white placeholder-white/80 focus:outline-none focus:border-coolYellow focus:placeholder-white/40 text-lg resize-none"
      ></textarea>
    </div>

    <!-- Schedule Meeting Button -->
    <div class="pt-4">
      <button 
        @click="scheduleMetering"
        class="bg-gray-700 cursor-pointer hover:bg-gray-600 text-white font-bold py-4 px-8 text-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
        type="button"
      >
        Agendar Reunión
      </button>
    </div>

  </div>
</template>

<style scoped>
/* Custom focus styles for form inputs */
input:focus, textarea:focus {
  outline: none;
}

/* Smooth transitions for inputs and placeholders */
input, textarea {
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

/* Placeholder transitions */
input::placeholder, textarea::placeholder {
  transition: color 0.3s ease-in-out;
}

/* Ensure textarea behaves like inputs on focus */
textarea:focus::placeholder {
  color: rgba(255, 255, 255, 0.4);
}
</style> 