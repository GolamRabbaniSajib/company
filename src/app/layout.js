import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import "@smastrom/react-rating/style.css";

import ChatButton from "@/components/UI/MessageBtn/MessageBtn";
import ParticlesContainer from "@/components/ParticlesContainer/ParticlesContainer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ByteOnSoft",
  description:
    "ByteOnSoft specializes in web development, UX/UI design, and  software development, delivering innovative digital solutions tailored to client needs. Our team focuses on creating seamless user experiences and high-performing applications to enhance business growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`font-rubik ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
          <ParticlesContainer />
        </div>
        <NavBar />
        <div className="min-h-screen relative">
          {children}

          <div className="fixed z-50 bottom-10 right-10">
            <ChatButton />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
