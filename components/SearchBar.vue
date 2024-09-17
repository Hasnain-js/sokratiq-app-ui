<template>
  <div
    class="flex bg-white mx-auto rounded-lg w-full max-w-[540px] -translate-y-[50%] overflow-hidden"
  >
    <input
      class="bg-white p-4 pl-5 border rounded-l-lg w-full text-dark placeholder:text-text outline-none"
      type="text"
      :placeholder="placeholder"
      v-model="searchValue"
    />
    <button @click="search" class="bg-purple p-4">
      <IconsSearch />
    </button>
  </div>
</template>

<script setup>
const searchValue = ref();
const placeholder = "Enter an artist, event name or venue...";
function search() {
  console.log(searchValue.value);
}
</script>
