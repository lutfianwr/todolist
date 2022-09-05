import swipe from "./swipe.json";
// import groovyWalkAnimation from "./groovyWalk.json";

import React from "react";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <Lottie
      className="w-full h-screen flex justify-center items-center"
      animationData={swipe}
      loop={true}
    />
  );
};

export default Loading;
