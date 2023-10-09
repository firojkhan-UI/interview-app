import React, { Suspense } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import TodoApp from "./components/TodoApp";
import AutoComplete from "./components/AutoComplete";
import CounterApp from "./components/CounterApp";

const ComponentRender = React.lazy(() => import("./components/LazyLoading"));


function App() {
  return (
    <div style={{ paddingTop: "2.5rem" }}>
      {/* <Suspense fallback="Loading">
        <ComponentRender />
      </Suspense>
      <Accordion />
      <TodoApp /> */}
      {/* <AutoComplete /> */}
      <CounterApp />
    </div>
  );
}

export default App;
