import { useState } from "react";
import Table from "../../components/Table";
import axios from "axios";
import CellBtnDelete from "../../components/cells/CellBtnDelete";
import { Button } from "@mui/material";


function RecordsPage() {
  const [rows, setRows] = useState([]);

  const [updateTable, setUpdateTable] = useState(() => {});
  const [selRow, setSelRow] = useState();

  const deleteHandler = async (recordID) => {
    await axios
      .delete(`http://localhost:8080/record/delete/${recordID}`)
      .then(() => updateTable());
  };

  const createHandler = async () => {
    await axios
    .post("http://localhost:8080/record/create")
    .then((res) => {
      console.log(res);
    })
    .then(() => updateTable())
    .catch((err) => {
      console.log(err);
    });
  }

  const cols = [
    { field: "id", headerName: "ID" },
    { field: "date", headerName: "Дата" },
    { field: "orders_quantity", headerName: "Заказы" },
    { field: "orders_revenue", headerName: "Выручка" },
    { field: "users_quantity", headerName: "Пользователи" },
    { field: "cars_quantity", headerName: "Автомобили" },
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
      <div className="btnContainer">
        <Button
          variant="contained"
          style={{ backgroundColor: "white", color: "black" }}
          size="small"
          onClick={createHandler}
        >
          Добавить
        </Button>
      </div>
      <Table
        cols={cols}
        rows={rows}
        setRows={setRows}
        URL={"http://localhost:8080/record/get-all"}
        setUpdateTable={setUpdateTable}
        setSelectedRow={setSelRow}
        selRow={selRow}
        updateURL={"order/update"}
      />
    </div>
  );
}

export default RecordsPage;
