import { useGetAllUsersQuery } from "../services/users.api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { CustomToolbar } from "./CustomToolbar";
import { Data } from "../entities/userDTO";

import Check from "../assets/icons/CheckFilled.svg";
import Close from "../assets/icons/CloseFilled.svg";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "phone", headerName: "Phone", minWidth: 170, flex: 1 },
  {
    field: "email",
    headerName: "Email",
    minWidth: 220,
    flex: 1,
  },
  {
    field: "country",
    headerName: "Country",
    minWidth: 170,
    flex: 1,
  },
  {
    field: "online",
    headerName: "Online",
    minWidth: 170,
    flex: 1,
    renderCell: (params) => {
      const path = params.value ? Check : Close;
      const alt = params.value ? "Yes" : "No";
      return <img src={path} alt={alt} />;
    },
  },
];

export function UserTable() {
  const { data } = useGetAllUsersQuery<Record<"data", Data[]>>("");

  function getRowId(row: Data) {
    return row.phone;
  }

  return (
    <DataGrid
      sx={{ border: "none" }}
      getRowId={getRowId}
      columns={columns}
      rows={data || []}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5, 15, 25]}
      slots={{
        toolbar: CustomToolbar,
      }}
    />
  );
}
