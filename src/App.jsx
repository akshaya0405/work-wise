import { useState } from "react";
import { tabs } from "./constants/index";
import Home from "./TabsContent/Home";
import TodoList from "./TabsContent/TodoList";
import Timer from "./TabsContent/Timer";

function App() {
  const [tabState, setTabState] = useState(0);

  const toggleTab = (num) => {
    setTabState(num);
  };
  // useEffect(() => {}, [tab]);

  const renderTabContent = () => {
    switch (tabs[tabState].num) {
      case 1:
        return <Home />;
      case 2:
        return <TodoList />;
      case 3:
        return <Timer />;
      default:
        return null; // Default case if no matching tab title is found
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <nav className="rounded-2xl drop-shadow-xl p-1 backdrop-blur-md bg-white/50 overflow-hidden w- h-10 flex justify-center items-center space-x-6">
        {tabs.map((tab, index) => (
          <span
            key={index}
            className={`h-8 rounded-xl transition ease-linear duration-150 delay-50 cursor-pointer pt-1 pb-2 px-2 text-center  ${
              tabState === index ? "bg-gray-100 shadow-md" : null
            }`}
            onClick={() => toggleTab(index)}
          >
            {tab.title}
          </span>
        ))}
      </nav>

      <div className="">{renderTabContent()}</div>
    </div>
  );
}

export default App;
