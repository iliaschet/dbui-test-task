import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useGetProductsQuery } from "../store/users/listUserApi";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import { StarSharp } from "@mui/icons-material";
interface oldArrInterface {
  name: string;
  phone: string;
  email: string;
  country: string;
  online: boolean;
}
interface newArrInterface {
  name: string;
  phone: string;
  email: string;
  country: string;
  online: boolean;
  id: number;
}
export const TestTask = () => {
  const { data } = useGetProductsQuery("list");
  let newArr: newArrInterface[] = [];
  let id = 0;
  data &&
    data.map((el: oldArrInterface) => {
      let obj: newArrInterface = {
        name: el.name,
        phone: el.phone,
        email: el.email,
        country: el.country,
        online: el.online,
        id: id++,
      };
      newArr.push(obj);
    });
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 236,
      editable: false,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 236,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 236,
      editable: false,
    },
    {
      field: "country",
      headerName: "Country",
      width: 236,
    },
    {
      field: "online",
      headerName: "Online",
      type: "boolean",
      float: "left",
    },
  ];
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Card sx={{ width: 1216, maxHeight: 513, mt: "96px", mx: "auto" }}>
        <CardHeader
          titleTypographyProps={{
            fontFamily: "Roboto",
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "133.4%",
          }}
          subheaderTypographyProps={{
            fontFamily: "Roboto",
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "143%",
            letterSpacing: "0.17",
          }}
          avatar={<StarSharp />}
          title="TestTask table"
          subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ></CardHeader>
        <Divider />
        <CardContent sx={{ maxHeight: 428, p: "16px" }}>
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
            rows={newArr}
            columns={columns}
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
            pageSizeOptions={[5, 10]}
          />
        </CardContent>
      </Card>
    </Box>
  );
};
