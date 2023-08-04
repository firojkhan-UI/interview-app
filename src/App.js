import './App.css';
import Accordion from './components/Accordion';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div style={{paddingTop: "2.5rem"}}>
      <Accordion />
      <TodoApp />
    </div>
  );
}

export default App;
