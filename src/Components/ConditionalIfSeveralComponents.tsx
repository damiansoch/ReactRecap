import { useState } from 'react';
import CSSExamples from './CSSExamples';
import ProjectContent from './ProjectContent';
import SelectNumber from './SelectNumber';
import UseEffectExamples from './UseEffectExamples';

const ConditionalIfSeveralComponents = () => {
  const [number, setNumber] = useState(1);

  const [hide, setHide] = useState(false);

  return (
    <>
      <input type="checkbox" onChange={() => setHide(!hide)} />
      Hide
      {hide ? null : <UseEffectExamples />}
      <CSSExamples />
      <p>{number}</p>
      <SelectNumber
        onSetNumber={setNumber}
        selectContent={(value) => `Select ${value}`}
      />
      <div>
        <ProjectContent
          bottomPart={
            <>
              <span>This is the end!</span>
            </>
          }
        >
          <button>This is a button as a parameter</button>
          <h2>other content</h2>
        </ProjectContent>
      </div>
    </>
  );
};

export default ConditionalIfSeveralComponents;
