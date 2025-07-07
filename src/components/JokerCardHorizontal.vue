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
  <div class="w-full px-5 max-w-[496px] h-auto md:h-[135px] bg-white shadow-lg relative overflow-hidden flex flex-col md:flex-row mx-auto group cursor-pointer">
    <!-- Contenido de texto -->
    <div class="flex flex-col justify-center   flex-1 group-hover:opacity-0 transition-opacity duration-300">
      <!-- Label Text -->
      <h3 class="font-bold text-xl  text-coolPurple  ">
        {{ labelText }}
      </h3>
      
      <!-- Title Text -->
      <h2 class="font-bold text-4xl leading-[0.78em] text-gray-600  ">
        {{ titleText }}
      </h2>
      
      
    </div>
    
    <!-- Imagen -->
    <div class="   overflow-hidden group-hover:opacity-0 transition-opacity duration-300">
      <img 
        :src="imageSrc" 
        :alt="imageAlt"
        class="w-full h-full object-cover object-right"
      />
    </div>

    <!-- Hover Overlay -->
    <div class="absolute bg-coolPurple inset-0 bg-coo backdrop-blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4 md:px-9">
      <p class="text-white text-base md:text-[18px] font-medium leading-[1.5em] text-center font-['Poppins'] max-w-[655px]">
        {{ descriptionText }}
      </p>
    </div>
  </div>
</template>

 