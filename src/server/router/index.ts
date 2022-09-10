// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { pokeRouter } from "./pokemon";
export const appRouter = createRouter()
  .transformer(superjson)
  .merge("example.", exampleRouter)
  .merge("pokemon.", pokeRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
