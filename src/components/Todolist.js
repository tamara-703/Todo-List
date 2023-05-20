import {useRef, useState} from 'react';
import PopulateTodo from './PopulateTodo';

export default function Todolist()
{
    const [todo, setTodo] = useState([]);
    const input = useRef();

    function handleAdd(e)
    {
        e.preventDefault();

        //store incoming input from form using a local variable
        let userInput = input.current.value; //input value is stored in the declared useRef() variable

        console.log("user input: " + userInput)

        if(userInput === "")
        {
            return;
        }

        let oldTodo = userInput;

        oldTodo = [...todo, userInput];

        //set todo list to the incoming variable
        setTodo(oldTodo);

        console.log("in handleadd")
        console.log(todo)
    }

    const handleClear = (e) => {

        e.preventDefault();

        if(e.target)
        {
            setTodo([]);
        }

    }

    return (
        <div>
            <form onSubmit={handleAdd}>
                <h1 className='todo-header'>Tamara's todo List</h1>
                <div className='form-container'>
                <label>Add Todo</label><br></br>
                <input type="text" placeholder="add todo" ref={input} width='200px' style={{marginBottom: 30 + 'px'}}></input>
                <div className='buttons-container'>
                <input type="submit" className="btn btn-success" value="add" ></input>
                <button type='button'  className="btn btn-danger" onClick={(e) => handleClear(e)}>Clear list</button>
                </div>
                </div>
                {todo != "" ? <PopulateTodo todo={todo} /> : <h1 className='alt-header'><i>There is nothing on your todo list</i></h1>}

            </form>
        </div>
    )
}
