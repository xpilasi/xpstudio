<script>
export default {
  name: 'CallToAction',
  props: {
    // Styling props
    bgColor: {
      type: String,
      default: 'bg-gray-700'
    },
    textColor: {
      type: String,
      default: 'text-white'
    },
    hoverBgColor: {
      type: String,
      default: 'hover:bg-gray-600'
    },
    // Content props
    text: {
      type: String,
      default: 'Botón de Acción'
    },
    // Size and layout props
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    // Functionality props
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit', 'reset'].includes(value)
    }
  },
  emits: ['click'],
  computed: {
    buttonClasses() {
      const baseClasses = 'cursor-pointer font-bold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2'
      
      // Size classes
      const sizeClasses = {
        small: 'py-2 px-4 text-sm',
        medium: 'py-4 px-8 text-xl',
        large: 'py-5 px-10 text-2xl'
      }
      
      // Width classes
      const widthClass = this.fullWidth ? 'w-full' : 'w-full sm:w-auto'
      
      // Disabled classes
      const disabledClasses = this.disabled ? 'opacity-50 cursor-not-allowed' : ''
      
      return `${baseClasses} ${this.bgColor} ${this.textColor} ${this.hoverBgColor} ${sizeClasses[this.size]} ${widthClass} ${disabledClasses}`.trim()
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled && !this.loading) {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<template>
  <button 
    :class="buttonClasses"
    :type="type"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <!-- Loading spinner -->
    <span v-if="loading" class="inline-flex items-center">
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Cargando...
    </span>
    
    <!-- Normal text -->
    <span v-else>
      {{ text }}
    </span>
  </button>
</template>

<style scoped>
/* Ensure smooth transitions */
button {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Disabled state styling */
button:disabled {
  transform: none !important;
}

/* Focus ring styling */
button:focus {
  ring-color: currentColor;
}
</style> 