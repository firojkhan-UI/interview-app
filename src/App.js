import React, { Suspense } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import TodoApp from "./components/TodoApp";

const ComponentRender = React.lazy(() => import("./components/LazyLoading"));


function App() {
  return (
    <div style={{ paddingTop: "2.5rem" }}>
      <Suspense fallback="Loading">
        <ComponentRender />
      </Suspense>
      <Accordion />
      <TodoApp />
    </div>
  );
}

export default App;
