"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

export default function TanStackQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryclient}>
      <div>{children}</div>
    </QueryClientProvider>
  );
}
