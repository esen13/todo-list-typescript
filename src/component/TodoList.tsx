import React from "react";
import {ITodo} from "../interfaces";

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove(id: number): void
}

export const TodoList:React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => {

    if (todos.length === 0) {
        return <p className="center">Пока дел нет!</p>
    }

    return(
        <ul className="tasks__list no-bullet">
            {todos.map((todo) => {
                const classes = ['tasks__item__toggle'];
                if(todos) {
                    classes.push('tasks__item__toggle--completed')
                }
                return(
                    <li className="tasks__item" key={todo.id}>
                        <button
                            className={classes.join(' ')}
                            onClick={() => onToggle(todo.id)}
                        >
                            {todo.title}
                        </button>
                        <button
                            className="tasks__item__remove button alert pull-right"
                            onClick={() => onRemove(todo.id)}
                        >
                            <i className="fa fa-times"></i>
                        </button>
                    </li>
                )
            })}
        </ul>
    )
};