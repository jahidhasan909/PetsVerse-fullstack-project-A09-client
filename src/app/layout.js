import { Fredoka, Italianno } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/Components/Shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/Shared/Footer";


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
      className={`${fredoka.className}  h-full antialiased`}
    >
      <body className="min-h-full bg-[#F7EFE8] bg-linear-to-r from-[]  flex flex-col">
        
        <main className=" grow">{children}</main>
        <Toaster />
        
      </body>
    </html>
  );
}

// bg-white
// bg-[#FAF4EE]