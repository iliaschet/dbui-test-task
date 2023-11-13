import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import type { Person } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

interface IGridTableInterface {
  data?: Person[];
  loading: boolean;
}

export default function GridTable({ data, loading }: IGridTableInterface) {
  const dataWithId = data?.map((row) => ({ id: uuidv4(), ...row }));
  const columns = [
    { field: "name", headerName: "Name", width: 237 },
    { field: "phone", headerName: "Phone", width: 237 },
    { field: "email", headerName: "Email", width: 237 },
    { field: "country", headerName: "Country", width: 207 },
    {
      field: "online",
      headerName: "Online",
      type: "boolean",
      float: "left",
      border: "solid 1px",
    },
  ];

  return (
    <DataGrid
      sx={{
        border: "none",
        width: 1185,
        "& .MuiDataGrid-footerContainer": {
          "& .MuiInputBase-root": {
            mr: "25px",
            ml: "0px",
          },
          "& .MuiSelect-select": {
            mr: "10px",
            ml: "0px",
            pl: "0px",
          },
          "& .MuiToolbar-root": {
            fontFamily: "Roboto",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "19.92px",
          },
          "& .MuiTablePagination-displayedRows": {
            fontSize: 12,
          },
          "& .MuiTablePagination-selectLabel": {
            fontSize: 12,
          },
          "& .MuiSvgIcon-root": {
            pl: "14px",
          },
          "& .MuiButtonBase-root": {
            pr: "px",
            width: 44,
          },
        },
      }}
      rows={dataWithId || []}
      columns={columns}
      loading={loading}
      slots={{ toolbar: GridToolbar }}
      slotProps={{
        toolbar: {
          sx: {
            width: "1184px",
            height: "36px",
            pt: 0,
            pr: 0,
            pb: 0,
            pl: "4px",
          },
          showQuickFilter: true,
          quickFilterProps: {
            sx: {
              width: "220px",
              height: "32px",
            },
          },
        },
      }}
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },
      }}
      pageSizeOptions={[5, 10, 15, 25, 30]}
    />
  );
}
