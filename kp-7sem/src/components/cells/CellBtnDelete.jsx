import del from "./delete.svg";

function CellBtnDelete({ deleteHandler, data }) {
  const ID = data.id;
  
  return (
    <div style={{display: 'flex', alignItems: 'center', width: '60px', height: '100%', justifyContent: 'center'}}>
      <img src={del} style={{cursor: 'pointer'}} onClick={() => deleteHandler(ID)}/>
    </div>
  );
}

export default CellBtnDelete;