import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import { Providers } from "@/app/provider";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
// import IntialModal from "@/components/intialModal";

export const metadata: Metadata = {
  icons: "/favicon.ico",
  title: "Home",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          {/* <IntialModal /> */}
          <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <NavBar />
              {children}
              <Toaster
                toasterId="area1"
                position="bottom-left"
                reverseOrder={false}
                toastOptions={{ duration: 5000 }}
              />
              <Footer />
              <SpeedInsights />
              <Analytics />
            </ThemeProvider>
          </Providers>
          <Script
            src="https://mercury-stg.phonepe.com/web/bundle/checkout.js"
            strategy="afterInteractive"
            defer
            async
          />
        </body>
      </html>
    </>
  );
}
