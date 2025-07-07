<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'text-coolYellow'
    },
    size: {
      type: String,
      default: 'text-3xl sm:text-4xl lg:text-5xl',
      validator: value => [
        'text-4xl sm:text-5xl lg:text-6xl',
        'text-5xl sm:text-6xl lg:text-7xl', 
        'text-6xl sm:text-7xl lg:text-8xl',
        'text-7xl sm:text-8xl lg:text-9xl'
      ].includes(value)
    },
   
    alignment: {
      type: String,
      default: 'text-left',
      validator: value => ['text-left', 'text-center', 'text-right'].includes(value)
    }
  }
}
</script>

<template>
  <div class="py-8">
    <h2 :class="`${size} font-extrabold ${color}  ${alignment} bg-green-500`">
      {{ title }}
    </h2>
  </div>
</template> 