import { pgTable } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const todosTable = pgTable("todos", {
  id: t.uuid().primaryKey().defaultRandom(),
  content: t.text().notNull(),
  completed: t.boolean().notNull().default(false),
  createdAt: t.timestamp({ mode: "string" }).notNull().defaultNow(),
  updatedAt: t.timestamp({ mode: "string" }).notNull().defaultNow(),
});
