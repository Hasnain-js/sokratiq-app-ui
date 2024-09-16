<template>
  <div class="flex items-stretch w-full min-h-screen">
    <div class="w-1/2 py-10">
      <div class="max-w-md flex flex-col justify-between h-full mx-auto w-full">
        <img
          src="/logo-with-name.svg"
          class="w-fit h-auto"
          alt="logo-with-name"
        />
        <slot></slot>
        <div class="text-alabaster-600 font-light">
          Don’t have an account?
          <NuxtLink class="underline text-medium-purple-500 font-semibold"
            >Sign Up</NuxtLink
          >
        </div>
      </div>
    </div>
    <div
      class="outline bg-[url('/auth-layout-bg.png')] bg-cover bg-center w-1/2"
    ></div>
  </div>
</template>
