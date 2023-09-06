import { Title } from "./components/Title";
import { Panel } from "./components/Panel";

function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-tr from-indigo-950 to-emerald-400">
      <div className="m-4 max-w-screen-xl overflow-hidden rounded-xl shadow-xl lg:m-8 lg:flex lg:h-[90vh] lg:w-10/12">
        <Title />
        <Panel />
      </div>
    </div>
  );
}

export default App;
