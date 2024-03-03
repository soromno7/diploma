import { useState } from "react";
import Table from "../../components/Table";
import axios from "axios";
import CellBtnOrder from "../../components/cells/CellBtnOrder";

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
    { field: "firstName", headerName: "Имя" },
    { field: "lastName", headerName: "Фамилия" },
    { field: "orderDate", headerName: "Дата заказа" },
    { field: "orderTime", headerName: "Время заказа" },
    { field: "startDate", headerName: "С" },
    { field: "endDate", headerName: "По" },
    { field: "price", headerName: "Цена" },
    { field: "promocode", headerName: "Промокод" },
    { field: "dealer", headerName: "Дилер" },
    { field: "carName", headerName: "Автомобиль" },
    { field: "year", headerName: "Год" },
    { field: "engineCapacity", headerName: "Объём" },
    { field: "plateNumber", headerName: "Номер" },
    {
      field: "",
      headerName: "Действие",
      editable: false,
      cellRenderer: CellBtnOrder,
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
