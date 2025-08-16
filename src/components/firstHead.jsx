import { BsMoonStars } from "react-icons/bs";
import React from 'react';

const FirstHead = () => {
  return (
    <>
      <div className="head-flex">
        <div className="heading-left">
            My Tasks
        </div>
        <div className="icon-right">
           {/* <Sun /> */}
           <BsMoonStars />
        </div>
      </div>
    </>
  );
};

export default FirstHead;
