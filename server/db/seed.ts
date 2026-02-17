import { drizzle } from 'drizzle-orm/better-sqlite3'
import Database from 'better-sqlite3'
import * as schema from './schema'

const sqlite = new Database('./data/ironlog.db')
const _db = drizzle(sqlite, { schema })

async function seed() {
  console.log('Seeding database...')
  // TODO: seed exercise library when exercise tables are created
  console.log('Seed complete.')
}

seed()
  .catch(console.error)
  .finally(() => sqlite.close())
