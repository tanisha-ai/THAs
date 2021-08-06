import "./style.css";
import { useCallback, useState } from "react";

function Main() {
  const [isTextChanged, setIsTextChanged] = useToggle();

  return (
    <body>
      <button className="btn" onClick={setIsTextChanged}>
      {isTextChanged ? "Login" : "Logout"}
    </button>
    </body>
  );
}

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);
  return [state, toggle];
};

function App() {
  return (
    <div>
      <Main />
     
    </div>
  );
}

export default App;
