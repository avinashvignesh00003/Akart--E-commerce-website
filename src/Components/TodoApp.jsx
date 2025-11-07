import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { MdSaveAlt, MdAdd } from "react-icons/md";
import { useState } from "react";

const TodoApp = ({ user }) => {
  let [items, Setitems] = useState([
    { id: 1, label: "java", checked: true },
    { id: 2, label: "html &css", checked: true },
    { id: 3, label: "python", checked: false },
  ]);

  let [newItem, setNewItem] = useState("");
  let [edit, SetIsEditing] = useState(false);
  let [currentEleID, setCurrentEleID] = useState(null);

  let handleChecked = (id) => {
    let newListItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    Setitems(newListItems);
  };

  let handleUpdate = (id) => {
    let listItem = items.find((item) => item.id === id);
    setNewItem(listItem.label);
    SetIsEditing(true);
    setCurrentEleID(id);
  };

  let handleAddorSaveItem = () => {
    if (edit) {
      let newListItems = items.map((item) =>
        item.id === currentEleID ? { ...item, label: newItem } : item
      );
      Setitems(newListItems);
      setCurrentEleID(null);
      setNewItem("");
      SetIsEditing(false);
    } else {
      Setitems([
        ...items,
        { id: items.length + 1, label: newItem, checked: false },
      ]);
      setNewItem("");
    }
  };

  let handleADelete = (id) => {
    let newItems = items
      .filter((item) => item.id !== id)
      .map((item, index) => ({ ...item, id: index + 1 }));
    Setitems(newItems);
  };

  return (
    <main>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddorSaveItem}>
          {edit ? <MdSaveAlt color="green" /> : <MdAdd color="purple" />}
        </button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id} className="item">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleChecked(item.id)}
            />
            <label>{item.label}</label>
            <FiEdit
              className="svg2"
              role="button"
              tabIndex={0}
              onClick={() => handleUpdate(item.id)}
            />
            <FaTrashCan
              className="svg"
              role="button"
              tabIndex={0}
              onClick={() => handleADelete(item.id)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default TodoApp; 
