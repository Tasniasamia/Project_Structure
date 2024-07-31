import Header from "../components/layout/header";
import "../../global.scss";
export default function Layout({ children }) {
  return (
      <>
        <Header/>
        {children}
      </>
  );
}
