import { useState } from "react";
import { Title } from "./components/Title";
import { Panel } from "./components/Panel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-950 to-emerald-400">
      <div className="m-4 sm:m-8 sm:flex sm:w-10/12 max-w-screen-xl sm:h-[90vh] shadow-xl rounded-xl overflow-hidden">
        <Title />
        <Panel />
      </div>
    </div>
  );
}

export default App;
