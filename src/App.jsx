import React, { useState } from "react";
import Controls from "./Components/Controls";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Iphones from "./Pages/Iphones";
import MacBook from "./Pages/MacBook";

const App = () => {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const handeNavClick = (pageIndex) => {
    setActivePage(pageIndex);
  };

  const toggleZoom = () => {
    setFrameZoom(!frameZoom);
  };
  return (
    <div className="w-full h-screen grid place-items-center">
      <div
        className={`${
          frameZoom && "min-w-[97vw] min-h-[97vh]"
        } w-[70vw] h-[80vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-150 flex`}
      >
        <Navbar handeNavClick={handeNavClick} activePage={activePage} />
        <Controls toggleZoom={toggleZoom} frameZoom={frameZoom} />

        <div className="flex-grow">
          {/* <Home /> */}
          {/* <Iphones /> */}
          <MacBook />
        </div>
      </div>
    </div>
  );
};

export default App;
