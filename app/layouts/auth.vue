<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-4">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <NuxtLink to="/" class="text-2xl font-bold">IronLog</NuxtLink>
      </div>
      <UCard>
        <slot />
      </UCard>
    </div>
  </div>
</template>
