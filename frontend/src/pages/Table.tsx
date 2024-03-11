import { useGetAllUsersQuery } from "../store/GetApi";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";
import { User } from "../types/types";

const Table = () => {
  const { data: users, isLoading, isError } = useGetAllUsersQuery("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching users.</div>;
  }
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "country", headerName: "Country", width: 150 },
    { field: "online", headerName: "Online", width: 120, type: "boolean" },
  ];
  const rows: User[] = users.map((user: User) => ({
    id: uuidv4(),
    name: user.name,
    phone: user.phone,
    email: user.email,
    country: user.country,
    online: user.online,
  }));

  return (
    <div>
      <div
        className="CardElement"
        style={{
          borderRadius: "4px",
        }}
      >
        <div className="CardHeader" style={{ display: "flex" }}>
          <div>icon</div>
          <div className="Content">
            <h2>TestTask table</h2>
            <p>
              TestTask table Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
          </div>
        </div>
        <DataGrid
          sx={{
            padding: "16px",
            "& .MuiDataGrid-main": {
              "& .MuiDataGrid-columnHeaders": {
                display: "flex",
                justifyContent: "space-around",
              },
            },
          }}
          columns={columns}
          rows={rows}
          slots={{
            toolbar: GridToolbar,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 15, 25, 30]}
        />
      </div>
    </div>
  );
};

export default Table;
