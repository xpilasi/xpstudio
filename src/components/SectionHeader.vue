<script>
export default {
  name: 'SectionHeader',
  props: {
    // Required props
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    // Optional props with defaults
    sectionId: {
      type: String,
      default: 'section-header'
    },
    titleColor: {
      type: String,
      default: 'text-gray-600'
    },
    subtitleColor: {
      type: String,
      default: 'text-coolPurple'
    },
    descriptionColor: {
      type: String,
      default: 'text-gray-600'
    },
    alignment: {
      type: String,
      default: 'center', // 'center', 'left', 'right'
      validator: value => ['center', 'left', 'right'].includes(value)
    },
    isFullScreen: {
      type: Boolean,
      default: true
    },
    marginBottom: {
      type: String,
      default: 'mb-16 lg:mb-20'
    }
  },
  computed: {
    alignmentClasses() {
      const alignments = {
        center: 'text-center',
        left: 'text-left',
        right: 'text-right'
      }
      
      if (this.alignment === 'center') {
        return 'text-center lg:text-left'
      }
      
      return alignments[this.alignment] || 'text-center lg:text-left'
    },
    containerClasses() {
      let classes = [this.alignmentClasses, this.marginBottom]
      
      if (this.isFullScreen) {
        classes.push('min-h-screen flex flex-col justify-center')
      }
      
      return classes.join(' ')
    }
  }
}
</script>

<template>
  <div :id="sectionId" :class="containerClasses">
    <div class="flex flex-col items-center text-left p-10 shadow-lg  ">
    <h3 :class="`w-full text-xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 ${titleColor}`">
      {{ title }}
    </h3>
    
    <h1 :class="`w-full text-2xl sm:text-3xl xl:text-4xl font-bold mb-8 lg:mb-5 ${subtitleColor}`" style="line-height: 0.95; letter-spacing: -3%;">
      {{ subtitle }}
    </h1>
    
    <p :class="`w-full text-md sm:text-xl font-light  lg:leading-relaxed max-w-6xl ${descriptionColor}`">
      {{ description }}
    </p>
    </div>
  </div>
</template>

<style scoped>
/* Additional custom styles if needed */
</style> 