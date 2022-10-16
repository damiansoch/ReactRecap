import './App.css';
import ConditionalIfSeveralComponents from './Components/ConditionalIfSeveralComponents';
import Grandparend from './Components/Grandparend';
import { useState } from 'react';
import ValueContext from './ValueContext';

function App() {
  const [hide, setHide] = useState(false);
  return (
    <div className="App">
      <input type="checkbox" onChange={() => setHide(!hide)} /> Checkbox
      <ValueContext.Provider value={hide}>
        <Grandparend />
      </ValueContext.Provider>
      <ConditionalIfSeveralComponents />
    </div>
  );
}
export default App;
