<script>
import HeaderComponent from '@/layout/Header.vue'
import FooterComponent from '@/layout/Footer.vue'
import { RouterView } from 'vue-router'

export default {
  name: 'AppLayout',
  components: {
    HeaderComponent,
    FooterComponent,
    RouterView
  }
}
</script>
<template>
  <div class="font-poppins">
    <HeaderComponent />
    <main class="">
      <RouterView />
    </main>
    <FooterComponent />
  </div>
</template>



