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
  <div class="w-full max-w-[349px] h-auto min-h-[514px] lg:w-[349px] lg:h-[514px] bg-white  shadow-lg relative overflow-hidden flex flex-col p-6 pt-6 hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out mx-auto">
    <!-- Label Text -->
    <h3 class="font-bold text-[23px] leading-6 text-[#AB5CBB] mb-7 font-['Poppins']">
      {{ labelText }}
    </h3>
    
    <!-- Title Text -->
    <h2 class="font-bold text-3xl lg:text-4xl leading-[28px] text-[#3D3D3D] mb-6 max-w-[299px] font-['Poppins']">
      {{ titleText }}
    </h2>
    
    <!-- Description Text -->
    <p class="font-normal text-[18px] leading-[27px] text-[#3D3D3D] mb-auto max-w-[299px] font-['Poppins']">
      {{ descriptionText }}
    </p>
    
    <!-- Image -->
    <div class="absolute bottom-0 left-0 right-0 h-[143px] overflow-hidden">
      <img 
        :src="imageSrc" 
        :alt="imageAlt"
        class="w-full h-full object-cover object-center"
      />
    </div>
  </div>
</template>

 