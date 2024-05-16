import "./App.scss";
import Afisha from "./components/Afisha";
import Directions from "./components/Directions";
import DownLoad from "./components/DownLoad";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Questions from "./components/Questions";

function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Afisha />
      <Directions/>
      <Questions/>
      <DownLoad/>
    </div>
  );
}

export default App;
