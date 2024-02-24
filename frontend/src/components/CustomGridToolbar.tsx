import { Box, Typography } from "@mui/material";
import { GridToolbar, GridToolbarQuickFilter } from "@mui/x-data-grid";
import StarSharpIcon from "@mui/icons-material/StarSharp";

export const CustomGridToolbar = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 2,
          borderBottom: "1px solid",
          borderColor: "#0000001F",
        }}
      >
        <StarSharpIcon></StarSharpIcon>
        <Box>
          <Typography variant="h5" component="h5">
            {"TestTask table"}
          </Typography>
          <Typography sx={{ color: "#00000099", fontSize: 14 }}>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 2,
          pt: 2,
        }}
      >
        <GridToolbar
          sx={{
            "& .MuiButton-textPrimary": {
              color: "#2196F3",

              "& .MuiButton-startIcon": {
                mb: "2px",
              },
            },
          }}
        />
        <GridToolbarQuickFilter />
      </Box>
    </Box>
  );
};
