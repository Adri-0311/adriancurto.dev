import Server from "lume/core/server.ts";
import notFound from "lume/middlewares/not_found.ts";

const rootFolder = `${Deno.cwd()}/_site`;

const server = new Server({
  port: 8000,
  root: rootFolder,
});

server.use(notFound({
  root: rootFolder
}));

server.start();

console.log("Listening on http://localhost:8000");