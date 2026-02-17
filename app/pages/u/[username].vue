<script setup lang="ts">
const route = useRoute()
const username = route.params.username
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Profil de {{ username }}</h1>
    <p class="text-gray-500">Profil public (a implémenter).</p>
  </div>
</template>
