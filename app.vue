<template>
  <div class="bg-black min-h-screen">
    <UDropdown :items="[[{ label: 'Edit', shortcuts: ['E'] }]]" />
    <div class="flex items-center justify-center">
      <UButton>Button</UButton>
      <UCheckbox name="notifications" label="Notifications" />
    </div>
    <NuxtPage />
  </div>
</template>
