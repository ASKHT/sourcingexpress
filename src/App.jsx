import React from "react";
import Header from "./components/Header";
import Midcomponent from "./components/Midcomponent";
const App = () => {
  return (
    <div className="flex flex-col gap-2 pb-[4rem] w-[100vw]">
      <Header />
      <Midcomponent />
    </div>
  );
};

export default App;
