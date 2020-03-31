import React, {useState} from 'react';
import {TodoList} from "./component/TodoList";
import {TodoForm} from "./component/TodoForm";
import {ITodo} from "./interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title:string) => {
    const newTodo = {
      title,
      id: Date.now(),
      completed: false
    };
    setTodos(prevState => [newTodo, ...prevState])
  };

  const toggleHandler = (id: number) => {
    setTodos(prevState => prevState.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo
    }))
  };

  const removeHandler = (id: number) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  };

  return (
    <div className="app">
      <section className="tasks">
        <h1>Tasks <small>(1)</small></h1>
        <TodoForm onAdd={addHandler}/>
        <div className="tasks__clear button-group pull-right">
          <button className="button warning small">
            <i className="fa fa-check"></i> Clear Completed
          </button>
          <button className="button alert small">
            <i className="fa fa-trash"></i> Clear All
          </button>
        </div>
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
      </section>
    </div>
  );
}

export default App;
