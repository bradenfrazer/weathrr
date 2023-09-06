import { useState } from "react";
import { Title } from "./components/Title";
import { Panel } from "./components/Panel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-tr from-indigo-950 to-emerald-400">
      <div className="m-4 max-w-screen-xl overflow-hidden rounded-xl shadow-xl sm:m-8 sm:flex sm:h-[90vh] sm:w-10/12">
        <Title />
        <Panel />
      </div>
    </div>
  );
}

export default App;
