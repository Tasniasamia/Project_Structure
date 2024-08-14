"use client";
import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
