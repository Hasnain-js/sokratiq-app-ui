<template>
  <NuxtLink
    class="p-[14px] hover:bg-background cursor-pointer rounded text-text flex gap-2.5 items-center"
    :to="path"
  >
    {{}}
    <IconsSearch
      v-if="icon == 'search'"
      :fill-class="route.fullPath == path ? 'fill-purple' : 'fill-text'"
    />
    <IconsCalendar
      v-else-if="icon == 'calendar'"
      :fill-class="route.fullPath == path ? 'fill-purple' : 'fill-text'"
    />
    <IconsAnalytics
      v-else-if="icon == 'analytics'"
      :fill-class="route.fullPath == path ? 'fill-purple' : 'fill-text'"
    />
    <span>{{ title }}</span>
  </NuxtLink>
</template>
<script setup>
const route = useRoute();

defineProps({
  title: {
    required: true,
  },
  path: {
    required: true,
  },
  icon: {
    required: true,
  },
});
</script>

<style scoped>
.router-link-exact-active {
  @apply bg-background text-dark font-semibold;
}
</style>
