<script>
import ChevronDownIcon from 'heroicons/24/outline/chevron-down.svg?component'
import SectionTitle from '@/components/SectionTitle.vue'
import CallToAction from '@/components/buttons/CallToActionButton.vue'
import { RouterLink } from 'vue-router'

export default {
  name: 'FAQSSmallSection',
  components: {
    ChevronDownIcon,
    SectionTitle,
    CallToAction,
    RouterLink
  },
  data() {
    return {
      openQuestion: null,
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
  methods: {
    toggleQuestion(questionId) {
      if (this.openQuestion === questionId) {
        this.openQuestion = null
      } else {
        this.openQuestion = questionId
      }
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
  <section class="bg-gradient-to-b from-gray-100  to-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-50 2xl:px-90 min-h-screen flex flex-col justify-between items-center ">
    
      
      <!-- Section Title -->
      <SectionTitle 
        title="Preguntas Frecuentes" 
        color="text-coolPurple"
        
        alignment="text-center"
        margin-bottom="mb-8 lg:mb-12"
      />

      <!-- FAQ Accordion -->
      <div class="w-full space-y-4">
        <div 
          v-for="faq in faqs" 
          :key="faq.id"
          class="bg-white  overflow-hidden shadow-lg"
        >
          <!-- Question Header -->
          <button
            @click="toggleQuestion(faq.id)"
            class="w-full px-6 py-5 text-left flex justify-between items-center  transition-all duration-300 ease-in-out hover:cursor-pointer "
          >
            <h3 class="text-lg font-semibold text-gray-800 pr-4">
              {{ faq.question }}
            </h3>
            <ChevronDownIcon 
              :class="[
                'w-5 h-5 text-coolPurple transition-all duration-400 ease-in-out flex-shrink-0 ',
                isOpen(faq.id) ? 'transform rotate-180 text-coolPurple' : ''
              ]"
            />
          </button>

          <!-- Answer Content -->
          <div 
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
</style>
