import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="app">
      <Provider>
        {" "}
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
