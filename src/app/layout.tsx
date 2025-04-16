import TanStackQueryProvider from "./config/TanStackQueryProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <TanStackQueryProvider>
        <body>{children}</body>
      </TanStackQueryProvider>
    </html>
  );
}
