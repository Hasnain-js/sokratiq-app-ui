<template>
  <div class="relative">
    <div
      @click="isOpen = !isOpen"
      class="p-[14px] flex justify-between items-center border border-[rgba(108, 130, 176, 0.1)] rounded-lg cursor-pointer"
    >
      <div class="flex gap-2 items-center">
        <img :src="icon" />
        <span class="text-dark font-semibold text-sm font-Lexend">{{ selectedOption || label }}</span>
      </div>
      <img src="@/assets/icons/arrow-down.svg" />
      <IconsArrowDown fillClass="fill-dark" />
    </div>
    <div
      v-if="isOpen"
      class="bg-white w-full border border-stroke rounded-lg top-[calc(100%_+_6px)] select-none"
      :class="isAbsolute ? 'absolute' : 'mt-1.5'"
    >
      <div
        v-for="(option, index) in options"
        class="p-[14px] text-dark font-semibold text-sm hover:bg-background cursor-pointer"
        :class="index < options.length - 1 ? 'border-b border-stroke' : ''"
        @click="()=>{
          $emit('updateSelectedOption', option)
          isOpen = false
        }"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isAbsolute: false,
  options: {
    type: Array,
    default: []
  },
  label: {
    type: String,
  },
  selectedOption: {
    type: String,
  },
  icon: {
    type: String,
  }
});
const emits = defineEmits(["updateSelectedOption"])
const isOpen = ref(false);
</script>
