import * as trpc from "@trpc/server";

export const apiRouter = trpc.router().query("hello", {
  resolve: async (req) => {
    return {
      text: "Hi Cwc",
    };
  },
});

export type ApiRouter = typeof apiRouter;

import * as trpcExpress from "@trpc/server/adapters/express";

export const API = trpcExpress.createExpressMiddleware({
  router: apiRouter,
});
