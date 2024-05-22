import { useEffect, useState } from "react";
import Table from "../../components/Table";
import axios from "axios";
import CellBtnDelete from "../../components/cells/CellBtnDelete";

function ServicesPage() {
  const [rows, setRows] = useState([]);

  const [updateTable, setUpdateTable] = useState(() => {});
  const [selRow, setSelRow] = useState();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:8080/service/delete/${selRow.id}`)
      .then(() => updateTable());
  };

  const cols = [
    { field: "id", headerName: "ID" },
    { field: "user.id", headerName: "ID пользователя" },
    { field: "address", headerName: "Адрес" },
    { field: "date", headerName: "Дата" },
    { field: "order.id", headerName: "ID заказа" },
    {
      field: "",
      headerName: "Действие",
      editable: false,
      cellRenderer: CellBtnDelete,
      cellRendererParams: { deleteHandler },
    },
  ];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Table
        cols={cols}
        rows={rows}
        setRows={setRows}
        URL={"http://localhost:8080/service/get-all"}
        setUpdateTable={setUpdateTable}
        setSelectedRow={setSelRow}
        selRow={selRow}
        updateURL={""}
      />
    </div>
  );
}

export default ServicesPage;
