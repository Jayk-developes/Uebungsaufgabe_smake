<script setup lang="ts">
import {getAssets} from "assets";
import {useMyStore} from "~/store";

const images = ref<Object[]>([])
const store = useMyStore()

onMounted(async () => {
  await getAssets("http://localhost:3023/api/motives").then(async (res) => {
    images.value = await res.json()
  })

  let imgs = document.querySelectorAll(".img_circle") as NodeList

  const displayAsCircle = () => {
    let container = document.getElementById("right_select_container") as HTMLElement
    let leftContainer = document.getElementById("left_select_container") as HTMLElement
    container.style.maxHeight = leftContainer.style.maxHeight = container.getBoundingClientRect().height + "px"

    imgs.forEach((img: Node) => {
      img.style.height = img.getBoundingClientRect().width + "px"
    })
  }

  let topButton = document.getElementById("top_button_2") as HTMLElement
  let btmButton = document.getElementById("bottom_button_2") as HTMLElement

  let scrollDirection: number;
  let imgInterval: Interval

  topButton.addEventListener("mouseover", () => {
    scrollDirection = 4
    imgInterval = setInterval(scrollHandler, 50)
  })

  topButton.addEventListener("mouseout", () => {
    clearInterval(imgInterval)
  })

  btmButton.addEventListener("mouseover", () => {
    scrollDirection = -4
    imgInterval = setInterval(scrollHandler, 50)
  })

  btmButton.addEventListener("mouseout", () => {
    clearInterval(imgInterval)
  })

  const scrollHandler = () => {
    imgScroll(scrollDirection)
  }

  const imgScroll = (scrollDirection: number) => {
    imgs.forEach((img) => {
      let initialTop;
      if (img.style.top) {
        initialTop = parseInt(img.style.top)
      } else {
        initialTop = 0
      }
      img.style.top = initialTop + scrollDirection + "px"
      if (initialTop > 0) img.style.top = "0px"

    })
  }
  displayAsCircle()
})


const setImage = (img: string) => {
  store.setData("", img.img)
  store.data.imgName = img.name
  store.data.price = 15.45
}
</script>

<template>
  <div class="right_select_container" id="right_select_container">
    <div id="top_button_2" class="text-3xl">&#708;</div>
    <div id="imgs" class="w-full m-2">
      <div v-for="image in images" class="img_circle" :style="'background-image: url(' + image.img + ')'" :id="image.img"
           @click="setImage(image)"></div>
    </div>
    <div id="bottom_button_2" class=" text-3xl ">&#709;</div>
  </div>
</template>

<style scoped>
.right_select_container {
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


  @media only screen and (max-width: 800px) {
    width: 40%;
  }

    @media only screen and (max-width: 600px) {
    margin-left: -3rem;
    margin-right: 3rem;
    width: 80%;
  }
}

#top_button_2, #bottom_button_2 {
  transform: scaleY(.5);
  transition: all ease-in-out .2s;
  cursor: pointer;
}

#top_button_2:hover, #bottom_button_2:hover {
  color: #787;
}

#imgs {
  align-items: center;
  max-height: fill-available;
  max-height: -webkit-fill-available;
  max-height: -moz-available;
  overflow: hidden;
  box-shadow: 0 0 .5rem 0 #aaa inset;
}

.img_circle {
  position: relative;
  margin: 1rem 10%;
  width: 80%;
  height: 2rem;
  border-radius: 100rem;
  box-shadow: 0 0.1rem .5rem 0 #000a inset;
}

.img_circle:first-child {
  margin-top: 0;
}

.img_circle:hover {
  box-shadow: 0 0.1rem .5rem 0 #000a;
}
</style>