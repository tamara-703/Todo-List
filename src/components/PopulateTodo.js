import { useEffect, useState } from "react";
import UpdateTodo from "./UpdateTodo";

export default function PopulateTodo(props) {
  console.log("in populate");

  const [deletedItem, setDeletedItem] = useState();
  const [doneItem, setDoneItem] = useState([]);

  useEffect(() => {
    //populate the usestates at start of render
    setDeletedItem(props.todo);
  }, []);

  const handleDelete = (e, index, item) => {
    e.preventDefault();

    console.log(e);

    console.log(index);

    let oldDeleted = deletedItem;
    oldDeleted = [...deletedItem, props.todo.splice(index, 1)];

    setDeletedItem(oldDeleted);

    let oldDone = [];

    oldDone = item;

    console.log("done: " + oldDone);

    oldDone = [...doneItem, item];

    setDoneItem(oldDone);
  };

  return (
    <div className="main-container">
      <div classname='filled-form-container'>
        {props.todo ? (
          props.todo.map((item, index) => {
            return (
              <div key={index} className="items-display">
                <div className="item-text">{item}</div>
                <input
                  type="checkbox"
                  onClick={(e) => handleDelete(e, index, item)}
                ></input>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>

      <h1>Done</h1>
      {doneItem ? (
        <div classname='done-form-container'>
          {doneItem.map((item, index) => {
            return <div className="done-item-display" key={index}>
              <strike>{item}</strike>
              </div>;
          })}
        </div>
      ) : (
        <div>No items yet</div>
      )}

    </div>
  );
}

//const [updatedItem, setUpdatedItem] = useState([]);
//const handleUpdate = (e,item,index) => {

//     e.preventDefault();

//     let oldUpdated = [];

//     oldUpdated = [...updatedItem, {item: item, index: index}]

//     setUpdatedItem(oldUpdated);
//     console.log("updating item");
//     console.log(updatedItem);

//     // setDeletedItem([...deletedItem, deletedItem.splice(index, 1, updatedItem)]);

//     // console.log("after updating deleted items")
//     // console.log(deletedItem)

//   }
