import "./styles.scss";
import Header from "./components/header/header";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <div className="appWrapper">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
