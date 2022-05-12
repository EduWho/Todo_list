
import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form.js'
import TodoList from './components/TodoList'


function App() {
  // States stuff
  const [ inputText, setInputText]= useState("");
  const [todos, setTodos] = useState([ ]);
  const [status, setStatus]= useState('all');
  const [filteredTodos,setFilteredTodos] = useState([ ]);

//corre apenas quando inicia 
useEffect(()=>{ 
  getTodos();
},[])

//corre sempre que se altera o todos ou o status
  useEffect (()=>{
    filterHandler();
    saveLocalTodos();
  },[todos,status]);

  //Functions
   const filterHandler = () => {
     switch(status){
       case 'completed':
         setFilteredTodos(todos.filter(todo =>todo.completed === true))
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo =>todo.completed === false))
          break;
        default:
          setFilteredTodos(todos)
          break;
     }
   };
   const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
   }

   const getTodos =()=>{
     if(localStorage.getItem("todos")===null){
       localStorage.setItem('todos',JSON.stringify([]))
     }else{
     let localTodos= JSON.parse(localStorage.getItem("todos"))
     setTodos(localTodos)}
   }
    
  

  
  


  return (
    <div className="App">
     <header>
       <h1>Edu Todo List</h1>
     </header>
     <Form 
        inputText={inputText} 
        setInputText={setInputText}
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus}
        
     />
     <TodoList 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos}  
      />
    </div>
  );
}

export default App;
