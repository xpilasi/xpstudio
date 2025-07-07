<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'LinkMenuMobileWidget',
  components: {
    RouterLink
  },
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  },
  emits: ['link-click'],
  methods: {
    handleClick() {
      this.$emit('link-click', this.to)
    }
  }
}
</script>

<template>
  <li class="border-b border-gray-200">
    <RouterLink 
      :to="to" 
      @click="handleClick" 
      class="flex justify-between items-center py-4 text-gray-700 hover:text-coolPurple w-full"
    >
      <span class="text-lg font-medium">{{ text }}</span>
      <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </RouterLink>
  </li>
</template> 