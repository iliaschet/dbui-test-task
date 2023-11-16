import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

export const Dashboard = () => {
  return (
    <Container sx={{ width: 1216, maxHeight: 513, mt: "96px", mx: "auto" }}>
      <Typography variant="h2" component="h2" textAlign={"center"}>
        Cooming soon
      </Typography>
    </Container>
  );
};
