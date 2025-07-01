<script>
export default {
  name: 'FeatureSection',
  props: {
    // Image props
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      default: 'Feature image'
    },
    
    // Text content props
    labelText: {
      type: String,
      default: ''
    },
    titleText: {
      type: String,
      required: true
    },
    descriptionText: {
      type: String,
      required: true
    },
    
    // Layout props
    imagePosition: {
      type: String,
      default: 'right', // 'left' or 'right'
      validator: (value) => ['left', 'right'].includes(value)
    },
    
    // Styling props
    labelColor: {
      type: String,
      default: 'text-coolPurple'
    },
    titleColor: {
      type: String,
      default: 'text-gray-700'
    },
    descriptionColor: {
      type: String,
      default: 'text-gray-700'
    },
    
    // Spacing props
    marginBottom: {
      type: String,
      default: 'mb-16 lg:mb-24'
    }
  },
  computed: {
    // Compute order classes based on image position
    contentOrderClass() {
      if (this.imagePosition === 'left') {
        return 'order-2'; // Content on right when image is on left
      }
      return 'order-2 lg:order-1'; // Content on left when image is on right
    },
    imageOrderClass() {
      if (this.imagePosition === 'left') {
        return 'order-1'; // Image on left
      }
      return 'order-1 lg:order-2'; // Image on right
    }
  }
}
</script>

<template>
  <!-- Feature Section -->
  <div :class="marginBottom">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      
      <!-- Content -->
      <div :class="contentOrderClass">
        <!-- Label (optional) -->
        <div v-if="labelText" class="mb-4 lg:mb-6">
          <span 
            :class="[labelColor, 'text-2xl sm:text-3xl lg:text-4xl font-bold']" 
            style="letter-spacing: -3%;"
          >
            {{ labelText }}
          </span>
        </div>
        
        <!-- Title -->
        <h3 
          :class="[titleColor, 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6']" 
          style="line-height: 0.89; letter-spacing: -3%;"
        >
          {{ titleText }}
        </h3>
        
        <!-- Description -->
        <p 
          :class="[descriptionColor, 'text-lg sm:text-xl lg:text-2xl xl:text-2xl font-normal leading-tight ']" 
          style="letter-spacing: -3%;"
        >
          {{ descriptionText }}
        </p>
      </div>

      <!-- Image -->
      <div :class="imageOrderClass">
        <img 
          :src="imageSrc" 
          :alt="imageAlt"
          class="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover "
        />
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Smooth transitions for hover effects */
.grid > div {
  transition: transform 0.3s ease;
}

.grid:hover > div {
  transform: translateY(-2px);
}

/* Ensure proper font rendering for large text */
h3 {
  font-feature-settings: "kern" 1;
}

/* Responsive image sizing */
img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.02);
}
</style> 