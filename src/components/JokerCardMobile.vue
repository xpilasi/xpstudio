<script>
import { Maximize2,Minimize2 } from 'lucide-vue-next'

export default {
  name: 'JokerCard',
  props: {
    labelText: {
      type: String,
      required: true
    },
    titleText: {
      type: String,
      required: true
    },
    descriptionText: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      default: 'Ilustración de la tarjeta'
    }
  },
  components: {
    Maximize2,
    Minimize2
  },
  data() {
    return {
      showOverlay: false
    }
  },
  methods: {
    toggleOverlay(event) {
      event.stopPropagation()
      this.showOverlay = !this.showOverlay
    }
  }
}
</script>

<template>
  <div class="w-full bg-white shadow-lg relative overflow-hidden flex flex-col p-6 transition-all duration-300 ease-in-out mx-auto">
    <!-- Icono de maximizar -->
    <div :class="{'absolute top-4 right-4 w-8 h-8 bg-coolPurple rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-colors duration-200 z-10': !showOverlay, 'absolute top-4 right-4 w-8 h-8 bg-white  rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition-colors duration-200 z-10': showOverlay}" @click="toggleOverlay">
      <Maximize2 v-if="!showOverlay" class="w-4 h-4 text-white" />
      <Minimize2 v-else class="w-4 h-4 text-coolPurple" />
    </div>

    <!-- Label Text -->
    <h3 class="font-bold text-[23px] leading-6 text-coolPurple mb-1 transition-opacity duration-300" :class="{ 'opacity-0': showOverlay }">
      {{ labelText }}
    </h3>
    
    <!-- Title Text -->
    <h2 class="font-bold text-3xl lg:text-4xl leading-[28px] text-gray-600 mb-5 transition-opacity duration-300" :class="{ 'opacity-0': showOverlay }">
      {{ titleText }}
    </h2>
    
    <!-- Description Text -->
    <!-- <p class="font-light text-md leading-sm text-gray-600 transition-opacity duration-300" :class="{ 'opacity-0': showOverlay }">
      {{ descriptionText }}
    </p> -->
    
    <!-- Image -->
    <div class="bottom-0 left-0 right-0 h-[200px] overflow-hidden transition-opacity duration-300" :class="{ 'opacity-0': showOverlay }">
      <img 
        :src="imageSrc" 
        :alt="imageAlt"
        class="w-full h-full object-cover object-center"
      />
    </div>

    <!-- Click Overlay -->
    <div class="absolute inset-0 bg-coolPurple bg-opacity-50 flex items-center justify-center p-6 transition-opacity duration-300" :class="{ 'opacity-100': showOverlay, 'opacity-0 pointer-events-none': !showOverlay }">
      <p class="text-white text-lg font-medium leading-relaxed text-center font-['Poppins']">
        {{ descriptionText }}
      </p>
      
     
    </div>
  </div>
</template>

 