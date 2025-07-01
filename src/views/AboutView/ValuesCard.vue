<script>
export default {
  name: 'ValuesCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: [Object, Function],
      required: true
    }
  }
}
</script>

<template>
  <!-- Full-width background -->
  <div class="flex flex-col py-2 justify-center items-center w-screen min-h-[100px] md:min-h-[200px] lg:min-h-[100px] bg-coolYellow  hover:shadow-2xl transition-all duration-300 ease-in-out -mx-4 sm:-mx-6 lg:-mx-50 2xl:-mx-90 xl:-mx-[calc(50vw-50%)]">
    <!-- Content container with margins -->
    <div class=" flex flex-row justify-center  items-center px-4 sm:px-6 lg:px-30 2xl:px-0 max-w-7xl py-6 lg:py-3  ">
      <div class="flex flex-row items-start gap-2 lg:gap-8 hover:transform hover:-translate-y-1 transition-transform duration-300">
        
        <!-- Icon -->
        <div class=" ">
          <div class="w-20 h-20 lg:w-24 lg:h-24 flex flex-col items-center justify-center">
            <component 
              :is="icon" 
              class="h-full w-full text-redAction"
            />
          </div>
        </div>
        
        <!-- Content -->
        <div class="flex flex-col gap-0 justify-center  ">
          <!-- Title -->
          <h3 class="text-black font-bold text-xl sm:text-2xl lg:text-3xl    leading-tight">
            {{ title }}
          </h3>
          
          <!-- Description -->
          <p class="text-black font-medium text-base sm:text-lg lg:text-lg  leading-relaxed">
            {{ description }}
          </p>
        </div>
        
      </div>
    </div>
  </div>
</template> 