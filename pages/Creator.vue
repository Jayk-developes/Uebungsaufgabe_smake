<script setup lang="ts">
import Left_Select_Bar from "~/components/Left_Select_Bar.vue";
import TShirtSVG from "~/components/TShirt-SVG.vue";
import Right_Select_Bar from "~/components/Right_Select_Bar.vue";
</script>

<template>
    <div id="left_select" class="left_select">
      <Left_Select_Bar />
    </div>
    <div id="tshirt" class="tshirt">
      <TShirtSVG />
    </div>
    <div id="right_select" class="right_select">
      <Right_Select_Bar/>
    </div>
</template>

<style scoped>

</style>