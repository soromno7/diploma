import del from "./delete.svg";
import ban from "./ban.svg";

function CellBtnUsers({ toggleBlockHandler, deleteHandler, data }) {
  const ID = data.id;

  return (
    <div style={{display: 'flex', alignItems: 'center', width: '60px', height: '100%', justifyContent: 'space-between'}}>
      <img src={ban} style={{width: '22px', height: '22px', cursor: 'pointer'}} onClick={() => toggleBlockHandler(ID)}/>
      <img src={del} style={{cursor: 'pointer'}} onClick={() => deleteHandler(ID)}/>
    </div>
  );
}

export default CellBtnUsers;
