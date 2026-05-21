import { Fredoka } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/Components/Shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/Shared/Footer";


const fredoka = Fredoka({
  subsets: ["latin"],
});


export default function AuthRootLayout({ children }) {
  return (
    <html
      lang="en"
      
      className={`${fredoka.className}  h-full antialiased`}
    >
      <body className="min-h-full  flex flex-col">
        <Navbar></Navbar>
        <main className=" grow">{children}</main>
        <Toaster />
        <Footer></Footer>
      </body>
    </html>
  );
}
