<template>
  <div
    class="border-main-border border bg-main-gradient rounded-xl p-8 lg:p-12 col-span-2 sm:col-span-1 sm:row-start-1 sm:row-end-3 lg:col-span-2 lg:col-start-1 lg:col-end-3 content-center"
  >
    <h2 class="text-main-purple text-4xl">Matias Aquino</h2>
    <h2 class="text-white text-3xl">Full Stack Developer</h2>
    <div></div>
    <p class="text-main-gray">
      Seeking opportunities to improve and grow professionally. I'm always ready to face new
      challenges and take exciting web projects to the next level.
    </p>
  </div>
  <div
    class="border-main-border border bg-main-gradient rounded-xl p-12 col-span-2 sm:col-span-1 sm:row-start-1 sm:row-end-2 sm:col-start-2 sm:col-end-3 lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-4 content-center text-center"
  >
    <h2 class="text-main-purple text-3xl">Web Developer UX/UI Frontend</h2>
  </div>

  <div
    class="border-main-border border bg-main-gradient rounded-xl p-12 flex items-center justify-center gap-3 flex-col"
  >
    <h2 class="text-main-purple text-3xl">Perú</h2>
    <ThePeruIcon />
  </div>
  <div
    class="border-main-border border bg-main-gradient rounded-xl p-4 lg:row-start-3 lg:row-end-5 lg:col-start-1 lg:col-end-2 flex items-center justify-center flex-col"
  >
    <TheTiktokIcon />
    <h2 class="text-main-purple text-3xl">Tiktok</h2>
  </div>
  <div
    class="border-main-border border bg-main-gradient rounded-xl col-start-2 col-end-3 row-start-3 row-end-5 sm:col-span-1 sm:row-start-3 sm:row-end-5 sm:col-start-1 sm:col-end-2 lg:row-start-2 lg:row-end-5 lg:col-start-4 lg:col-end-5"
  >
    <img class="rounded-xl h-full object-cover" src="../assets/img/gamesgrid.jpg" alt="" />
  </div>
  <div
    class="border-main-border border bg-main-gradient rounded-xl col-span-2 px-8 py-8 sm:col-span-1 sm:row-start-4 sm:row-end-8 sm:col-start-2 sm:col-end-3 lg:row-start-3 lg:row-end-5 lg:col-start-2 lg:col-end-4"
  >
    <h2 class="text-main-purple text-3xl pb-4">Technologies</h2>
    <div class="grid grid-cols-2 gap-4 text-main-gray lg:grid-cols-6">
      <div class="flex flex-col items-center gap-1"><TheFigmaIcon />Figma</div>
      <div class="flex flex-col items-center gap-1"><TheGraphqlIcon />GraphQL</div>
      <div class="flex flex-col items-center gap-1"><TheJavaScriptIcon />JavaScript</div>
      <div class="flex flex-col items-center gap-1"><TheMongoIcon />Mongo DB</div>
      <div class="flex flex-col items-center gap-1"><TheNextJsIcon />Next js</div>
      <div class="flex flex-col items-center gap-1"><TheNodeJsIcon />Node.js</div>
      <div class="flex flex-col items-center gap-1"><TheReactIcon />React</div>
      <div class="flex flex-col items-center gap-1"><TheSupabaseIcon />Supabase</div>
      <div class="flex flex-col items-center gap-1"><TheTailwindCss />Tailwind</div>
      <div class="flex flex-col items-center gap-1"><TheTypescriptIcon />Typescript</div>
    </div>
  </div>
  <div
    class="border-main-border border bg-main-gradient rounded-xl col-span-2 sm:col-span-1 sm:row-start-5 sm:row-end-7 sm:col-start-1 sm:col-end-2 lg:col-start-1 lg:col-end-3"
  >
    <video
      src="../assets/media/soulknigth.mp4"
      autoplay
      loop
      muted
      playsinline
      class="w-full h-full object-cover rounded-xl pointer-events-none"
    ></video>
  </div>
  <div
    class="border-main-border border bg-main-gradient rounded-xl p-4 col-span-2 sm:col-span-1 sm:row-start-7 sm:row-end-9 sm:col-start-1 sm:col-end-2 lg:row-start-5 lg:row-end-6 lg:col-start-3 lg:col-end-4 text-center content-center"
  >
    <h2 class="text-white text-3xl">{{ currentTime }}</h2>
  </div>
  <div
    class="border-main-border border bg-main-gradient rounded-xl p-4 col-span-2 sm:col-span-1 sm:row-start-9 sm:row-end-11 sm:col-start-1 sm:col-end-2 lg:row-start-5 lg:row-end-7 lg:col-start-4 lg:col-end-5 flex items-center justify-center"
  >
    <TheTwitterIcon />
  </div>
  <div
    class="border-main-border border bg-main-gradient rounded-xl p-4 col-span-2 sm:col-span-1 sm:row-start-8 sm:row-end-10 sm:col-start-2 sm:col-end-3 lg:row-start-6 lg:row-end-7 lg:col-start-3 lg:col-end-4 text-center content-center"
  >
    <h2 class="text-main-purple text-3xl">{{ diaActual.toLocaleUpperCase() }}</h2>
    <p class="text-white text-2xl">{{ fechaActual }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TheFigmaIcon from './svg/TheFigmaIcon.vue'
import TheGraphqlIcon from './svg/TheGraphqlIcon.vue'
import TheJavaScriptIcon from './svg/TheJavaScriptIcon.vue'
import TheMongoIcon from './svg/TheMongoIcon.vue'
import TheNextJsIcon from './svg/TheNextJsIcon.vue'
import TheNodeJsIcon from './svg/TheNodeJsIcon.vue'
import TheReactIcon from './svg/TheReactIcon.vue'
import TheSupabaseIcon from './svg/TheSupabaseIcon.vue'
import TheTailwindCss from './svg/TheTailwindCss.vue'
import TheTypescriptIcon from './svg/TheTypescriptIcon.vue'
import TheTwitterIcon from './svg/TheTwitterIcon.vue'
import TheTiktokIcon from './svg/TheTiktokIcon.vue'
import ThePeruIcon from './svg/ThePeruIcon.vue'

const dateOptions: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: 'long',
  year: 'numeric'
}

const weekDateOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long'
}

const fechaActual = new Date().toLocaleDateString('es-ES', dateOptions)
const diaActual = new Date().toLocaleDateString('es-ES', weekDateOptions)

const currentTime = ref(new Date().toLocaleTimeString())

setInterval(() => {
  currentTime.value = new Date().toLocaleTimeString()
}, 1000)
</script>
