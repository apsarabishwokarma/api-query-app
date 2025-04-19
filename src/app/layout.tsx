import { Toaster } from "@/components/ui/sonner";
import TanStackQueryProvider from "../config/TanStackQueryProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TanStackQueryProvider>
          <Toaster richColors position="top-right" theme="light" />
          {children}
        </TanStackQueryProvider>
      </body>
    </html>
  );
}
