"use client";
import Footer from "../../components/layout/footer";
import Header from "../../components/siteLayout/header";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
