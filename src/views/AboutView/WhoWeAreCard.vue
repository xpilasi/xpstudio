<script>
export default {
  name: 'WhoWeAreCard',
  props: {
    name: {
      type: String,
      required: true
    },
    titles: {
      type: Array,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    isReversed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="team-member-container w-full py-16 lg:py-20">
    <div :class="[
      'flex flex-col lg:flex-row items-center gap-8 lg:gap-16',
      isReversed ? 'lg:flex-row-reverse' : ''
    ]">
      <!-- Photo -->
      <div class="flex-shrink-0">
        <div class="w-80 h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden bg-gray-200">
          <img 
            :src="image" 
            :alt="name"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      
      <!-- Content -->
      <div :class="['flex-1 text-center lg:text-left', isReversed ? 'lg:text-right' : '']">
        <!-- Large Name -->
        <h2 class="text-8xl lg:text-9xl xl:text-[10rem] font-black text-[#FFC600] mb-6 lg:mb-8 leading-none tracking-tight">
          {{ name }}
        </h2>
        
        <!-- Titles -->
        <div class="mb-8 lg:mb-12">
          <h3 
            v-for="(title, index) in titles" 
            :key="index"
            class="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#E61655] mb-2"
          >
            {{ title }}
          </h3>
        </div>
        
        <!-- Description -->
        <p class="text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed max-w-2xl font-medium">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team-member-container {
  min-height: 50vh;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
  .team-member-container h2 {
    font-size: 5rem;
  }
}

@media (max-width: 767px) {
  .team-member-container h2 {
    font-size: 4rem;
  }
}
</style>
