import { Navbar } from "@/Components/Shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/Shared/Footer";

export default function MainRootLayout({ children }) {
  return (
    <>

      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main className=" grow">{children}</main>
        <Toaster />
        <Footer></Footer>
      </body>


    </>
  );
}