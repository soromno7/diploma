import { useState } from "react";
import Table from "../../components/Table";

function UserOrdersPage() {

  const userData = sessionStorage.user;
  const id = Number(JSON.parse(userData).id);

  const [rows, setRows] = useState([]);

  const [updateTable, setUpdateTable] = useState(() => {});
  const [selRow, setSelRow] = useState();

  const cols = [
    { field: "orderDate", headerName: "Дата заказа" },
    { field: "startDate", headerName: "С" },
    { field: "endDate", headerName: "По" },
    { field: "price", headerName: "Цена" },
    { field: "promocode", headerName: "Промокод" },
    { field: "dealer", headerName: "Дилер" },
    { field: "carName", headerName: "Автомобиль" },
    { field: "year", headerName: "Год выпуска" },
    { field: "engineCapacity", headerName: "Объём" },
    { field: "fuel", headerName: "Топливо" },
    { field: "gearbox", headerName: "Коробка" },
    { field: "plateNumber", headerName: "Номер" },
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
        URL={`http://localhost:8080/order/get-by-user/${id}`}
        setUpdateTable={setUpdateTable}
        setSelectedRow={setSelRow}
        selRow={selRow}
        updateURL={""}
      />
    </div>
  );
}

export default UserOrdersPage;
