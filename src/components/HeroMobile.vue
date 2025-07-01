<script>
export default {
  name: 'HeroMobile',
  props: {
    // Image props
    imageUrl: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      default: 'Hero Image'
    },
    // Decorative elements colors
    primaryDecorColor: {
      type: String,
      default: 'bg-coolYellow'
    },
    secondaryDecorColor: {
      type: String,
      default: 'bg-coolOrange'
    },
    // Glow effect colors
    glowFromColor: {
      type: String,
      default: 'from-coolYellow/20'
    },
    glowToColor: {
      type: String,
      default: 'to-coolOrange/20'
    },
    // Spacing and sizing
    containerPadding: {
      type: String,
      default: 'py-8 md:py-12'
    },
    imageSize: {
      type: String,
      default: 'h-60 sm:h-56 md:h-64'
    },
    // Animation and interaction
    enableHover: {
      type: Boolean,
      default: true
    },
    // Custom classes
    containerClasses: {
      type: String,
      default: ''
    }
  },
  computed: {
    finalContainerClasses() {
      return `lg:hidden flex justify-center items-center ${this.containerPadding} ${this.containerClasses}`.trim()
    },
    imageClasses() {
      const baseClasses = `${this.imageSize} w-auto object-contain transition-all duration-500 drop-shadow-2xl`
      const hoverClasses = this.enableHover ? 'hover:scale-110 hover:rotate-2' : ''
      return `${baseClasses} ${hoverClasses}`.trim()
    },
    glowClasses() {
      return `absolute inset-0 bg-gradient-to-tr ${this.glowFromColor} ${this.glowToColor} rounded-lg blur-xl -z-10`
    }
  }
}
</script>

<template>
  <!-- Mobile and Tablet Hero Image -->
  <div :class="finalContainerClasses">
    <div class="relative">
      <!-- Decorative elements -->
      <div :class="`absolute -top-4 -left-4 w-8 h-8 ${primaryDecorColor} rounded-full opacity-70 animate-pulse`"></div>
      <div :class="`absolute -bottom-6 -right-6 w-12 h-12 ${secondaryDecorColor} rounded-full opacity-60 animate-pulse delay-300`"></div>
      
      <!-- Main image -->
      <img 
        :src="imageUrl" 
        :alt="imageAlt"
        :class="imageClasses"
      >
      
      <!-- Subtle glow effect -->
      <div :class="glowClasses"></div>
    </div>
  </div>
</template>

<style scoped>
/* Animation delays for decorative elements */
.delay-300 {
  animation-delay: 300ms;
}
</style> 