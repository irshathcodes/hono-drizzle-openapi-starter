import type { InferMiddlewares } from "../../lib/types.js";
import { createMiddleware } from "hono/factory";
import type routes from "./todos.routes.js";
import type { AppBindings } from "../../lib/types.js";

const testMiddleware = createMiddleware<AppBindings>((c, next) => {
  console.log("test middleware");
  return next();
});

const todoMiddlewares: InferMiddlewares<typeof routes> = {
  createTodo: [testMiddleware],
  getTodos: [testMiddleware],
};

export default todoMiddlewares;
