import { Typography, Box, CircularProgress } from "@mui/material";
import { useGetUsersQuery } from "../api/userApi";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { CustomGridToolbar } from "../components/CustomGridToolbar";
import { User, UserRawData } from "../api/types";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { ReactElement } from "react";

export const TestTasks = () => {
  const { data: users, isLoading, isSuccess } = useGetUsersQuery();

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!isSuccess) {
    return (
      <Typography variant="h3" component="h3">
        {"Oops, something went wrong :( Try reloading the page"}
      </Typography>
    );
  }

  const rows = users;
  const keys = Object.keys(users[0]) as Array<keyof (typeof users)[0]>;
  const columns = keys
    .filter((key): key is keyof UserRawData => key !== "id")
    .map((userKey) => ({
      field: userKey,
      headerName: `${userKey[0].toUpperCase()}${userKey.slice(1)}`,
      flex: 1,
      renderCell: ({ value }: GridRenderCellParams<User, ReactElement>) => {
        if (userKey !== "online") {
          return value;
        }
        return value ? <DoneIcon /> : <CloseIcon />;
      },
    }));

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      slots={{
        toolbar: CustomGridToolbar,
      }}
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },
      }}
      pageSizeOptions={[5, 10, 25]}
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        "& .MuiDataGrid-main": {
          px: 2,
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          "& .MuiTablePagination-selectLabel": {
            color: "#00000099",
          },
        },
        "& .MuiTablePagination-toolbar": {
          pr: 2,
          "& > *": {
            fontSize: 12,
          },
          "& .MuiTablePagination-input": {
            ml: 0,
          },
        },
      }}
    />
  );
};
