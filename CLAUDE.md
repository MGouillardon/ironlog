# IronLog — Training Tracker

## Overview

Application fullstack de suivi d'entraînement (musculation, powerlifting, CrossFit).
Nuxt 3 avec SSR, server routes Nitro, SQLite via Drizzle ORM.

## Stack

- **Framework** : Nuxt 3 (Vue 3 Composition API)
- **UI** : Nuxt UI + Tailwind CSS
- **State** : Pinia (@pinia/nuxt)
- **ORM** : Drizzle ORM + better-sqlite3
- **Auth** : nuxt-auth-utils (sessions HTTP-only cookies)
- **Validation** : Zod (schémas partagés front/back dans shared/)
- **Graphiques** : Chart.js via vue-chartjs

## Commands

- `npm run dev` : Serveur de dev (port 3000)
- `npm run build` : Build production
- `npm run preview` : Preview du build
- `npx drizzle-kit generate` : Générer les migrations
- `npx drizzle-kit migrate` : Appliquer les migrations
- `npx drizzle-kit studio` : Interface DB
- `npm run seed` : Seed la bibliothèque d'exercices
- `npm run lint` : ESLint + Prettier
- `npm run typecheck` : Vérification TypeScript

## Architecture

```
pages/           → Routes auto-générées par Nuxt
layouts/         → default (public), auth (login/register), app (dashboard)
components/      → Composants Vue organisés par module (session/, program/, stats/, ui/)
composables/     → useAuth, useTimer, usePersonalRecords
stores/          → Pinia stores (session, program)
server/api/      → API REST (Nitro server routes)
server/db/       → Schema Drizzle, migrations, seed, connexion DB
server/utils/    → Helpers serveur (auth, validation)
shared/schemas/  → Schémas Zod partagés entre front et back
public/          → Assets statiques
```

## Code Style

- TypeScript strict, pas de `any`
- Composition API uniquement (`<script setup lang="ts">`)
- Composants en PascalCase, composables en camelCase avec préfixe `use`
- Un composant = un fichier, max ~150 lignes (extraire si plus)
- Imports automatiques Nuxt : ne pas importer ref, computed, watch, etc.
- Utiliser `useFetch` / `useAsyncData` pour le data fetching, jamais `$fetch` brut dans les composants
- Côté serveur : `defineEventHandler`, `getQuery`, `readBody`, `createError`
- Validation Zod obligatoire sur toutes les routes POST/PUT/PATCH

## SSR Rules

- Ne JAMAIS accéder à `window`, `document`, `localStorage` en dehors de `onMounted` ou `if (import.meta.client)`
- Les composables avec logique browser doivent vérifier le contexte
- `useFetch` s'exécute côté serveur par défaut, utiliser `lazy: true` si pas critique

## DB Conventions

- Tables en snake_case, pluriel (exercises, sessions, sets)
- Colonnes en snake_case
- Toujours `created_at` et `updated_at` sur les tables principales
- FK avec `_id` suffix (user_id, program_id)
- Soft delete : non, on supprime vraiment

## Git Workflow

- Branche : `feat/IL-{issue}-description` ou `fix/IL-{issue}-description`
- Commit : `feat(module): description (closes #{issue})`
- PR vers `main`, squash merge
- Une issue = une PR = une feature atomique

## Important

- Le middleware auth redirige vers /login si pas de session
- Pages publiques : `definePageMeta({ auth: false })`
- Les server routes vérifient TOUJOURS que l'utilisateur est propriétaire de la ressource
- Le timer de repos utilise `useTimer` composable avec notification sonore
- Les PRs (records personnels) sont calculés automatiquement à chaque ajout de série
- La formule 1RM Epley : `weight * (1 + reps / 30)`
