<template>
  <div class="flex items-center justify-center min-h-screen">
    <UButton label="Show toast" @click="toast.add({ title: 'Hello world!' })" />
  </div>
</template>
<script setup lang="ts">
const toast = useToast();
</script>
