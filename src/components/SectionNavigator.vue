<script>
export default {
  name: 'SectionNavigator',
  props: {
    sections: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      currentSectionIndex: 0,
      isScrolling: false
    }
  },
  computed: {
    hasNextSection() {
      return this.currentSectionIndex < this.sections.length - 1
    },
    hasPrevSection() {
      return this.currentSectionIndex > 0
    },
    currentSection() {
      return this.sections[this.currentSectionIndex]
    },
    isInFirstSection() {
      return this.currentSectionIndex === 0
    },
    navigationColor() {
      return this.isInFirstSection ? 'text-white' : 'text-coolPurple'
    },
    indicatorBorderColor() {
      return this.isInFirstSection ? 'border-white hover:border-redAction' : 'border-coolPurple hover:border-redAction'
    },
    buttonBackgroundColor() {
      return this.isInFirstSection ? 'bg-white/10' : 'bg-coolPurple/10'
    }
  },
  mounted() {
    this.setupScrollListener()
    this.updateCurrentSection()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    setupScrollListener() {
      window.addEventListener('scroll', this.handleScroll, { passive: true })
    },
    handleScroll() {
      if (this.isScrolling) return
      
      // Detectar en qué sección estamos actualmente
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      for (let i = 0; i < this.sections.length; i++) {
        const element = document.getElementById(this.sections[i].id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            this.currentSectionIndex = i
            break
          }
        }
      }
    },
    updateCurrentSection() {
      // Detectar sección inicial al cargar
      this.handleScroll()
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        this.isScrolling = true
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        
        // Reset scrolling flag after animation
        setTimeout(() => {
          this.isScrolling = false
        }, 1000)
      }
    },
    goToNextSection() {
      if (this.hasNextSection) {
        this.currentSectionIndex++
        this.scrollToSection(this.sections[this.currentSectionIndex].id)
      }
    },
    goToPrevSection() {
      if (this.hasPrevSection) {
        this.currentSectionIndex--
        this.scrollToSection(this.sections[this.currentSectionIndex].id)
      }
    },
    goToSpecificSection(index) {
      if (index >= 0 && index < this.sections.length) {
        this.currentSectionIndex = index
        this.scrollToSection(this.sections[index].id)
      }
    }
  }
}
</script>

<template>
  <!-- Section Navigator -->
  <div class="fixed  right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
    
    <!-- Section Indicators -->
    <div class="flex flex-col space-y-2">
      <button
        v-for="(section, index) in sections"
        :key="section.id"
        @click="goToSpecificSection(index)"
        :class="[
          'w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125 cursor-pointer',
          index === currentSectionIndex 
            ? 'bg-redAction border-redAction' 
            : `bg-transparent ${indicatorBorderColor}`
        ]"
        :title="section.name"
      ></button>
    </div>

    <!-- Navigation Buttons -->
    <div class="flex flex-col space-y-2 mt-6">
      <!-- Previous Section Button -->
      <button
        @click="goToPrevSection"
        :disabled="!hasPrevSection"
        :class="[
          'p-3 rounded-full transition-all duration-300 w-12 h-12 flex items-center justify-center',
          hasPrevSection 
            ? `${buttonBackgroundColor} backdrop-blur-sm cursor-pointer ${navigationColor} hover:bg-redAction hover:text-white hover:scale-110 shadow-lg`
            : 'opacity-0 cursor-not-allowed'
        ]"
        :title="hasPrevSection ? 'Sección anterior' : ''"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
        </svg>
      </button>

      <!-- Next Section Button -->
      <button
        @click="goToNextSection"
        :disabled="!hasNextSection"
        :class="[
          'p-3 rounded-full transition-all duration-300 w-12 h-12 flex items-center justify-center',
          hasNextSection 
            ? `${buttonBackgroundColor} backdrop-blur-sm cursor-pointer ${navigationColor} hover:bg-redAction hover:text-white hover:scale-110 shadow-lg`
            : 'opacity-0 cursor-not-allowed'
        ]"
        :title="hasNextSection ? 'Siguiente sección' : ''"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </div>

    <!-- Section Info -->
    <!-- <div class="mt-4 text-center">
      <div :class="`${buttonBackgroundColor} backdrop-blur-sm ${navigationColor} px-3 py-1 rounded-full text-sm font-medium`">
        {{ currentSectionIndex + 1 }} / {{ sections.length }}
      </div>
    </div> -->

  </div>
</template>

<style scoped>
/* Custom styles for smooth animations */
button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button:not(:disabled):hover {
  transform: scale(1.1);
}

button:not(:disabled):active {
  transform: scale(0.95);
}

button:disabled {
  pointer-events: none;
}

/* Hide on mobile for better UX */
@media (max-width: 768px) {
  .fixed {
    display: none;
  }
}
</style> 