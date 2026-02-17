<script setup lang="ts">
const navigation = [
  { label: 'Dashboard', icon: 'i-lucide-layout-dashboard', to: '/dashboard' },
  { label: 'Sessions', icon: 'i-lucide-dumbbell', to: '/sessions' },
  { label: 'Programmes', icon: 'i-lucide-calendar', to: '/programs' },
  { label: 'Exercices', icon: 'i-lucide-list', to: '/exercises' },
  { label: 'Stats', icon: 'i-lucide-bar-chart-3', to: '/stats' },
]
</script>

<template>
  <div class="min-h-screen flex">
    <aside class="hidden lg:flex w-64 flex-col border-r border-gray-200 dark:border-gray-800 p-4">
      <NuxtLink to="/dashboard" class="text-xl font-bold mb-8">IronLog</NuxtLink>
      <nav class="flex flex-col gap-1">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          active-class="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          <UIcon :name="item.icon" class="size-5" />
          {{ item.label }}
        </NuxtLink>
      </nav>
      <div class="mt-auto">
        <NuxtLink
          to="/profile"
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          active-class="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          <UIcon name="i-lucide-user" class="size-5" />
          Profil
        </NuxtLink>
      </div>
    </aside>

    <div class="flex-1 flex flex-col">
      <header
        class="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800 lg:px-8"
      >
        <span class="lg:hidden text-xl font-bold">IronLog</span>
        <div class="ml-auto">
          <UButton variant="ghost" icon="i-lucide-user" to="/profile" />
        </div>
      </header>

      <main class="flex-1 p-4 lg:p-8">
        <slot />
      </main>
    </div>
  </div>
</template>
