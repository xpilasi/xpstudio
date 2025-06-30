<script>
export default {
  name: 'UnderlineLink',
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    // Styling props
    textColor: {
      type: String,
      default: 'text-current'
    },
    underlineColor: {
      type: String,
      default: '#FF7949'
    },
    activeUnderlineColor: {
      type: String,
      default: '#FF7949'
    },
    // Animation props
    duration: {
      type: String,
      default: '300ms'
    },
    easing: {
      type: String,
      default: 'ease-out'
    },
    // Additional classes
    textClasses: {
      type: String,
      default: ''
    },
    // Underline height
    underlineHeight: {
      type: String,
      default: '2px'
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.to
    }
  },
  methods: {
    handleClick() {
      // Scroll to top when navigating to a new route
      if (this.$route.path !== this.to) {
        this.$nextTick(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        })
      }
    }
  }
}
</script>

<template>
  <router-link 
    :to="to" 
    :class="[textColor, textClasses, 'underline-link']"
    :style="{ 
      '--underline-color': underlineColor,
      '--active-underline-color': activeUnderlineColor,
      '--duration': duration,
      '--easing': easing,
      '--underline-height': underlineHeight
    }"
    @click="handleClick"
  >
    <span class="underline-text" :class="{ 'is-active': isActive }">
      {{ text }}
    </span>
  </router-link>
</template>

<style scoped>
.underline-link {
  position: relative;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}

.underline-text {
  position: relative;
  display: inline-block;
}

.underline-text::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: var(--underline-height);
  background-color: var(--underline-color);
  transition: width var(--duration) var(--easing);
}

/* Hover effect */
.underline-link:hover .underline-text::after {
  width: 100%;
}

/* Active route - always visible */
.underline-text.is-active::after {
  width: 100%;
  background-color: var(--active-underline-color);
}

/* Ensure active state overrides hover */
.underline-text.is-active::after {
  transition: none;
}
</style> 