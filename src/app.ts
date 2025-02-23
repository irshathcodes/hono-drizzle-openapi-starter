import { apiReference } from "@scalar/hono-api-reference";
import todosRouter from "./api/todos/todos.index.js";
import createApp from "./lib/create-app.js";

const app = createApp();

app.get("/", (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hono + Drizzle</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            font-family: system-ui, sans-serif;
          }
          body {
            padding: 2rem;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.5;
          }
          h1 {
            margin-bottom: 1rem;
            color: #3b82f6;
          }
          a {
            color: #3b82f6;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          ul {
            margin: 1rem 0;
            list-style: inside;
          }
          @media (prefers-color-scheme: dark) {
            body {
              background: #111827;
              color: #fff;
            }
          }
        </style>
      </head>
      <body>
        <h1>Hono + Drizzle Starter</h1>
        <ul>
          <li><a href="/reference">API Reference</a></li>
          <li><a href="/doc">OpenAPI Spec</a></li>
        </ul>
      </body>
    </html>
  `)
});

app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "0.0.1",
    title: "Hono + Drizzle API",
  },
});

app.get(
  "/reference",
  apiReference({
    theme: "kepler",
    layout: "classic",
    defaultHttpClient: {
      targetKey: "javascript",
      clientKey: "fetch",
    },
    spec: {
      url: "/doc",
    },
  })
);

const routes = [
  todosRouter,
];

routes.forEach((route) => {
  app.route("/api", route);
});

export default app;