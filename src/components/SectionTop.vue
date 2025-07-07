<script>
export default {
  name: 'SectionTop',
  props: {
    // Contenido de texto
    header: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    
    // Props para colores
    headerColor: {
      type: String,
      default: 'text-[#3D3D3D]'
    },
    titleColor: {
      type: String,
      default: 'text-[#FFC600]'
    },
    subtitleColor: {
      type: String,
      default: 'text-[#7B7979]'
    },
    
    // Props para alineación
    textAlignment: {
      type: String,
      default: 'center',
      validator: value => ['left', 'center', 'right'].includes(value)
    },
    
    // Props opcionales para personalización adicional
    maxWidth: {
      type: String,
      default: 'max-w-7xl'
    },
    spacing: {
      type: String,
      default: 'space-y-2'
    }
  },
  computed: {
    alignmentClasses() {
      const alignments = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
      }
      return alignments[this.textAlignment]
    }
  }
}
</script>

<template>
  <div :class="[maxWidth, 'mx-auto  sm:px-6 lg:px-8 ']">
    <div :class="[spacing, alignmentClasses]">
      
      <!-- Header Text -->
      
      
      
      
      <!-- Title Text -->
      <h2 :class="[
        titleColor,
        alignmentClasses,
        'font-bold text-2xl lg:text-[27px] leading-6'
      ]">
        {{ title }}
      </h2>
      <h3 :class="[
        headerColor,
        alignmentClasses,
        'font-bold text-3xl lg:text-4xl lg:mb-4 leading-6 text-start lg:text-center '
      ]">
        {{ header }}
      </h3>
      
      <!-- Subtitle Text -->
      <p :class="[
        subtitleColor,
        alignmentClasses,
        'font-light text-md lg:text-lg lg:leading-8 text-start lg:text-center'
      ]">
        {{ subtitle }}
      </p>
      
    </div>
  </div>
</template> 