import React from "react";
import useViewport from "CustomHooks/UseViewport.js";
import TrainingAsAnEvent from "./TrainingAsAnEvent.js";
import TrainingAsAnEventMobile from "./TrainingAsAnEventMobile.js";

const TrainingContent = () => {
  const { width } = useViewport();
  const breakpoint = 824;

  return width < breakpoint ? (
    <TrainingAsAnEventMobile />
  ) : (
    <TrainingAsAnEvent />
  );
};

export default TrainingContent;
