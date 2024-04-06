<script setup lang="ts">

</script>

<template>
    <div id="blank1" class="left_select">

    </div>
    <div id="Success" class="tshirt success">
      <div class="orderPlaced" id="orderPlaced">
        Order Places Successfully!
      </div>
      <div id="locateCreatorFromSuccess">
        <nuxt-link to="/creator" class="newItem">Design new Shirt</nuxt-link>
      </div>
    </div>
    <div id="blank2" class="right_select">

    </div>
</template>

<style scoped>

.success {
  margin-top: 8rem;
  gap: 2rem;
  width: fill-available;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 .25rem .5rem #0004;
  border-radius: .5rem;
}

.orderPlaced {
  font-size: 1.4rem;
  font-weight: 500;
  color: #229413;
}

.newItem {
  padding: .5rem 1rem;
  background-color: #229413;
  color: white;
  border-radius: .25rem;
  box-shadow: 0 .25rem .5rem 0 #0004;
  transition: all ease-in-out .2s;
}

.newItem:hover {
  background-color: #66aa55;
}

</style>