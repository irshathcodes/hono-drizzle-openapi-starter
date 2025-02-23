import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import * as schema from "./schema/index.js";

export const zodDbSchema = {
  todosTable: {
    insert: createInsertSchema(schema.todosTable),
    select: createSelectSchema(schema.todosTable),
  },
} as const;




