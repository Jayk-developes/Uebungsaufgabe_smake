<script setup lang="ts">
import TShirtSVG from "~/components/TShirt-SVG.vue";
import {useMyStore} from "~/store";

const store = useMyStore()
const shirtPrice: number = 11.09
const priceForMotive: number = 4.36
const totalPrice = ref<string>()
const checkIfMotive = ref<boolean>(false)

const placeOrder = async () => {
  let name = document.getElementById("Name") as HTMLElement
  let address = document.getElementById("Address") as HTMLElement
  let submit = document.getElementById("submit") as HTMLElement

  if (name.value == "" || address.value == "") {
    name.style.boxShadow = "0 0 .5rem #f00a"
    address.style.boxShadow = "0 0 .5rem #f00a"
    submit.style.backgroundColor = "#f55"
    submit.value = "Name and Address must be filled!"

  } else {

    await fetch("http://localhost:3023/api/order", {
      method: "POST", headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: name.value,
        address: address.value
      })
    })

    document.location.href = "http://localhost:3023/success"
  }
}

onMounted(() => {
  let summary = document.getElementById("checkoutSummary") as HTMLElement
  let placeOrderContainer = document.getElementById("placeOrder") as HTMLElement

  const checkPrice = (price: number) => {
    if (store.data.img != "") {
      checkIfMotive.value = true
      summary.style.marginBottom = placeOrderContainer.style.marginBottom = "5rem"

    }
    return price + "€"
  }

  totalPrice.value = checkPrice(store.data.price)

})


</script>

<template>

  <div id="tshirt" class="left-select">
    <TShirtSVG/>

  </div>

  <div class="flex justify-center" id="orderSummaryContainer">
    <div class="checkoutSummary" id="checkoutSummary">
      <div id="orderHeader" class="orderHeader">Order Summary</div>
      <div id="orderSummary" class="orderSummary">
        <div class="flex justify-between" id="TshirtPrice">
          <div>Tshirt:</div>
          <div>{{ shirtPrice }}</div>
        </div>
        <div v-if="checkIfMotive" class="justify-between flex" id="MotivePrice">
          <div>Motive - ({{ store.data.imgName }}):</div>
          <div>{{ priceForMotive }}</div>
        </div>
        <div class="flex justify-between" id="TshirtColor">
          <div>Color:</div>
          <div>{{ store.data.colorName }}</div>
        </div>
      </div>
      <div id="orderTotal" class="orderTotal">
        <div>Order Total:</div>
        <div>{{ totalPrice }}</div>
      </div>
    </div>
  </div>

  <div class="flex justify-center" id="placeOrder">
    <div id="checkout" class="checkoutSummary">
      <div id="checkoutHeader" class="orderHeader -mt-1">Complete Order</div>
      <div class="orderSummary" id="checkoutInfos">
        <input type="text" name="Email" id="Email" placeholder="Enter your E-Mail!">
        <input type="text" name="Name" id="Name" placeholder="Enter your full name!">
        <input type="text" name="Address" id="Address" placeholder="Enter your Address!">
      </div>
      <div class="orderTotal" id="placeOrder">
        <input type="button" value="Place Order" @click="placeOrder" id="submit">
      </div>

    </div>
  </div>
</template>

<style scoped>

.checkoutSummary {
  background-color: transparent;
  box-shadow: 0 .25rem .5rem 0 #0004;
  width: 67%;
  height: fill-available;
  margin: 1rem;
  padding: 1.5rem;
  border-radius: .25rem;
  overflow: hidden;
  white-space: nowrap;

  display: grid;
  grid-template-rows: 10% 85% 5%;

  .orderHeader {
    font-size: 1.5rem;
    font-weight: 500;
    border-bottom: 1px solid #4f4;
  }

  .orderSummary {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-direction: column;
    margin-top: 1rem;
    border-bottom: 1px solid #4f4;

    div {
      font-size: 1.2rem;
      font-weight: 500;
    }

    input {
      box-shadow: 0 .25rem .5rem 0 #0004;
      padding: .5rem 1rem;
      border-radius: .25rem;
      border: solid 1px #0004;
    }
  }

  .orderTotal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;

    input {
      box-shadow: 0 .25rem .5rem 0 #0004;
      height: 2rem;
      font-size: 1rem;
      width: fill-available;
      border-radius: .25rem;
      background-color: #2d2;
      color: white;
      transition: all ease-in-out .2s;
    }

    input:hover {
      background-color: #4f4;
    }
  }
}

</style>