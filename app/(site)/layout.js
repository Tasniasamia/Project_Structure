import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import "../../global.scss";
export default function Layout({ children }) {
  return (
      <>
        <Header/>
        {children}
        <Footer/>
      </>
  );
}
