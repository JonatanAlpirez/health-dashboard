import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext/ThemeContext";

export const metadata: Metadata = {
  title: "Health Dashboard",
  description: "Dashboard para visualizar progreso de entrenamientos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
