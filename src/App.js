import React, { Suspense } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import TodoApp from "./components/TodoApp";
import AutoComplete from "./components/AutoComplete";
import CounterApp from "./components/CounterApp";
import LinearProgressBar from "./components/LinearProgressBar";
import CircularProgressBar from "./components/CircularProgressBar";

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
      {/* <CounterApp style={{background: 'red'}} /> */}
<CircularProgressBar />     
    </div>
  );
}

export default App;
