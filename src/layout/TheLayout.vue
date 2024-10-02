<template>
  <header><TheNavbar /></header>
  <section class="px-3 flex items-center flex-col">
    <div class="grid grid-cols-2 gap-3 sm:max-w-[750px] lg:max-w-[1300px] lg:grid-cols-4">
      <TheBentoGridContent />
    </div>
    <div class="px-3 max-w-[750px] lg:max-w-[1300px]"><TheJobsContent /></div>
    <div class="pb-5 max-w-[750px] lg:max-w-[1300px]"><TheProjects /></div>
  </section>
  <TheFooter />
</template>

<script lang="ts" setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheBentoGridContent from '@/components/TheBentoGridContent.vue'
import TheJobsContent from '@/components/TheJobsContent.vue'
import TheProjects from '@/components/TheProjects.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>
