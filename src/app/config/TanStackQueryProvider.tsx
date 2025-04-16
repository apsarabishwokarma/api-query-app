import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryclient = new QueryClient();
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
