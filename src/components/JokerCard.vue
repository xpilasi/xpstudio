<script>
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
  }
}
</script>

<template>
  <div class="w-full max-w-[349px] h-auto  lg:w-[349px] lg:h-[470px] bg-white  shadow-lg relative overflow-hidden flex flex-col p-6 pt-6 hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out mx-auto">
    <!-- Label Text -->
    <h3 class="font-bold text-[23px] leading-6 text-[#AB5CBB] mb-7 font-['Poppins']">
      {{ labelText }}
    </h3>
    
    <!-- Title Text -->
    <h2 class="font-bold text-3xl lg:text-4xl leading-[28px] text-gray-600 mb-6 max-w-[299px] font-['Poppins']">
      {{ titleText }}
    </h2>
    
    <!-- Description Text -->
    <p class="font-light text-md leading-sm text-gray-600  max-w-[299px] font-['Poppins']">
      {{ descriptionText }}
    </p>
    
    <!-- Image -->
    <div class="absolute bottom-0 left-0 right-0 h-[170px] overflow-hidden">
      <img 
        :src="imageSrc" 
        :alt="imageAlt"
        class="w-full h-full object-cover object-center"
      />
    </div>
  </div>
</template>

 