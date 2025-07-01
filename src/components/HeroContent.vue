<script>
export default {
  name: 'HeroContent',
  props: {
    // Text content props
    preTitle: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    // Styling props
    preTitleColor: {
      type: String,
      default: 'text-white'
    },
    titleColor: {
      type: String,
      default: 'text-coolOrange'
    },
    descriptionColor: {
      type: String,
      default: 'text-white'
    },
    // Typography props
    preTitleSize: {
      type: String,
      default: 'text-2xl sm:text-3xl lg:text-3xl xl:text-3xl'
    },
    titleSize: {
      type: String,
      default: 'text-5xl sm:text-5xl md:text-6xl lg:text-7xl'
    },
    descriptionSize: {
      type: String,
      default: 'text-xl sm:text-2xl lg:text-3xl xl:text-3xl'
    },
    // Weight props
    preTitleWeight: {
      type: String,
      default: 'font-bold'
    },
    titleWeight: {
      type: String,
      default: 'font-bold'
    },
    descriptionWeight: {
      type: String,
      default: 'font-medium'
    },
    // Alignment props
    textAlignment: {
      type: String,
      default: 'text-center lg:text-left'
    },
    // Spacing props
    containerSpacing: {
      type: String,
      default: 'space-y-6 sm:space-y-8'
    }
  }
}
</script>

<template>
  <div :class="`${containerSpacing} flex flex-col justify-center`">
    <!-- Pre-title -->
    <h3 :class="`${preTitleSize} ${preTitleWeight} ${preTitleColor} leading-tight ${textAlignment}`">
      {{ preTitle }}
    </h3>
    
    <!-- Main title -->
    <h1 
      :class="`${titleSize} ${titleWeight} ${titleColor} leading-tight ${textAlignment}`" 
      style="line-height: 0.95; letter-spacing: -3%;"
    >
      {{ title }}
    </h1>
    
    <!-- Description -->
    <h2 :class="`hidden lg:block ${descriptionSize} ${descriptionWeight} ${descriptionColor} leading-relaxed ${textAlignment}`">
      {{ description }}
    </h2>
  </div>
</template>

<style scoped>
/* Ensure proper font rendering for large text */
h1 {
  font-feature-settings: "kern" 1;
}
</style> 