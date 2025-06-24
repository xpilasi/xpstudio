<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        nombre: '',
        apellido: '',
        email: '',
        prefijo: '',
        pais: '',
        telefono: '',
        empresa: '',
        proyecto: ''
      },
      isSubmitting: false
    }
  },
  methods: {
    async submitForm() {
      // Validación básica
      if (!this.formData.nombre || !this.formData.email || !this.formData.proyecto) {
        alert('Por favor, completa al menos el nombre, email y descripción del proyecto');
        return;
      }

      this.isSubmitting = true;
      
      try {
        // Simular API call - reemplazar con tu endpoint real
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Emit event with form data to parent component
        this.$emit('form-submitted', this.formData);
        
        // Reset form
        this.formData = {
          nombre: '',
          apellido: '',
          email: '',
          prefijo: '',
          pais: '',
          telefono: '',
          empresa: '',
          proyecto: ''
        };
        
        alert('¡Cotización enviada con éxito! Te contactaremos pronto.');
      } catch (error) {
        alert('Error al enviar la cotización. Por favor, inténtalo de nuevo.');
        this.$emit('form-error', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  },
  emits: ['form-submitted', 'form-error']
}
</script>

<template>
  <!-- Contact Form -->
  <div class="w-full max-w-lg mx-auto lg:max-w-none lg:px-36 py-10">
    <form @submit.prevent="submitForm" class="space-y-4 sm:space-y-6">
      
      <!-- Primera fila: Nombre y Apellido -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <input 
            v-model="formData.nombre"
            type="text" 
            class="w-full px-3 sm:px-4 py-3  bg-white focus:ring-2 focus:ring-coolPurple focus:border-transparent text-base  text-gray-800 placeholder-gray-400"
            placeholder="Nombre"
            required
          >
        </div>
        <div>
          <input 
            v-model="formData.apellido"
            type="text" 
            class="w-full px-3 sm:px-4 py-3  bg-white focus:ring-2 focus:ring-coolPurple focus:border-transparent text-base text-gray-800 placeholder-gray-400"
            placeholder="Apellido"
          >
        </div>
      </div>

      <!-- Email (ancho completo) -->
      <div>
        <input 
          v-model="formData.email"
          type="email" 
          class="w-full px-3 sm:px-4 py-3  bg-white focus:ring-2 focus:ring-coolPurple focus:border-transparent text-base  text-gray-800 placeholder-gray-400"
          placeholder="Email"
          required
        >
      </div>

      <!-- Segunda fila: Prefijo y Teléfono -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <input 
            v-model="formData.prefijo"
            type="text" 
            class="w-full px-3 sm:px-4 py-3  bg-white focus:ring-2 focus:ring-coolPurple focus:border-transparent text-base  text-gray-800 placeholder-gray-400"
            placeholder="Prefijo"
          >
        </div>
        <div>
          <input 
            v-model="formData.telefono"
            type="tel" 
            class="w-full px-3 sm:px-4 py-3  bg-white focus:ring-2 focus:ring-coolPurple focus:border-transparent text-base  text-gray-800 placeholder-gray-400"
            placeholder="Teléfono"
          >
        </div>
      </div>

      <!-- Tercera fila: País y Empresa -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <input 
            v-model="formData.pais"
            type="text" 
            class="w-full px-3 sm:px-4 py-3  bg-white focus:ring-2 focus:ring-coolPurple focus:border-transparent text-base  text-gray-800 placeholder-gray-400"
            placeholder="País"
          >
        </div>
        <div>
          <input 
            v-model="formData.empresa"
            type="text" 
            class="w-full px-3 sm:px-4 py-3  bg-white focus:ring-2 focus:ring-coolPurple focus:border-transparent text-base  text-gray-800 placeholder-gray-400"
            placeholder="Empresa"
          >
        </div>
      </div>

      <!-- Textarea para proyecto -->
      <div>
        <textarea 
          v-model="formData.proyecto"
          rows="6" 
          class="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white focus:ring-2 focus:ring-coolPurple focus:border-transparent resize-none text-base m:text-lg text-gray-800 placeholder-gray-400"
          placeholder="Mi proyecto es de tal manera.."
          required
        ></textarea>
      </div>

      <!-- Botón de envío -->
      <button 
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-coolOrange text-white py-3 sm:py-4 px-6 sm:px-8 font-medium text-lg sm:text-xl lg:text-2xl hover:cursor-pointer  duration-300 hover:bg-coolYellow   transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isSubmitting ? 'Enviando...' : 'Cotizar Proyecto' }}
      </button>
      
    </form>
  </div>
</template>

<style scoped>
/* Custom focus styles for form inputs */
input:focus, textarea:focus {
  outline: none;
}
</style> 