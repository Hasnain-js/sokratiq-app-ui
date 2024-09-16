<template>
  <div class="bg-darkBlue w-full py-5 px-14 sticky top-0">
    <div class="flex justify-between items-center mx-auto">
      <NuxtImg
        v-if="route.meta.layout == 'subPage'"
        src="/logo.png"
        alt="Sokratiq Logo"
        width="126"
        height="30"
      />
      <h1 class="font-bold text-2xl" v-else>{{ pageName }}</h1>
      <div class="flex items-center gap-2">
        <img src="@/assets/icons/user.svg" />
        <p>{{ user.email }}</p>
        <img src="@/assets/icons/arrow-down.svg" />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const pageName = "Search";
const user = {
  email: "ticketmastersales@gmail.com",
};
</script>
