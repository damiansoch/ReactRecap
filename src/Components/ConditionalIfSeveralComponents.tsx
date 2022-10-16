import { useState } from "react";
import ProjectContent from "./ProjectContent";
import SelectNumber from "./SelectNumber";

const ConditionalIfSeveralComponents = () => {
  const [number, setNumber] = useState(1);
  return (
    <>
      <p>{number}</p>
      <SelectNumber onSetNumber={setNumber} />
      <SelectNumber maxValue={50} onSetNumber={setNumber} />
      <div>
        <ProjectContent>
          <button>This is a button as a parameter</button>
        </ProjectContent>
      </div>
    </>
  );
};

export default ConditionalIfSeveralComponents;
