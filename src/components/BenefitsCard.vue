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
    iconBgColor: {
      type: String,
      default: 'bg-[#AB5CBB]'
    },
    titleColor: {
      type: String,
      default: 'text-[#3D3D3D]'
    },
    descriptionColor: {
      type: String,
      default: 'text-gray-600'
    }
  }
}
</script>

<template>
  <div class="bg-white shadow-lg p-6 lg:p-8 hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out h-full flex flex-col">
    
    <!-- Icon Container -->
    <div class="flex items-center justify-center mb-6">
      <div :class="[iconBgColor, 'w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center']">
        <!-- SVG Icon -->
        <component 
          v-if="typeof icon === 'object'"
          :is="icon" 
          class="w-8 h-8 lg:w-10 lg:h-10 text-white"
        />
        <!-- String Icon (emoji or text) -->
        <span 
          v-else
          class="text-2xl lg:text-3xl text-white font-bold"
        >
          {{ icon }}
        </span>
      </div>
    </div>

    <!-- Title -->
    <h3 :class="[titleColor, 'text-xl lg:text-2xl font-bold mb-4 text-center font-[\'Poppins\']']">
      {{ title }}
    </h3>

    <!-- Description -->
    <p :class="[descriptionColor, 'text-base lg:text-lg leading-relaxed text-center flex-grow font-[\'Poppins\']']">
      {{ description }}
    </p>

  </div>
</template> 