import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Setup = () => {
  const rows = [
    { id: 1, lastName: "وارسته", firstName: "علی", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 12 },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const columns = [
    { field: "id", headerName: "شناسه", width: 70 },
    { field: "firstName", headerName: "نام", width: 200 },
    { field: "lastName", headerName: "نام خانوادگی", width: 230 },
    {
      field: "age",
      headerName: "سن",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "نام و نام خانوادگی",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 500,
      valueGetter: (params) =>
        `${params.getValue(params.id, "firstName") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`,
    },
  ];
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={{ direction: "rtl" }}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
};
export default Setup;
