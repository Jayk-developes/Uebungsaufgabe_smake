<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import Bottom_Navbar from "~/components/Bottom_Navbar.vue";

</script>

<template>
  <div class=grid_container id="grid_container">
    <div id="navbar" class="nav">
      <Navbar/>
    </div>

    <NuxtPage id="DynamicRender"/>

    <div id="bottom_navbar" class="b_nav">
      <Bottom_Navbar/>
    </div>
  </div>


</template>
<style>
body, root {
  max-height: 100%;
  overflow: hidden;
}

#DynamicRender {
  max-height: 80%;
}

.grid_container {
  display: grid;
  gap: 1rem;

  width: fill-available;
  width: -webkit-fill-available;
  width: -moz-available;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 10% 80% 10%;
  grid-template-areas:
    "nav         nav    nav"
    "left_select tshirt right_select"
    "b_nav       b_nav  b_nav";
}

.nav {
  grid-area: nav;
}

.left_select {
  max-height: inherit;
  display: flex;
  justify-content: center;
  grid-area: left_select;
}

.tshirt {
  grid-area: tshirt;
}

.right_select {
  display: flex;
  justify-content: center;
  grid-area: right_select;
}

.b_nav {
  grid-area: b_nav;
}
</style>