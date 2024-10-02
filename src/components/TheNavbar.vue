<template>
  <nav class="flex justify-between items-center py-2 px-10 mb-2 max-w-[1350px] mx-auto">
    <div>
      <TheCapibaraIcon />
    </div>
    <div>
      <ul class="sm:flex gap-8 hidden">
        <li>About me</li>
        <li>Work</li>
        <li>Projects</li>
      </ul>
    </div>
    <div>
      <button><TheLanguageIcon /></button>
      <button class="pl-3 sm:hidden"><TheMenuIcon /></button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import TheCapibaraIcon from './svg/TheCapibaraIcon.vue'
import TheLanguageIcon from './svg/TheLanguageIcon.vue'
import TheMenuIcon from './svg/TheMenuIcon.vue'
</script>

<style lang="scss" scoped></style>
