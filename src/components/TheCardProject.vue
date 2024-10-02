<template>
  <div class="sm:w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
    <div class="rounded-xl border-main-border border sm:flex">
      <div class="sm:w-1/2">
        <img src="../assets/img/fulleatproject.jpeg" alt="" class="rounded-xl" />
      </div>
      <div class="my-auto">
        <div class="px-5 py-3 mb-5">
          <h3 class="text-main-purple text-3xl pb-3">Fulleat</h3>
          <div class="grid grid-cols-2 gap-3 text-main-gray">
            <div class="flex gap-2">
              <span><TheTypescriptIcon /></span>TypeScript
            </div>
            <div class="flex gap-2">
              <span><TheVueIcon /></span>Vue
            </div>
            <div class="flex gap-2">
              <span><TheFigmaIcon /></span>Figma
            </div>
            <div class="flex gap-2">
              <span><TheTailwindCss /></span>Tailwind
            </div>
          </div>
        </div>
        <div class="flex justify-between px-5 pb-4">
          <p class="text-main-gray">Julio 31, 2023</p>
          <div class="text-main-gray"><a href="" class="pr-3">Github</a><a href="">Preview</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheTypescriptIcon from './svg/TheTypescriptIcon.vue'
import TheFigmaIcon from './svg/TheFigmaIcon.vue'
import TheTailwindCss from './svg/TheTailwindCss.vue'
import TheVueIcon from './svg/TheVueIcon.vue'
</script>
