import { HTTP_STATUS_CODES } from "../../lib/constants.js";
import type { InferHandlers } from "../../lib/types.js";
import type routes from "./todos.routes.js";
import * as todosUseCases from "../../use-cases/todos.js";

const handlers: InferHandlers<typeof routes> = {
  createTodo: async (c) => {
    const authCtx = c.var.authCtx;
    const body = c.req.valid("json");

    const todo = await todosUseCases.createTodo(authCtx, body);
    return c.json(todo, HTTP_STATUS_CODES.CREATED);
  },

  getTodos: async (c) => {
    const authCtx = c.var.authCtx;
    const todos = await todosUseCases.getTodos(authCtx);
    return c.json(todos, HTTP_STATUS_CODES.OK);
  },

  updateTodo: async (c) => {
    const authCtx = c.var.authCtx;
    const { todoId } = c.req.valid("param");
    const body = c.req.valid("json");

    const todo = await todosUseCases.updateTodo(authCtx, todoId, body);
    return c.json(todo, HTTP_STATUS_CODES.OK);
  },

  deleteTodo: async (c) => {
    const authCtx = c.var.authCtx;
    const { todoId } = c.req.valid("param");

    await todosUseCases.deleteTodo(authCtx, todoId);
    return c.json({}, HTTP_STATUS_CODES.OK);
  },

  toggleTodoComplete: async (c) => {
    const authCtx = c.var.authCtx;
    const { todoId } = c.req.valid("param");

    const todo = await todosUseCases.toggleTodoComplete(authCtx, todoId);
    return c.json(todo, HTTP_STATUS_CODES.OK);
  },
};

export default handlers; 