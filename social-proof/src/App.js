import Header from "./components/Header";
import Rates from "./components/Rates";
import Survey from "./components/Survey";
import BackgroundTop from "./images/bg-pattern-top-desktop.svg";
import BackgroundBottom from "./images/bg-pattern-bottom-desktop.svg";
import BackgroundMobileBottom from "./images/bg-pattern-bottom-mobile.svg";
import BackgroundMobileTop from "./images/bg-pattern-top-mobile.svg";

function App() {
  return (
    <div className="App flex flex-col py-20 px-8 gap-10 mx-auto max-w-md xl:flex-col xl:w-full xl:max-w-7xl xl:py-32 xl:gap-20 overflow-hidden">
      <div className="xl:flex xl:flex-row flex flex-col gap-10">
        <Header />
        <Rates />
      </div>
      <Survey />
      {/* This is the part for background */}
      <img
        className="absolute top-0 left-0 hidden xl:flex -z-10"
        src={BackgroundTop}
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 hidden xl:flex -z-10 "
        src={BackgroundBottom}
        alt=""
      />
      <img
        className="fixed top-0 left-0  xl:hidden w-[100%] -z-10"
        src={BackgroundMobileTop}
        alt=""
      />
      <img
        className="fixed bottom-0 right-0 xl:hidden w-[100%] -z-10"
        src={BackgroundMobileBottom}
        alt=""
      />
      {/* This is the part for background */}
    </div>
  );
}

export default App;
