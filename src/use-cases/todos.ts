import { and, eq } from "drizzle-orm";
import { db } from "../db/index.js";
import { todosTable } from "../db/schema/index.js";
import type { AuthCtx } from "../lib/types.js";
import { UnprocessableEntityError } from "../lib/error-utils.js";
import type { InsertType } from "../db/table-types.js";

export async function createTodo(authCtx: AuthCtx, data: Pick<InsertType<"todosTable">, 'content'>) {
  const todo = await db
    .insert(todosTable)
    .values({
      ...data,
      userId: authCtx.user.id,
    })
    .returning();

  return todo[0]!;
}

export async function getTodos(authCtx: AuthCtx) {
  return db
    .select()
    .from(todosTable)
    .where(eq(todosTable.userId, authCtx.user.id))
    .orderBy(todosTable.createdAt);
}

export async function updateTodo(authCtx: AuthCtx, todoId: string, data: Pick<InsertType<"todosTable">, 'content'>) {
  const todo = await db
    .update(todosTable)
    .set({
      ...data,
      updatedAt: new Date().toISOString(),
    })
    .where(and(eq(todosTable.id, todoId), eq(todosTable.userId, authCtx.user.id)))
    .returning();

  return todo[0]!;
}

export async function deleteTodo(authCtx: AuthCtx, todoId: string) {
  await db.delete(todosTable).where(and(eq(todosTable.id, todoId), eq(todosTable.userId, authCtx.user.id)));
}

export async function toggleTodoComplete(authCtx: AuthCtx, todoId: string) {
  const todo = await db
    .select()
    .from(todosTable)
    .where(and(eq(todosTable.id, todoId), eq(todosTable.userId, authCtx.user.id)))
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
    .where(and(eq(todosTable.id, todoId), eq(todosTable.userId, authCtx.user.id)))
    .returning();

  return updatedTodo[0]!;
} 