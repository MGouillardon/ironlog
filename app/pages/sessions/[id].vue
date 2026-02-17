<script setup lang="ts">
definePageMeta({ layout: 'app' })

const route = useRoute()
const sessionId = route.params.id
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Session #{{ sessionId }}</h1>
    <p class="text-gray-500">Détail de la session (a implémenter).</p>
  </div>
</template>
