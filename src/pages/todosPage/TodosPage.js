import React from 'react';
import Todo from "../../components/todo/Todo";
import style from './todos.module.css'

function TodosPage() {
    const todosArray = ["todo 1", "todo 2", "todo 3"]
    const todoComponents = todosArray.map((todos, index) => {
        return <Todo key={index} text={todos}/>;
    });
    return (
        <div>
            <span>{todoComponents}</span>
        </div>
    );
}

export default TodosPage;