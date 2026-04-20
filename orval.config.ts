import { defineConfig } from "orval";

export default defineConfig({
  innovationLabFrontend: {
    input: {
      target: "./public/innovation-lab-api-specs.json",
    },
    output: {
      target: "./src/lib/services/generated/index.ts",
      schemas: "./src/lib/services/generated/schemas",
      mode: "split",
      indexFiles: true,
      client: "react-query",
      httpClient: "fetch",
      clean: true,
      override: {
        query: {
          useQuery: true,
          useMutation: true,
          useInfinite: true,
        },
      },
    },
  },
});
