<script>
import { RouterLink } from 'vue-router'
import XpsLogo from '@/assets/logos/xps-logo.svg'
import XpsLogoBlack from '@/assets/logos/xps-logo-black.svg'
import BestiariLogo from '@/assets/logos/logo-bestiari.svg'
import BestiariLogoDark from '@/assets/logos/logo-bestiari-dark.svg'
import IsoBestiari from '@/assets/img/logos/iso-bestiari.svg'
import UnderlineLink from '@/components/UnderlineLink.vue'

export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMobileMenuOpen: false,
      isScrolled: false // Track scroll state for all routes
    };
  },
  components:{
    XpsLogo,
    XpsLogoBlack,
    BestiariLogo,
    BestiariLogoDark,
    UnderlineLink,
    IsoBestiari
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    handleRouteClick(targetRoute) {
      // Scroll to top when navigating to a different route
      if (this.$route.path !== targetRoute) {
        this.$nextTick(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        })
      }
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
      // Apply scroll logic to ALL routes
      const heroSection = document.querySelector('section'); // First section
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // If scrolled past the hero section, change to white background
        this.isScrolled = scrollTop > heroHeight - 100; // 100px buffer
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
      // Apply white background when scrolled on ANY route
      if (this.isScrolled) {
        return 'bg-white shadow-md shadow-slate-200-50'; // White background with shadow when scrolled
      }
      
      // Return route-based background when at top
      return this.getHeaderBgClass(this.currentRouteName);
    },
    // Compute text color based on background
    textColorClass() {
      // Dark text when scrolled on any route
      if (this.isScrolled) {
        return 'text-gray-800'; // Dark text on white background
      }
      return 'text-white'; // White text on colored backgrounds
    },
    // Compute logo to use
    logoComponent() {
      // Dark logo when scrolled on any route
      if (this.isScrolled) {
        return IsoBestiari; // Black logo on white background
      }
      return BestiariLogo; // White logo on colored backgrounds
    },
    // Compute underline color based on background
    underlineColor() {
      // Dark underline when scrolled on any route
      if (this.isScrolled) {
        return '#374151'; // Dark underline on white background (gray-700)
      }
      return '#FFFFFF'; // White underline on colored backgrounds
    },
    // Compute header padding based on scroll state and mobile
    headerPaddingClass() {
      if (this.isScrolled) {
        return 'py-0'; // Smaller padding when scrolled
      }
      return 'py-2 lg:py-7'; // Minimal padding on mobile, original on desktop
    },
    // Compute logo size based on scroll state  
    logoSizeClass() {
      if (this.isScrolled) {
        return 'lg:h-7 h-10 p-2 lg:p-0'; // Smaller logo when scrolled (height-based)
      }
      return 'h-14'; // Original logo size when at top (height-based)
    }
  },
  watch: {
    '$route': {
      immediate: true,
      handler() {
        // Reset scroll state when changing routes
        this.isScrolled = false;
        
        // Check initial scroll position after route change
        this.$nextTick(() => {
          this.handleScroll();
        });
      }
    }
  },
  mounted() {
    // Add scroll event listener
    window.addEventListener('scroll', this.handleScroll);
    // Check initial scroll position
    this.handleScroll();
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
  <header :class="[
    finalHeaderBgClass, 
    textColorClass, 
    headerPaddingClass,
    'fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-50 2xl:px-90 transition-all duration-300 ease-in-out'
  ]">
    <nav class="container mx-auto flex justify-between items-center" :class="isScrolled ? '' : 'min-h-[3rem] lg:min-h-[4rem]'">
        <RouterLink to="/" class="transition-all duration-300 ease-in-out flex items-center" @click="handleRouteClick('/')">
          <component :is="logoComponent" :class="[logoSizeClass, 'object-contain']" />
        </RouterLink>

      <!-- Hamburger button - visible on lg screens and below -->
      <div class="lg:hidden">
        <button @click="toggleMobileMenu" :class="[textColorClass, 'focus:outline-none transition-colors duration-300']">
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
            text-classes="text-sm font-medium transition-colors duration-300"
          />
        </li>
        <li>
          <UnderlineLink 
            text="Nosotros" 
            to="/about"
            :text-color="textColorClass"
            :underline-color="underlineColor"
            :active-underline-color="underlineColor"
            text-classes="text-sm font-medium transition-colors duration-300"
          />
        </li>
        <li>
          <UnderlineLink 
            text="Servicios" 
            to="/services"
            :text-color="textColorClass"
            :underline-color="underlineColor"
            :active-underline-color="underlineColor"
            text-classes="text-sm font-medium transition-colors duration-300"
          />
        </li>
        <li>
          <UnderlineLink 
            text="Proyectos" 
            to="/projects"
            :text-color="textColorClass"
            :underline-color="underlineColor"
            :active-underline-color="underlineColor"
            text-classes="text-sm font-medium transition-colors duration-300"
          />
        </li>
        <li><RouterLink to="/contact" class="hover:text-gray-400 transition-all duration-300" @click="handleRouteClick('/contact')">
          <div :class="currentRouteName === 'contact' ? 'bg-white text-redAction  hover:scale-105 transition-all duration-300' : 'bg-redAction text-white hover:scale-105 transition-all duration-300'" class="px-6 py-2">
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
          <RouterLink to="/" @click="() => { toggleMobileMenu(); handleRouteClick('/'); }">
            <BestiariLogoDark class="" />
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
            <RouterLink to="/" @click="() => { toggleMobileMenu(); handleRouteClick('/'); }" class="flex justify-between items-center py-4 text-gray-700 hover:text-coolPurple w-full">
              <span class="text-lg font-medium">Inicio</span>
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            </RouterLink>
          </li>
          <li class="border-b border-gray-200">
            <RouterLink to="/about" @click="() => { toggleMobileMenu(); handleRouteClick('/about'); }" class="flex justify-between items-center py-4 text-gray-700 hover:text-coolPurple w-full">
              <span class="text-lg font-medium">Nosotros</span>
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            </RouterLink>
          </li>
          <li class="border-b border-gray-200">
            <RouterLink to="/services" @click="() => { toggleMobileMenu(); handleRouteClick('/services'); }" class="flex justify-between items-center py-4 text-gray-700 hover:text-coolPurple w-full">
              <span class="text-lg font-medium">Servicios</span>
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            </RouterLink>
          </li>
          <li class="border-b border-gray-200">
            <RouterLink to="/projects" @click="() => { toggleMobileMenu(); handleRouteClick('/projects'); }" class="flex justify-between items-center py-4 text-gray-700 hover:text-coolPurple w-full">
              <span class="text-lg font-medium">Proyectos</span>
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
            </RouterLink>
          </li>
        </ul>

        <!-- Call to Action Button at the bottom -->
        <div class="mt-auto pt-6">
          <RouterLink to="/contact" @click="() => { toggleMobileMenu(); handleRouteClick('/contact'); }" class="block w-full">
            <div class="bg-redAction text-white px-6 py-3 text-center rounded-md font-medium text-lg">
              Contáctanos
            </div>
          </RouterLink>
        </div>
      </div>
    </transition>
  </header>
</template>

