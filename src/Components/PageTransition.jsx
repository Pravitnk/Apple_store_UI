import React, { useEffect, useState } from "react";

const PageTransition = ({ activePage, children }) => {
  const [currentPage, setCurrentPage] = useState(activePage);
  const [transitoning, setTransitoning] = useState(false);

  useEffect(() => {
    if (currentPage !== activePage) {
      setTransitoning(true);
      setTimeout(() => {
        setCurrentPage(activePage);
        setTransitoning(false);
      }, 500);
    }
  }, [activePage, currentPage]);

  return (
    <div
      className="w-full h-full overflow-hidden relative"
      style={{ backgroundImage: "url(images/pages-bg.png)" }}
    >
      <div
        className={`absolute w-full h-full transition-transform duration-500 ${
          transitoning ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {children[currentPage]}
      </div>
    </div>
  );
};

export default PageTransition;
