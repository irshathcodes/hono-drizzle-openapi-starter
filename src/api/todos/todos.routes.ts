import { createRoute, z } from "@hono/zod-openapi";
import {
  emptyResponse,
  jsonContent,
  jsonContentRequired,
} from "../../lib/schema-helpers.js";
import { HTTP_STATUS_CODES } from "../../lib/constants.js";
import { ResponseBuilder } from "../../lib/response-builder.js";
import { zodDbSchema } from "../../db/zod-db-schema.js";

const routes = {
  createTodo: createRoute({
    method: "post",
    path: "/todos",
    request: {
      body: jsonContentRequired(
        zodDbSchema.todosTable.insert.pick({
          content: true,
        })
      ),
    },
    responses: ResponseBuilder.withAuthAndValidation({
      [HTTP_STATUS_CODES.CREATED]: jsonContent(zodDbSchema.todosTable.select),
    }),
  }),

  getTodos: createRoute({
    method: "get",
    path: "/todos",
    responses: ResponseBuilder.withAuthAndValidation({
      [HTTP_STATUS_CODES.OK]: jsonContent(z.array(zodDbSchema.todosTable.select)),
    }),
  }),

  updateTodo: createRoute({
    method: "patch",
    path: "/todos/{todoId}",
    request: {
      params: z.object({ todoId: z.string() }),
      body: jsonContentRequired(
        zodDbSchema.todosTable.insert
          .pick({
            content: true,
          })
      ),
    },
    responses: ResponseBuilder.withAuthAndValidation({
      [HTTP_STATUS_CODES.OK]: jsonContent(zodDbSchema.todosTable.select),
    }),
  }),

  deleteTodo: createRoute({
    method: "delete",
    path: "/todos/{todoId}",
    request: {
      params: z.object({ todoId: z.string() }),
    },
    responses: ResponseBuilder.withAuthAndValidation({
      [HTTP_STATUS_CODES.OK]: jsonContent(emptyResponse),
    }),
  }),

  toggleTodoComplete: createRoute({
    method: "patch",
    path: "/todos/{todoId}/toggle",
    request: {
      params: z.object({ todoId: z.string() }),
    },
    responses: ResponseBuilder.withAuthAndValidation({
      [HTTP_STATUS_CODES.OK]: jsonContent(zodDbSchema.todosTable.select),
    }),
  }),
};

export default routes; 