import { Fredoka, Italianno } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/Components/Shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/Shared/Footer";
import { Providers } from "@/Components/Providers/providers";


const fredoka = Fredoka({
  subsets: ["latin"],
});
export const italianno = Italianno({
  subsets: ["latin"],
  weight: '400',
});




export default function MainRootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fredoka.className}  h-full antialiased`}
    >
      <body className="min-h-full  bg-[#F2E8DC] dark:bg-[#0B1120]  flex flex-col">

        <main className=" grow">
          <Providers>
            {children}
          </Providers>
        </main>
        <Toaster />

      </body>
    </html>
  );
}

