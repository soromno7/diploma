import { useEffect, useState } from "react";
import Table from "../../components/Table";
import {
  Button,
} from "@mui/material";
import axios from "axios";

function MaintenancesPage() {
  const [rows, setRows] = useState([]);

  const [updateTable, setUpdateTable] = useState(() => {});
  const [selRow, setSelRow] = useState();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:8080/maintenance/delete/${selRow.id}`)
      .then(() => updateTable());
  };

  const cols = [
    { field: "id", headerName: "ID" },
    { field: "userID", headerName: "ID пользователя" },
    { field: "firstName", headerName: "Имя" },
    { field: "lastName", headerName: "Фамилия" },
    { field: "address", headerName: "Адрес" },
    { field: "date", headerName: "Дата" },
    { field: "carID", headerName: "ID автомобиля" },
    { field: "carName", headerName: "Автомобиль" },
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
      <div className="btnContainer">
        <Button
          variant="contained"
          style={{ backgroundColor: "white", color: "black" }}
          size="small"
          onClick={deleteHandler}
        >
          Удалить
        </Button>
      </div>
      <Table
        cols={cols}
        rows={rows}
        setRows={setRows}
        URL={"http://localhost:8080/maintenance/get-all"}
        setUpdateTable={setUpdateTable}
        setSelectedRow={setSelRow}
        selRow={selRow}
        updateURL={""}
      />
    </div>
  );
}

export default MaintenancesPage;
