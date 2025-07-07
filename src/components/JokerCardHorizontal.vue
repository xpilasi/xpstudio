<script>
export default {
  name: 'JokerCardHorizontal',
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
  }
}
</script>

<template>
  <div class="w-full max-w-[716px] h-auto md:h-[165px] bg-white shadow-[0px_4px_19px_-2px_rgba(0,0,0,0.16)] relative overflow-hidden flex flex-col md:flex-row mx-auto group cursor-pointer">
    <!-- Contenido de texto -->
    <div class="flex flex-col justify-center px-4 py-4 md:px-9 md:py-6 flex-1 group-hover:opacity-0 transition-opacity duration-300">
      <!-- Label Text -->
      <h3 class="font-bold text-lg md:text-[23px] leading-[1.5em] text-[#AB5CBB] mb-1 font-['Poppins']">
        {{ labelText }}
      </h3>
      
      <!-- Title Text -->
      <h2 class="font-bold text-2xl md:text-[36px] leading-[0.78em] text-gray-600 max-w-[299px] font-['Poppins']">
        {{ titleText }}
      </h2>
      
      <!-- Description Text (oculto por defecto ya que no aparece en el diseño de Figma) -->
      <!-- <p v-if="descriptionText" class="font-light text-sm leading-sm text-gray-600 mt-2 max-w-[299px] font-['Poppins']">
        {{ descriptionText }}
      </p> -->
    </div>
    
    <!-- Imagen -->
    <div class="w-full h-[150px] md:w-[349px] md:h-[106px] md:my-auto md:mr-4 overflow-hidden rounded group-hover:opacity-0 transition-opacity duration-300">
      <img 
        :src="imageSrc" 
        :alt="imageAlt"
        class="w-full h-full object-cover object-center"
      />
    </div>

    <!-- Hover Overlay -->
    <div class="absolute inset-0 bg-[rgba(171,92,187,0.89)] backdrop-blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 md:px-9">
      <p class="text-white text-base md:text-[18px] font-medium leading-[1.5em] text-center font-['Poppins'] max-w-[655px]">
        {{ descriptionText }}
      </p>
    </div>
  </div>
</template>

 