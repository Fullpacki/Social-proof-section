import Header from "./components/Header";
import Rates from "./components/Rates";
import Survey from "./components/Survey";
import BackgroundTop from "./images/bg-pattern-top-desktop.svg";
import BackgroundBottom from "./images/bg-pattern-bottom-desktop.svg";

function App() {
  return (
    <div className="App flex flex-col py-20 px-8 gap-10 mx-auto max-w-md xl:flex-col xl:w-full xl:max-w-7xl xl:py-32 xl:gap-20">
      <div className="xl:flex xl:flex-row flex flex-col gap-10">
        <Header />
        <Rates />
      </div>
      <Survey />
      {/* This is the part for background */}
      <img
        className="absolute top-0 hidden xl:flex"
        src={BackgroundTop}
        alt=""
      />
      <img
        className="absolute bottom-0 hidden xl:flex"
        src={BackgroundBottom}
        alt=""
      />
      {/* This is the part for background */}
    </div>
  );
}

export default App;
