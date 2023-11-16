import { useGetListQuery } from "../services/api";
import GridTable from "../components/GridTable/GridTable";
import Loader from "../components/Loader/Loader";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { StarSharp } from "../ui-kit/svg/icon";
import Box from "@mui/material/Box";

export const Task = () => {
  const { data, error, isLoading } = useGetListQuery();
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
    <div className="App">
      {(() => {
        if (error) {
          return (
            <Box sx={{ mx: "auto", mt: "96px", width: "100px" }}>
              Oh no, error
            </Box>
          );
        } else if (isLoading) {
          return (
            <Box sx={{ display: "flex", mt: "96px" }}>
              <Loader />
            </Box>
          );
        } else if (data) {
          return (
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
                <GridTable data={data} loading={isLoading} columns={columns} />
              </CardContent>
            </Card>
          );
        } else {
          return null;
        }
      })()}
    </div>
  );
};
