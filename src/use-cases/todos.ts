import { and, eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { todosTable } from "../db/schema/index.js";
import { UnprocessableEntityError } from "../lib/error-utils.js";
import type { InsertType } from "../db/table-types.js";

export async function createTodo(data: Pick<InsertType<"todosTable">, 'content'>) {
  const todo = await db
    .insert(todosTable)
    .values(data)
    .returning();

  return todo[0]!;
}

export async function getTodos() {
  return db
    .select()
    .from(todosTable)
    .orderBy(todosTable.createdAt);
}

export async function updateTodo(todoId: string, data: Pick<InsertType<"todosTable">, 'content'>) {
  const todo = await db
    .update(todosTable)
    .set({
      ...data,
      updatedAt: new Date().toISOString(),
    })
    .where(eq(todosTable.id, todoId))
    .returning();

  return todo[0]!;
}

export async function deleteTodo(todoId: string) {
  await db.delete(todosTable).where(eq(todosTable.id, todoId));
}

export async function toggleTodoComplete(todoId: string) {
  const todo = await db
    .select()
    .from(todosTable)
    .where(and(eq(todosTable.id, todoId)))
    .limit(1);

  if (!todo[0]) {
    throw new UnprocessableEntityError("Todo not found");
  }

  const updatedTodo = await db
    .update(todosTable)
    .set({
      completed: !todo[0].completed,
      updatedAt: new Date().toISOString(),
    })
    .where(eq(todosTable.id, todoId))
    .returning();

  return updatedTodo[0]!;
} 