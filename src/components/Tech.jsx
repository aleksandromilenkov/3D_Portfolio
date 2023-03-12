import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technlogy) => (
        <div className="w-28 h-28" key={technlogy.name}>
          <BallCanvas icon={technlogy.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech);
