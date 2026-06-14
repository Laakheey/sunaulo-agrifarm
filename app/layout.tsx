import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
