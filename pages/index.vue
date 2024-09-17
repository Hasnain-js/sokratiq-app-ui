<template>
  <div class="">
    <div class="bg-darkBlue px-[60px]">
      <div class="border-t border-[#182C5E] text-center py-14">
        <h1 class="text-[32px] font-extrabold mb-3">Find Events</h1>
        <p class="leading-6">
          Welcome to Sokratiq's Event Search. Easily discover and track events that matter
          to you, <br />with real-time updates and comprehensive filters to refine your
          search.
        </p>
      </div>
    </div>
    <div class="bg-white px-[60px]">
      <SearchBar />
    </div>
  </div>
</template>
<script setup lang="ts">
const toast = useToast();
</script>
