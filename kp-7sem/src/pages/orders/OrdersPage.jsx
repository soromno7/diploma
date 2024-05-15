import { useState } from "react";
import Table from "../../components/Table";
import axios from "axios";
import CellBtnDelete from "../../components/cells/CellBtnDelete";

function OrdersPage() {
  const [rows, setRows] = useState([]);

  const [updateTable, setUpdateTable] = useState(() => {});
  const [selRow, setSelRow] = useState();

  const deleteHandler = async (orderID) => {
    await axios
      .delete(`http://localhost:8080/order/delete/${orderID}`)
      .then(() => updateTable());
  };

  const cols = [
    { field: "id", headerName: "ID" },
    { field: "userID", headerName: "ID Клиента" },
    { field: "carID", headerName: "ID Авто" },
    { field: "start", headerName: "Начало" },
    { field: "end", headerName: "Конец" },
    { field: "price", headerName: "Цена" },
    {
      field: "",
      headerName: "Действие",
      editable: false,
      cellRenderer: CellBtnDelete,
      cellRendererParams: { deleteHandler },
    },
  ];

  return (
    <div>
      <Table
        cols={cols}
        rows={rows}
        setRows={setRows}
        URL={"http://localhost:8080/order/get-all"}
        setUpdateTable={setUpdateTable}
        setSelectedRow={setSelRow}
        selRow={selRow}
        updateURL={"order/update"}
      />
    </div>
  );
}

export default OrdersPage;
