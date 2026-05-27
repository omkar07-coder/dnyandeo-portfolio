import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar";
import { LoadingProvider } from "../contexts/LoadingContext";
import ClientLayout from "./ClientLayout";
import { defaultSEO } from "./action/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = defaultSEO;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="antialiased">
        <LoadingProvider>
          <ClientLayout>
            <Navbar />
            {children}
            <Footer />
          </ClientLayout>
        </LoadingProvider>
      </body>
    </html>
  );
}
