function CellBtns({ toggleBlockHandler, deleteHandler, data }) {
  const ID = data.id;

  return (
    <>
      <button onClick={() => toggleBlockHandler(ID)}>1</button>
      <button onClick={() => deleteHandler(ID)}>2</button>
    </>
  );
}

export default CellBtns;
