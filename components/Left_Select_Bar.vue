<script setup lang="ts">
import {getAssets} from "assets";
import {useMyStore} from "~/store";

const colors = ref<object[]>([])
const store = useMyStore();

onMounted(async () => {

  await getAssets("http://localhost:3023/api/colors").then(async (res) => {
    colors.value = await res.json()
  })

  let circles = document.querySelectorAll(".color_circle") as NodeList

  const displayAsCircle = () => {
    let container = document.getElementById("left_select_container") as HTMLElement
    container.style.maxHeight = container.getBoundingClientRect().height + "px"
    circles.forEach((circle: Node) => {
      circle.style.height = circle.getBoundingClientRect().width + "px"
    })
  }

  let topButton = document.getElementById("top_button") as HTMLElement
  let btmButton = document.getElementById("bottom_button") as HTMLElement

  let scrollDirection: number;
  let colorInterval: Interval

  topButton.addEventListener("mouseover", () => {
    scrollDirection = 4
    colorInterval = setInterval(scrollHandler, 50)
  })

  topButton.addEventListener("mouseout", () => {
    clearInterval(colorInterval)
  })

  btmButton.addEventListener("mouseover", () => {
    scrollDirection = -4
    colorInterval = setInterval(scrollHandler, 50)
  })

  btmButton.addEventListener("mouseout", () => {
    clearInterval(colorInterval)
  })

  const scrollHandler = () => {
    colorScroll(scrollDirection)
  }

  const colorScroll = (scrollDirection: number) => {
    circles.forEach((circle) => {
      let initialTop;
      if (circle.style.top) {
        initialTop = parseInt(circle.style.top)
      } else {
        initialTop = 0
      }
      circle.style.top = initialTop + scrollDirection + "px"
      if (initialTop > 0) circle.style.top = "0px"

    })
  }

  displayAsCircle()
})

const setColor = (color: string) => {
  store.setData(color.color, "")
  store.data.colorName = color.name

}
</script>

<template>
  <div class="left_select_container" id="left_select_container">
    <div id="top_button" class="text-3xl">&#708;</div>
    <div id="colors" class="w-full m-2">
      <div v-for="color in colors" class="color_circle" :style="'background-color:' + color.color" :id="color.color"
           @click="setColor(color)"></div>
    </div>
    <div id="bottom_button" class=" text-3xl ">&#709;</div>
  </div>
</template>

<style scoped>
.left_select_container {
  display: grid;
  grid-template-rows: 10% 80% 10%;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  width: 20%;
  max-height: inherit;
  background-color: #eee;
  border-radius: .25rem;
  box-shadow: 0 .125rem .33rem 0 #0004;
}

#top_button, #bottom_button {
  transform: scaleY(.5);
  transition: all ease-in-out .2s;
  cursor: pointer;
}

#top_button:hover, #bottom_button:hover {
  color: #787;
}

#colors {
  align-items: center;
  max-height: fill-available;
  max-height: -webkit-fill-available;
  max-height: -moz-available;
  overflow: hidden;
  box-shadow: 0 0 .5rem 0 #aaa inset;
}

.color_circle {
  cursor: pointer;
  position: relative;
  margin: 1rem 10%;
  width: 80%;
  height: 2rem;
  border-radius: 100rem;
  box-shadow: 0 0.1rem .5rem 0 #000a inset;
  transition: all ease-in-out .2s;
}

.color_circle:first-child {
  margin-top: 0;
}

.color_circle:hover {
  box-shadow: 0 0.1rem .5rem 0 #000a;
}
</style>