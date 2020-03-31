import React, {useState} from "react";

type TodoFormProps = {
    onAdd(title: string): void
}

export const TodoForm:React.FC<TodoFormProps> = ({onAdd}) => {
    const [title, setTitle] = useState('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const addTodo = () => {
        if(!title.trim()) {
            return alert('введите название');
        }
        onAdd(title);
        setTitle('');
    };

    return(
        <div className="tasks__new input-group">
            <input
                type="text"
                placeholder="New task"
                className="input-group-field"
                value={title}
                onChange={changeHandler}
            />
            <span className="input-group-button">
              <button
                  className="button"
                  onClick={addTodo}
              >
                <i className="fa fa-plus"/> Add
              </button>
            </span>
        </div>
    )
};