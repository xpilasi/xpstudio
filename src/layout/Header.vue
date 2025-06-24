<script>
import { RouterLink } from 'vue-router'
import XpsLogo from '@/assets/logos/xps-logo.svg'
import XpsLogoBlack from '@/assets/logos/xps-logo-black.svg'
import UnderlineLink from '@/components/UnderlineLink.vue'

export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMobileMenuOpen: false,
      isScrolled: false // Track scroll state
    };
  },
  components:{
    XpsLogo,
    XpsLogoBlack,
    UnderlineLink
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    getHeaderBgClass(routeName) {
      switch (routeName) {
        case 'home': // Assuming your home route is named 'home'
          return 'bg-coolPurple';
        case 'about': // Assuming your about route is named 'about'
          return 'bg-coolYellow';
        case 'services': // Assuming your services route is named 'services'
          return 'bg-coolGreen';
        case 'projects': // Assuming your projects route is named 'projects'
          return 'bg-coolBlue';
        case 'contact': // Assuming your projects route is named 'projects'
          return 'bg-redAction';
        default:
          return 'bg-coolPurple'; // Fallback for other routes or if name is undefined
      }
    },
    handleScroll() {
      // Only apply scroll logic on home page
      if (this.$route?.name === 'home') {
        // Get the height of the first section (HeroSection)
        const heroSection = document.querySelector('section'); // First section
        if (heroSection) {
          const heroHeight = heroSection.offsetHeight;
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          // If scrolled past the hero section, change to white background
          this.isScrolled = scrollTop > heroHeight - 100; // 100px buffer
        }
      }
    }
  },
  computed: {
    // Get current route name
    currentRouteName() {
      return this.$route?.name || 'home';
    },
    // Compute the final header classes based on route and scroll state
    finalHeaderBgClass() {
      if (this.currentRouteName === 'home' && this.isScrolled) {
        return 'bg-white shadow-md shadow-slate-200-50'; // White background with shadow when scrolled on home
      }
      
      // Return route-based background immediately
      return this.getHeaderBgClass(this.currentRouteName);
    },
    // Compute text color based on background
    textColorClass() {
      if (this.currentRouteName === 'home' && this.isScrolled) {
        return 'text-gray-800'; // Dark text on white background
      }
      return 'text-white'; // White text on colored backgrounds
    },
    // Compute logo to use
    logoComponent() {
      if (this.currentRouteName === 'home' && this.isScrolled) {
        return XpsLogoBlack; // Black logo on white background
      }
      return XpsLogo; // White logo on colored backgrounds
    },
    // Compute underline color based on background
    underlineColor() {
      if (this.currentRouteName === 'home' && this.isScrolled) {
        return '#374151'; // Dark underline on white background (gray-700)
      }
      return '#FFFFFF'; // White underline on colored backgrounds
    }
  },
  watch: {
    '$route': {
      immediate: true,
      handler() {
        // Reset scroll state when changing routes (not home)
        if (this.$route?.name !== 'home') {
          this.isScrolled = false;
        }
      }
    }
  },
  mounted() {
    // Add scroll event listener
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // Remove scroll event listener
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
/* Add any header-specific styles here if needed */
</style>

<template>
  <header :class="[finalHeaderBgClass, textColorClass, 'fixed top-0 left-0 right-0 z-40 py-7 px-4 sm:px-6 lg:px-90']">
    <nav class="container mx-auto flex justify-between items-center">
        <RouterLink to="/">
          <component :is="logoComponent" class="w-20" />
        </RouterLink>

      <!-- Hamburger button - visible on lg screens and below -->
      <div class="lg:hidden">
        <button @click="toggleMobileMenu" :class="[textColorClass, 'focus:outline-none']">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Desktop Menu - hidden on lg screens and below -->
      <ul class="hidden lg:flex flex-row items-center gap-10 text-sm font-medium">
        <li>
          <UnderlineLink 
            text="Inicio" 
            to="/"
            :text-color="textColorClass"
            :underline-color="underlineColor"
            :active-underline-color="underlineColor"
            text-classes="text-sm font-medium"
          />
        </li>
        <li>
          <UnderlineLink 
            text="Nosotros" 
            to="/about"
            :text-color="textColorClass"
            :underline-color="underlineColor"
            :active-underline-color="underlineColor"
            text-classes="text-sm font-medium"
          />
        </li>
        <li>
          <UnderlineLink 
            text="Servicios" 
            to="/services"
            :text-color="textColorClass"
            :underline-color="underlineColor"
            :active-underline-color="underlineColor"
            text-classes="text-sm font-medium"
          />
        </li>
        <li>
          <UnderlineLink 
            text="Proyectos" 
            to="/projects"
            :text-color="textColorClass"
            :underline-color="underlineColor"
            :active-underline-color="underlineColor"
            text-classes="text-sm font-medium"
          />
        </li>
        <li><RouterLink to="/contact" class="hover:text-gray-400">
          <div class="bg-redAction text-white px-6 py-2">
            <span class="text-sm font-medium">Contáctanos</span>
          </div>
        </RouterLink></li>
      </ul>
    </nav>

    <!-- Mobile Menu Full Overlay -->
    <transition
      enter-active-class="transition ease-out duration-300 transform"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div v-if="isMobileMenuOpen" class="lg:hidden fixed inset-0 bg-white z-50 flex flex-col p-6">
        <!-- Top Bar: Logo and Close Button -->
        <div class="flex justify-between items-center mb-8">
          <RouterLink to="/">
            <XpsLogoBlack class="w-20" />
          </RouterLink>
          <button @click="toggleMobileMenu" class="text-redAction focus:outline-none">
            <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Navigation Links -->
        <ul class="flex flex-col flex-grow overflow-y-auto">
          <li class="border-b border-gray-200">
            <RouterLink to="/" @click="toggleMobileMenu" class="flex justify-between items-center py-4 text-gray-700 hover:text-coolPurple w-full">
              <span class="text-lg font-medium">Inicio</span>
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            </RouterLink>
          </li>
          <li class="border-b border-gray-200">
            <RouterLink to="/about" @click="toggleMobileMenu" class="flex justify-between items-center py-4 text-gray-700 hover:text-coolPurple w-full">
              <span class="text-lg font-medium">Nosotros</span>
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            </RouterLink>
          </li>
          <li class="border-b border-gray-200">
            <RouterLink to="/services" @click="toggleMobileMenu" class="flex justify-between items-center py-4 text-gray-700 hover:text-coolPurple w-full">
              <span class="text-lg font-medium">Servicios</span>
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            </RouterLink>
          </li>
          <li class="border-b border-gray-200">
            <RouterLink to="/projects" @click="toggleMobileMenu" class="flex justify-between items-center py-4 text-gray-700 hover:text-coolPurple w-full">
              <span class="text-lg font-medium">Proyectos</span>
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            </RouterLink>
          </li>
        </ul>

        <!-- Call to Action Button at the bottom -->
        <div class="mt-auto pt-6">
          <RouterLink to="/contact" @click="toggleMobileMenu" class="block w-full">
            <div class="bg-redAction text-white px-6 py-3 text-center rounded-md font-medium text-lg">
              Contáctanos
            </div>
          </RouterLink>
        </div>
      </div>
    </transition>
  </header>
</template>

