import { UserTable } from "../components/UserTable";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

export const TestTask = () => {
  return (
    <Paper sx={{ maxWidth: "1216px", margin: "0 auto" }}>
      <Card>
        <CardHeader
          avatar={<StarSharpIcon />}
          title={
            <Typography gutterBottom variant="h5" component="h5">
              TestTask table
            </Typography>
          }
          subheader={
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
              reiciendis perspiciatis illum soluta doloremque quia, nobis
              tenetur accusamus quas error esse non amet eius ex? Molestias
              minus libero esse deserunt.
            </Typography>
          }
        />
        <Divider />
        <CardContent>
          <UserTable />
        </CardContent>
      </Card>
    </Paper>
  );
};
