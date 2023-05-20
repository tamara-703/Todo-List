import { useRef, useState } from "react";
import Todolist from "./Todolist";


export default function UpdateTodo(props)
{
    console.log("in update");
    console.log(props);
    const input = useRef();

    const [updated, setUpdated] = useState({
        item: props.item,
        index: props.index
    });

    const handleUpdate = (e) => {

        e.preventDefault();

        let userInput = input.current.value;

        setUpdated({
            item: userInput,
            index: props.index
        })

    }

    function form()
    {

        return (
            <div>
                <form onSubmit={handleUpdate}>
                    <label>Update item: {props.index}. {props.item}</label>
                    <input type="text" ref={input}></input>
                    <input type="submit" value="submit"></input>
                </form>

                <Todolist updated={updated} />
            </div>
        )

    }

    return (
        <div>
            <div>Update</div>
            {/* {props ? form() : <div></div>} */}
        </div>
    )
}
