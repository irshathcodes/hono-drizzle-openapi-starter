import { pgTable } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";
import {
  user as usersTable,
  session as sessionsTable,
  account as accountsTable,
  verification as verificationsTable,
} from "./auth-schema.js";

export { usersTable, sessionsTable, accountsTable, verificationsTable };

export const todosTable = pgTable("todos", {
  id: t.uuid().primaryKey().defaultRandom(),
  content: t.text().notNull(),
  completed: t.boolean().notNull().default(false),
  userId: t
    .text()
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: t.timestamp({ mode: "string" }).notNull().defaultNow(),
  updatedAt: t.timestamp({ mode: "string" }).notNull().defaultNow(),
});
