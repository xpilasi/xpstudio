<script>
export default {
  name: 'BenefitsCard',
  props: {
    icon: {
      type: [String, Object],
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
    iconColor: {
      type: String,
      default: 'text-blue-500'
    },
    titleColor: {
      type: String,
      default: 'text-[#2D3748]'
    },
    descriptionColor: {
      type: String,
      default: 'text-gray-500'
    }
  }
}
</script>

<template>
  <div class="backdrop-blur-sm shadow-lg   bg-white/70  p-6 transition-all duration-300 ease-in-out h-full flex flex-col items-center text-center max-w-sm mx-auto">
    
    <!-- Icon Container -->
    <div class="mb-8 w-full ">
      <!-- SVG Icon -->
      <component 
        v-if="typeof icon === 'object'"
        :is="icon" 
        :class="[iconColor, 'w-16 h-16 lg:w-20 lg:h-20']"
      />
      <!-- String Icon (emoji or text) -->
      <span 
        v-else
        :class="[iconColor, 'text-6xl lg:text-7xl font-bold']"
      >
        {{ icon }}
      </span>
    </div>

    <!-- Title -->
    <h3 :class="[titleColor, ' mb-5 text-left leading-[32px] font-bold text-3xl lg:text-4xl font-[\'Poppins\'] ']">
      {{ title }}
    </h3>

    <!-- Description -->
    <p :class="[descriptionColor, 'text-left text-md leading-sm  font-light leading-[28px] font-[\'Poppins\']  max-w-xs']">
      {{ description }}
    </p>

  </div>
</template> 