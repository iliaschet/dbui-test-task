import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { UserTable } from "../components/UserTable";

import Star from "../assets/icons/starIcon.svg";

export const TestTask = () => {
  return (
    <Paper>
      <Card>
        <CardHeader
          avatar={<img src={Star} alt="Avatar" />}
          title={
            <Typography gutterBottom variant="h5" component="h5">
              Test Tasks
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
