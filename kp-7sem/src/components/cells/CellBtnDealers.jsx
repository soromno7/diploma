function CellBtnDealers({ deleteHandler, data }) {
  const ID = data.id;

  return <button onClick={() => deleteHandler(ID)}>1</button>;
}

export default CellBtnDealers;