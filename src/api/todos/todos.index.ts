import { createAuthenticatedRouter } from "../../lib/router.js";
import { registerRouteHandlers } from "../../lib/utils.js";
import routes from "./todos.routes.js";
import handlers from "./todos.handler.js";
import todoMiddlewares from "./todos.middleware.js";

const todosRouter = createAuthenticatedRouter();

registerRouteHandlers(todosRouter, routes, todoMiddlewares, handlers);

export default todosRouter; 