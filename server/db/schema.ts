import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  username: text('username').notNull().unique(),
  password_hash: text('password_hash').notNull(),
  created_at: text('created_at')
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
  updated_at: text('updated_at')
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
})
