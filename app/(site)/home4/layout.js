"use client";

import Footer from "../../components/(site)/siteLayout/footer";
import Header from "../../components/(site)/siteLayout/header";


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
