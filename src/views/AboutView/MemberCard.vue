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
    },
    linkedinUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showLinkedInOverlay: false
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
  },
  methods: {
    showOverlay() {
      this.showLinkedInOverlay = true
    },
    hideOverlay() {
      this.showLinkedInOverlay = false
    },
    openLinkedIn() {
      if (this.linkedinUrl) {
        window.open(this.linkedinUrl, '_blank')
      }
    }
  }
}
</script>

<template>
  <!-- Card con layout responsive -->
  <div 
    class="w-full bg-white hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden relative"
    @mouseenter="showOverlay"
    @mouseleave="hideOverlay"
  >
    
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
    <div :class="['hidden lg:flex items-center h-full', flexDirection] ">
      
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
          <div class="text-gray-700 font-normal text-base xl:text-lg 2xl:text-xl leading-relaxed mt-4">
            {{ description }}
          </div>
        </div>
      </div>
      
    </div>

    <!-- LinkedIn Overlay -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="showLinkedInOverlay"
        class="absolute inset-0 flex items-center justify-center z-10 cursor-pointer transition-all duration-1000 ease-in-out"
        style="background-color: rgba(255, 198, 0, 0.7)"
      >
        <!-- LinkedIn Logo -->
        <div 
          :class="[
            'text-white transition-transform duration-200 cursor-pointer',
            linkedinUrl ? 'hover:scale-110 cursor-pointer' : ''
          ]"
          @click="openLinkedIn"
        >
          <svg 
            class="w-16 h-16 lg:w-20 lg:h-20 " 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <p class="text-center mt-2 font-semibold text-sm lg:text-base">
            {{ linkedinUrl ? '' : '' }}
          </p>
        </div>
      </div>
    </transition>
    
  </div>
</template> 