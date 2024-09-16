<template>
  <div class="bg-white min-w-[248px] sticky top-0 h-screen">
    <!-- Branding and Menu button -->
    <div class="py-5 px-6 mx-auto flex justify-between">
      <NuxtImg src="/logo-2.png" alt="Sokratiq Logo" width="126" height="30" />
      <img src="@/assets/icons/side-nav-toggle.svg" alt="Toggle Menu" />
    </div>

    <!-- Navigation -->
    <div class="p-5 space-y-8">
      <!-- region -->
      <DropDown
        label="Region"
        icon="/icons/region.svg"
        :options="['Region 1', 'Region 2']"
        :selectedOption="selectedRegion"
        @updateSelectedOption="(e) => (selectedRegion = e)"
      />

      <!-- nav links -->
      <div class="space-y-2">
        <SideNavLink
          v-for="navLink in navLinks"
          :title="navLink.title"
          :path="navLink.path"
          :icon="navLink.icon"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const pageName = "Search";
const user = {
  email: "ticketmastersales@gmail.com",
};

const navLinks = [
  {
    title: "Event Finder",
    path: "/",
    icon: "search",
  },
  {
    title: "Popular Events",
    path: "/popular",
    icon: "calendar",
  },
  {
    title: "Alerts",
    path: "/alerts",
    icon: "analytics",
  },
];

const selectedRegion = ref();
</script>
