import React from 'react'
import Todo from './Todo'


const TodoList = (props) =>{
const todos = props.todos
const setTodos= props.setTodos



    return(
        <div className='todo-container'>
            <ul className='todo-list'>
                {props.filteredTodos.map((todo) =>(
                    <Todo
                    key={todos.id} 
                    text={todo.text}
                    settodos={setTodos} 
                    todos={todos}
                    todo={todo}/>
                    
                ))}
                
            </ul>
        </div>
    );
}
 
export default TodoList;