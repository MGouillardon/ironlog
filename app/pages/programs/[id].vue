<script setup lang="ts">
definePageMeta({ layout: 'app' })

const route = useRoute()
const programId = route.params.id
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Programme #{{ programId }}</h1>
    <p class="text-gray-500">Détail du programme (a implémenter).</p>
  </div>
</template>
