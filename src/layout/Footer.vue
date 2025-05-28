<template>
  <footer class="bg-gray-800 text-gray-300 pt-12 pb-8 px-4 sm:px-6 lg:px-8 mt-auto">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Column 1: Brand/Company -->
        <div class="col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left flex flex-col justify-between items-center md:items-start">
          <RouterLink to="/">
            <XpsLogo class="lg:w-50 w-30 pb-5 lg:pb-0 mx-auto md:mx-0" />
          </RouterLink>
          <p class="text-sm mb-4">
            Haciendo el mundo un lugar mejor a través de código elegante y diseño intuitivo.
          </p>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="text-center md:text-left">
          <h4 class="text-lg font-medium text-white mb-4">Enlaces Rápidos</h4>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/" class="hover:text-white">Inicio</router-link></li>
            <li><router-link to="/about" class="hover:text-white">Nosotros</router-link></li>
            <li><router-link to="/services" class="hover:text-white">Servicios</router-link></li>
            <li><router-link to="/projects" class="hover:text-white">Proyectos</router-link></li>
            <li><router-link to="/contact" class="hover:text-white">Contacto</router-link></li>
          </ul>
        </div>

        <!-- Column 3: Resources -->
        <div class="text-center md:text-left">
          <h4 class="text-lg font-medium text-white mb-4">Recursos</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white">Blog</a></li>
            <li><a href="#" class="hover:text-white">Preguntas Frecuentes</a></li>
            <li><a href="#" class="hover:text-white">Centro de Soporte</a></li>
            <li><a href="#" class="hover:text-white">Documentación</a></li>
          </ul>
        </div>

        <!-- Column 4: Legal -->
        <div class="text-center md:text-left">
          <h4 class="text-lg font-medium text-white mb-4">Legal</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white">Política de Privacidad</a></li>
            <li><a href="#" class="hover:text-white">Términos de Servicio</a></li>
            <li><a href="#" class="hover:text-white">Política de Cookies</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar: Copyright and Social Media -->
      <div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm text-center md:text-left mb-4 md:mb-0">
          &copy; {{ new Date().getFullYear() }} XPS Studio. Todos los derechos reservados.
        </p>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-white" aria-label="Facebook">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg> 
          </a>
          <a href="#" class="hover:text-white" aria-label="Twitter">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.565-.665 2.455 0 1.615.823 3.042 2.074 3.878-.765-.025-1.482-.233-2.11-.583v.072c0 2.254 1.605 4.134 3.737 4.564-.39.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.849 2.308 3.195 4.34 3.233-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.322 4.51 2.096 7.14 2.096 8.572 0 13.266-7.094 13.034-13.596.898-.646 1.68-1.452 2.302-2.386z"/></svg>
          </a>
          <a href="#" class="hover:text-white" aria-label="Instagram">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.28.059 1.688.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.78-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" class="hover:text-white" aria-label="LinkedIn">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import XpsLogo from '@/assets/logos/xps-logo.svg'
// import XpsLogoBlack from '@/assets/logos/xps-logo-black.svg' // Assuming XpsLogoBlack is not used in the translated version directly or it's handled elsewhere

export default {
  name: 'FooterComponent',
  components:{
    XpsLogo,
    // XpsLogoBlack // Ensure this is needed or remove if not
  }
}
</script>

<style scoped>
/* Add any footer-specific styles here if needed */
</style>

                                                                            