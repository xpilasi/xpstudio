<script>

export default {
  name: 'MemberCard',
  props: {
    memberName: {
      type: String,
      required: true
    },
    memberRole1: {
      type: String,
      required: true
    },
    memberRole2: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    align: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value)
      }
    }
  },
  computed: {
    // Orden de los elementos flex para desktop/tablet
    flexDirection() {
      return this.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
    },
    // Alineación del texto
    textAlignClass() {
      return this.align === 'right' ? 'lg:text-right text-center' : 'lg:text-left text-center'
    }
  }
}
</script>

<template>
  <!-- Card con layout responsive -->
  <div class="w-full bg-white hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden">
    
    <!-- Mobile Layout (vertical) -->
    <div class="flex flex-col lg:hidden py-6 px-4 sm:px-6 space-y-4">
      
      <!-- Photo + Name Section -->
      <div class="flex flex-col items-center space-y-3">
        <div class="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] overflow-hidden rounded-lg">
          <img 
            :src="imageUrl" 
            :alt="memberName"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="text-coolYellow font-bold text-4xl sm:text-5xl text-center">
          {{ memberName }}
        </div>
      </div>
      
      <!-- Content -->
      <div class="text-center space-y-2">
        <div class="font-bold text-lg sm:text-xl text-redAction leading-tight">
          {{ memberRole1 }}
        </div>
        <div class="font-bold text-lg sm:text-xl text-redAction leading-tight">
          {{ memberRole2 }}
        </div>
        <div class="text-gray-700 font-medium text-sm sm:text-base leading-relaxed mt-3">
          {{ description }}
        </div>
      </div>
      
    </div>

    <!-- Tablet/Desktop Layout (horizontal) -->
    <div :class="['hidden lg:flex items-center h-full px-4 sm:px-6 lg:px-8 py-4', flexDirection]">
      
      <!-- Photo -->
      <div class="flex-shrink-0">
        <div class="w-[180px] h-[180px] xl:w-[200px] xl:h-[220px] overflow-hidden">
          <img 
            :src="imageUrl" 
            :alt="memberName"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <!-- Texto rotado (nombre grande) -->
      <div class="flex-shrink-0 flex items-center justify-center w-16 xl:w-20">
        <div class="text-coolYellow font-bold text-6xl xl:text-7xl text-center rotate-270 whitespace-nowrap">
          {{ memberName }}
        </div>
      </div>
      
      <!-- Contenido -->
      <div class="flex-1 px-6 xl:px-8">
        <div :class="['flex flex-col space-y-1', textAlignClass]">
          <div class="font-bold text-xl xl:text-2xl 2xl:text-3xl text-redAction leading-tight">
            {{ memberRole1 }}
          </div>
          <div class="font-bold text-xl xl:text-2xl 2xl:text-3xl text-redAction leading-tight">
            {{ memberRole2 }}
          </div>
          <div class="text-gray-700 font-medium text-base xl:text-lg 2xl:text-xl leading-relaxed mt-4">
            {{ description }}
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</template> 