import { Navbar } from "@/Components/Shared/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/Shared/Footer";

export default function MainRootLayout({ children }) {
  return (
    <>
  

      <main className="grow">
        {children}
      </main>

      <Toaster />

     
    </>
  );
}