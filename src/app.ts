import { apiReference } from "@scalar/hono-api-reference";
import todosRouter from "./api/todos/todos.index.js";
import createApp from "./lib/create-app.js";

const app = createApp();

app.get("/", (c) => {
  return c.html(`
    <html>
      <style>
        * {
        font-family: system-ui, sans-serif;
        body {
          width: fit-content;
          margin: 2rem auto;
        }
      @media (prefers-color-scheme: dark) {
      body {
        background-color: #121212;
        color: #ffffff;
      }
      a {
      color: lightblue;
      }
      h2 {
      margin-top: 4rem;
      }
      }
      }
      </style>
      <head>
        <title>Kanbased API</title>
      </head>
      <body>
        <h1>Api for <a href="https://kanbased.com" target"_blank" rel="noopener noreferrer">Kanbased App</a></h1>
        <h2>Documentation</h2>
        <ul>
          <li><a href="/reference">Scalar Documentation</a></li>
          <li><a href="/doc">OpenAPI Documentation</a></li>
        </ul>
      </body>
    </html>
    `)
});



app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "0.0.1",
    title: "Kanbased API",
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