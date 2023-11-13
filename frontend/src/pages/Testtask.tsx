import { useGetListQuery } from "../services/api";
import GridTable from "../components/GridTable/GridTable";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { StarSharp } from "../ui-kit/svg/icon";

export const Testtask = () => {
  const { data, error, isLoading } = useGetListQuery();
  return (
    <div className="App">
      {error ? (
        <>Oh no, error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
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
            <GridTable data={data} loading={isLoading} />
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
};
