import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { User } from "../objects/User";

interface Props {
  data: User[] | undefined;
}

const TestTasksTable: React.FC<Props> = ({ data }) => {
  const users =
    data?.map((user) => ({
      ...user,
      id: `f${(~~(Math.random() * 1e8)).toString(16)}`,
    })) ?? [];

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      flex: 1,
    },
    {
      field: "country",
      headerName: "Country",
      type: "string",
      flex: 1,
    },
    {
      field: "online",
      headerName: "Online",
      type: "boolean",
      flex: 1,
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }} elevation={0}>
        <Card variant="outlined">
          <CardHeader
            avatar={<Star />}
            title="TestTask table"
            subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            titleTypographyProps={{
              sx: {
                fontSize: 24,
              },
            }}
          />
          <Divider />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <DataGrid
                sx={{
                  border: 0,
                }}
                rows={users}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                slots={{
                  toolbar: GridToolbar,
                }}
                pageSizeOptions={[5, 10]}
                slotProps={{
                  toolbar: {
                    showQuickFilter: true,
                  },
                }}
              />
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default TestTasksTable;
