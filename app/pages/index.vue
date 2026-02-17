<template>
  <UContainer class="py-24">
    <div class="text-center max-w-2xl mx-auto">
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
        Track your training with <span class="text-primary">IronLog</span>
      </h1>
      <p class="mt-6 text-lg text-gray-600 dark:text-gray-400">
        Suivi de musculation, powerlifting et CrossFit. Enregistre tes sessions, suis tes records
        personnels et progresse.
      </p>
      <div class="mt-10 flex items-center justify-center gap-4">
        <NuxtLink to="/register">
          <UButton size="lg" label="Commencer" />
        </NuxtLink>
        <NuxtLink to="/login">
          <UButton size="lg" variant="outline" label="Se connecter" />
        </NuxtLink>
      </div>
    </div>
  </UContainer>
</template>
