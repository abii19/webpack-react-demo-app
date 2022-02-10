import React from "react";
import TestingComponent from "./components/TestingComponent.js";
import * as Images from "./assets/images";
import * as Icons from "./assets/icons/index.js";

const App = () => {
  console.log("Hello");
  return (
    <>
      <img src={Images.image_1} alt="" />
      <img src={Images.image_3} alt="" />
      <Icons.CrossIcon className="w-20 h-20 text-red-400" />
      <h1 className="text-6xl font-semibold underline text-red-300">
        Hello world!
        <Icons.SettingsIcon className="w-10 h-10 text-green-400" />
      </h1>
      <TestingComponent />
    </>
  );
};

export default App;
