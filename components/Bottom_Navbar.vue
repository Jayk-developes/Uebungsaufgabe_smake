<script setup lang="ts">

</script>

<template>
  <div class="bottom_nav w-full left-0 bg-slate-300 h-auto z-10 h-auto" id="bottomNav">
    <p id="impressum">Impressum</p>
    <p id="about"><nuxt-link to="/about">About us</nuxt-link></p>
    <p id="dataProtection">Datenschutz</p>
    <p id="Contact">Kontakt</p>
  </div>
</template>

<style scoped>
.bottom_nav {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
}

</style>