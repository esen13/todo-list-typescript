import React from 'react';
import {TodoForm} from "./component/TodoForm";

const App: React.FC = () => {
  return (
    <div className="app">
      <section className="tasks">
        <h1>Tasks <small>(1)</small></h1>
        <TodoForm/>
        <div className="tasks__clear button-group pull-right">
          <button className="button warning small">
            <i className="fa fa-check"></i> Clear Completed
          </button>
          <button className="button alert small">
            <i className="fa fa-trash"></i> Clear All
          </button>
        </div>
        <ul className="tasks__list no-bullet">
          <li className="tasks__item">
            <button className="tasks__item__toggle tasks__item__toggle--completed">
              Make todo list
            </button>
            <button className="tasks__item__remove button alert pull-right">
              <i className="fa fa-times"></i>
            </button>
          </li>
          <li className="tasks__item">
            <button className="tasks__item__toggle">
              asdas
            </button>
            <button className="tasks__item__remove button alert pull-right">
              <i className="fa fa-times"></i>
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
