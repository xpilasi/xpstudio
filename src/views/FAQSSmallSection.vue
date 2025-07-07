<script>
import ChevronDownIcon from 'heroicons/24/outline/chevron-down.svg?component'
import ChevronRightIcon from 'heroicons/24/outline/chevron-right.svg?component'
import SectionTitle from '@/components/SectionTitle.vue'
import CallToAction from '@/components/buttons/CallToActionButton.vue'
import { RouterLink } from 'vue-router'
import SectionTop from '@/components/SectionTop.vue'
import { X } from 'lucide-vue-next'

export default {
  name: 'FAQSSmallSection',
  components: {
    ChevronDownIcon,
    ChevronRightIcon,
    SectionTitle,
    CallToAction, 
    RouterLink,
    SectionTop,
    X
  },
  data() {
    return {
      openQuestion: null,
      modalOpen: false,
      selectedFaq: null,
      isMobile: false,
      faqs: [
        {
          id: 1,
          question: '¿Cuánto tiempo toma desarrollar un proyecto web?',
          answer: 'El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar entre 2-4 semanas, mientras que aplicaciones más complejas pueden requerir de 8-12 semanas. Siempre proporcionamos un cronograma detallado antes de comenzar.'
        },
        {
          id: 2,
          question: '¿Ofrecen soporte y mantenimiento después del lanzamiento?',
          answer: 'Sí, ofrecemos planes de soporte y mantenimiento continuos. Esto incluye actualizaciones de seguridad, respaldos regulares, optimización de rendimiento y soporte técnico. Nuestros planes se adaptan a las necesidades específicas de cada cliente.'
        },
        {
          id: 3,
          question: '¿Trabajan con tecnologías específicas?',
          answer: 'Nos especializamos en tecnologías modernas como Vue.js, React, Flutter y Firebase. También trabajamos con WordPress, Node.js y bases de datos SQL y NoSQL. Elegimos la tecnología más adecuada según los requisitos de cada proyecto.'
        }
      ]
    }
  },
  mounted() {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768
    },
    toggleQuestion(questionId) {
      if (this.isMobile) {
        // En móvil, abrir modal
        this.selectedFaq = this.faqs.find(faq => faq.id === questionId)
        this.modalOpen = true
      } else {
        // En desktop, usar acordeón
        if (this.openQuestion === questionId) {
          this.openQuestion = null
        } else {
          this.openQuestion = questionId
        }
      }
    },
    closeModal() {
      this.modalOpen = false
      this.selectedFaq = null
    },
    isOpen(questionId) {
      return this.openQuestion === questionId
    },
    goToContact() {
      this.$router.push('/contact')
    }
  }
}
</script>

<template>
  <section class="bg-gradient-to-r from-gray-100  to-purple-100/40 pt-4 lg:py-12 md:py-16  px-4 sm:px-6 lg:px-50 2xl:px-90 min-h-screen flex flex-col justify-center gap-10 items-center ">
    
      
      <!-- Section Title -->
      <SectionTop
        header="Preguntas Frecuentes"
        title=""
        header-color="text-coolPurple"
        subtitle="Encuentra las respuestas a las preguntas más comunes sobre nuestros servicios."
        description=""
        title-color="text-gray-600"
        subtitle-color="text-gray-600"
        description-color="text-gray-600"
      ></SectionTop>

      <!-- FAQ Accordion -->
      <div class="w-full lg:space-y-4 flex flex-col justify-between items-center gap-4">
        <div 
          v-for="faq in faqs" 
          :key="faq.id"
          class="bg-white flex flex-col lg:justify-between items-center justify-center overflow-hidden shadow-lg w-full h-[70px] lg:h-auto"
        >
          <!-- Question Header -->
          <button
            @click="toggleQuestion(faq.id)"
            class="w-full px-6 py-5 text-left flex justify-between items-center transition-all duration-300 ease-in-out hover:cursor-pointer h-full"
          >
            <h3 class="text-sm lg:text-lg font-semibold text-gray-800 pr-4">
              {{ faq.question }}
            </h3>
            <ChevronDownIcon 
              v-if="!isMobile"
              :class="[
                'w-5 h-5 text-coolPurple transition-all duration-400 ease-in-out flex-shrink-0',
                isOpen(faq.id) ? 'transform rotate-180 text-coolPurple' : ''
              ]"
            />
            <ChevronRightIcon 
              v-if="isMobile"
              class="w-5 h-5 text-coolPurple flex-shrink-0"
            />
          </button>

          <!-- Answer Content (Only visible on desktop) -->
          <div 
            v-if="!isMobile"
            :class="[
              'accordion-content overflow-hidden transition-all duration-400 ease-in-out',
              isOpen(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            ]"
          >
            <div class="px-6 pb-4 pt-2">
              <p class="text-gray-600 leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-8 text-center mb-14">
        <p class="text-gray-600 mb-4">
          ¿No encuentras la respuesta que buscas?
        </p>
        <CallToAction 
          @click="goToContact"
          bg-color="bg-coolPurple"
          text-color="text-white"
          hover-bg-color="hover:bg-purple-400"
          text="Contáctanos"
          size="medium"
        />
      </div>

      <!-- Modal for Mobile -->
      <div 
        v-if="modalOpen && selectedFaq"
        class="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        @click="closeModal"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        
        <!-- Modal Content -->
        <div 
          class="relative bg-white  shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto transform transition-all duration-300 animate-modal-appear"
          @click.stop
        >
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-100">
            <h3 class="text-lg font-semibold text-gray-800 pr-4">
              {{ selectedFaq.question }}
            </h3>
            <button 
              @click="closeModal"
              class="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <X class="w-5 h-5 text-coolPurple" />
            </button>
          </div>
          
          <!-- Modal Body -->
          <div class="p-6">
            <p class="text-gray-600 leading-relaxed text-base">
              {{ selectedFaq.answer }}
            </p>
          </div>
        </div>
      </div>
  </section>
</template>

<style scoped>
/* Smooth accordion animations */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Accordion content smooth transition */
.accordion-content {
  transition: max-height 0.4s ease-in-out, opacity 0.4s ease-in-out;
}

/* Modal animation */
@keyframes modal-appear {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-modal-appear {
  animation: modal-appear 0.3s ease-out;
}
</style>
