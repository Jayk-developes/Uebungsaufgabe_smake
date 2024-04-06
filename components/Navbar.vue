<script setup lang="ts">

import {useMyStore} from "~/store";

const store = useMyStore()

</script>

<template>
  <div class="navbar flex justify-between fixed top-0 left-0 w-full bg-slate-300 h-auto z-10" id="navbar">
    <p id="locateCreator">
      <nuxt-link to="/creator">Design your Shirt!</nuxt-link>
    </p>
    <p class="ml-auto" id="amount">{{ store.data.price }}</p>
    <p id="locateCheckout">
      <nuxt-link to="/checkout">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
              d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-2.937-7h11.162l-1.412 5h2.078l1.977-7h-16.813l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195z"/>
        </svg>
      </nuxt-link>
    </p>
  </div>
</template>

<style scoped>

.navbar {
  padding: .5rem;

  p {
    padding: .33rem 1rem;
    color: #229413;
    font-weight: bold;
    transition: all ease-in-out .2s;
    border-radius: .25rem;
    background-color: transparent;
  }
}

#amount {
  color: black;
  text-shadow: white 1px 1px;
}

#locateCheckout {
  svg {
    transition: all ease-in-out .2s;
  }

  svg:hover {
    fill: white;
  }
}

</style>