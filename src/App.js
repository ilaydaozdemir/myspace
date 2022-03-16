import Content from './component/Content';
import Footer from './component/Footer';
import Header from './component/Header';
import React, { useState } from "react";
import AddItem from './component/AddItem';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "eque porro quisquam est qui dolorem ipsum quia dolor sit amet,",
    },
    {
      id: 2,
      checked: false,
      item: "item 2",
    },
    {
      id: 3,
      checked: false,
      item: "item 3",
    },
  ]);
  const [newItem, setNewItem] = useState('')
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));

  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    //add ıtem
    setNewItem('');
  }
  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        handleSubmit={handleSubmit}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
