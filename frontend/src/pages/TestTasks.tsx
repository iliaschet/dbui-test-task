import {
  Box,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import StarIcon from "@mui/icons-material/Star";
import {
  DataGrid,
  GridPagination,
  GridRenderCellParams,
  GridToolbar,
} from "@mui/x-data-grid";
import { useGetlistQuery } from "../redux/api";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import "./TestTasks.css";

interface CustomToolbarProps {
  clearSearch: () => void;
  onChange: () => void;
  value: string;
}

function CustomToolbar(props: CustomToolbarProps) {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <GridToolbar />
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? "visible" : "hidden" }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: "auto",
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          "& .MuiSvgIcon-root": {
            mr: 0.5,
          },
          "& .MuiInput-underline:before": {
            borderBottom: 1,
            borderColor: "divider",
          },
        }}
      />
    </Box>
  );
}

export const TestTasks = () => {
  const { data = [], isLoading } = useGetlistQuery({});

  const [searchText, setSearchText] = useState("");

  if (isLoading) return <CircularProgress />;

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 237,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 237,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 237,
      editable: true,
    },
    {
      field: "country",
      headerName: "Country",
      sortable: false,
      width: 237,
    },
    {
      field: "online",
      headerName: "Online",
      sortable: false,
      width: 237,
      renderCell: (params: GridRenderCellParams) =>
        params.row.online ? <CheckIcon /> : <CloseIcon />,
    },
  ];

  return (
    <Box
      sx={{
        borderRadius: 4,
        borderColor: "rgba(224, 224, 224, 1)",
        borderWidth: 1,
        borderStyle: "solid",
      }}
    >
      <Box
        className="title-wrapper"
        sx={{
          width: 1216,
          height: 84,
          borderBottom: "1px solid rgba(224, 224, 224, 1)",
        }}
      >
        <StarIcon className="star-icon" />
        <Box className="text-wrapper">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 24,
              lineHeight: "32px",
            }}
          >
            TestTask table
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 14,
              color: "#00000099",
              lineHeight: "20px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Box>
      </Box>
      <DataGrid
        sx={{
          width: 1216,
          height: 450,
          border: "none",
          "& .css-qvtrhg-MuiDataGrid-virtualScroller": { overflowX: "hidden" },
          "& .css-wop1k0-MuiDataGrid-footerContainer": {
            height: 44,
            minHeight: 44,
          },
          "& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar": {
            marginTop: 2,
          },
        }}
        className="data-grid"
        rows={data}
        getRowId={(row) => row.email}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
        slotProps={{
          toolbar: {
            value: searchText,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchText(event.target.value),
            clearSearch: () => setSearchText(""),
          },
        }}
        slots={{ toolbar: CustomToolbar, pagination: GridPagination }}
      />
    </Box>
  );
};
