<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b border-gray-200 dark:border-gray-800">
      <UContainer>
        <nav class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="text-xl font-bold">IronLog</NuxtLink>
          <div class="flex items-center gap-4">
            <NuxtLink to="/login">
              <UButton variant="ghost" label="Connexion" />
            </NuxtLink>
            <NuxtLink to="/register">
              <UButton label="Inscription" />
            </NuxtLink>
          </div>
        </nav>
      </UContainer>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-gray-200 dark:border-gray-800 py-6">
      <UContainer>
        <p class="text-center text-sm text-gray-500">IronLog &mdash; Track your training.</p>
      </UContainer>
    </footer>
  </div>
</template>
