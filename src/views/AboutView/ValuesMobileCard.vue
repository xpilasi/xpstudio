<script>
export default {
  name: 'ValuesMobileCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: [Object, Function],
      required: true
    }
  }
}
</script>

<template>
  <!-- Mobile optimized values card -->
  <div class="w-full max-w-sm mx-auto bg-white rounded-2xl  transition-all duration-300 p-8 flex flex-col items-center text-center space-y-6">
    
    <!-- Icon Container -->
    <div class="w-20 h-20 bg-coolYellow rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
      <component 
        :is="icon" 
        class="w-12 h-12 text-redAction"
      />
    </div>
    
    <!-- Content -->
    <div class="space-y-4">
      <!-- Title -->
      <h3 class="text-gray-800 font-bold text-xl leading-tight">
        {{ title }}
      </h3>
      
      <!-- Description -->
      <p class="text-gray-600 font-medium text-base leading-relaxed">
        {{ description }}
      </p>
    </div>
    
    <!-- Decorative element -->
    <div class="w-12 h-1 bg-gradient-to-r from-coolYellow to-redAction rounded-full"></div>
    
  </div>
</template>

<style scoped>
/* Subtle hover effects */
.hover\:scale-110:hover {
  transform: scale(1.1);
}

/* Smooth transitions */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style> 