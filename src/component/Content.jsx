import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  //list & keys
  return (
    //fragment
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </>
  );
};

export default Content;
