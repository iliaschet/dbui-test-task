import React from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useGetListQuery } from "../api/userApi";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "phone", headerName: "Phone", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "country", headerName: "Country", flex: 1 },
  {
    field: "online",
    headerName: "Online",
    flex: 1,
    renderCell: (params) => {
      const icon = params.value ? <DoneIcon /> : <CloseIcon />;
      return icon;
    },
  },
];

export const UserTable = () => {
  const { data, isLoading, error } = useGetListQuery();

  if (error) {
    return (
      <div>
        <Typography variant="body1" color="error">
          {"An error occurred while fetching data."}
        </Typography>
      </div>
    );
  }

  return (
    <DataGrid
      getRowId={(row) => row.phone}
      rows={data || []}
      loading={isLoading}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      slots={{
        toolbar: GridToolbar,
      }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
        },
      }}
      pageSizeOptions={[5, 15, 25]}
      checkboxSelection
      autoHeight
      sx={{
        border: 0,
      }}
    />
  );
};
