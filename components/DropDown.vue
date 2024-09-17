<template>
  <div class="relative">
    <div
      @click="isOpen = !isOpen"
      class="flex justify-between items-center border-color-default p-[14px] border rounded-lg cursor-pointer"
    >
      <div class="flex items-center gap-2">
        <img :src="icon" />
        <span class="font-Lexend font-semibold text-dark text-sm">{{
          selectedOption || label
        }}</span>
      </div>
      <img src="@/assets/icons/arrow-down.svg" />
      <IconsArrowDown fillClass="fill-dark" />
    </div>
    <div
      v-if="isOpen"
      class="top-[calc(100%_+_6px)] border-stroke bg-white border rounded-lg w-full select-none"
      :class="isAbsolute ? 'absolute' : 'mt-1.5'"
    >
      <div
        v-for="(option, index) in options"
        class="hover:bg-background p-[14px] font-semibold text-dark text-sm cursor-pointer"
        :class="index < options.length - 1 ? 'border-b border-stroke' : ''"
        @click="
          () => {
            $emit('updateSelectedOption', option);
            isOpen = false;
          }
        "
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
    default: [],
  },
  label: {
    type: String,
  },
  selectedOption: {
    type: String,
  },
  icon: {
    type: String,
  },
});
const emits = defineEmits(["updateSelectedOption"]);
const isOpen = ref(false);
</script>
