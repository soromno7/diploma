import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function Table({ URL, rows, cols, setRows, setUpdateTable, setSelectedRow, updateURL }) {
  const tableHandler = async () => {
    const res = await axios.get(URL);
    setRows(res.data);
  };

  const updateRow = async (URL, item) => {
    await axios
    .patch(`http://localhost:8080/${URL}/${item.id}`, item)
  }

  useEffect(() => {
    tableHandler();
    setUpdateTable(() => tableHandler);
  }, []);

  const defaultColDef = useMemo(() => {
    return {
      filter: true,
      editable: true,
    };
  }, []);

  const gridOptions = {
    onGridReady: (event) => event.api.sizeColumnsToFit()
  }

  return (
    <div className="ag-theme-alpine" style={{ height: 839 }}>
      <AgGridReact
        rowData={rows}
        columnDefs={cols}
        rowSelection={"single"}
        defaultColDef={defaultColDef}
        onRowClicked={(e) => setSelectedRow(e.data)}
        gridOptions={gridOptions}
        onCellEditingStopped={(e) => updateRow(updateURL, e.data)}
      />
    </div>
  );
}

export default Table;
