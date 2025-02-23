import { createAuthenticatedRouter } from "../../lib/router.js";
import { registerRouteHandlers } from "../../lib/utils.js";
import routes from "./todos.routes.js";
import handlers from "./todos.handler.js";

const todosRouter = createAuthenticatedRouter();

registerRouteHandlers(todosRouter, routes, undefined, handlers);

export default todosRouter; 