import React, { useState } from "react";
import Controls from "./Components/Controls";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Iphones from "./Pages/Iphones";
import MacBook from "./Pages/MacBook";
import Watches from "./Pages/Watches";
import IMac from "./Pages/IMac";
import PageTransition from "./Components/PageTransition";

const App = () => {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex);
  };

  const toggleZoom = () => {
    setFrameZoom(!frameZoom);
  };

  const resetPage = () => {
    setActivePage(0);
  };

  return (
    <div className="w-full h-screen grid place-items-center">
      <div
        className={`${
          frameZoom && "min-w-[97vw] min-h-[97vh]"
        } w-[70vw] h-[80vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-150 flex`}
      >
        <Navbar handeNavClick={handleNavClick} activePage={activePage} />
        <Controls
          toggleZoom={toggleZoom}
          frameZoom={frameZoom}
          resetPage={resetPage}
          activePage={activePage}
        />

        <div className="flex-grow">
          <PageTransition activePage={activePage}>
            <Home onNavigate={handleNavClick} />
            <Iphones />
            <MacBook />
            <Watches />
            <IMac />
          </PageTransition>
        </div>
      </div>
    </div>
  );
};

export default App;
