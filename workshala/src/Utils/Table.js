import * as React from "react";
import PropTypes from "prop-types";
import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { darken, lighten } from "@mui/material/styles";

const CustomToolbar = ({ setFilterButtonEl }) => (
  <GridToolbarContainer>
    <GridToolbarFilterButton ref={setFilterButtonEl} />
  </GridToolbarContainer>
);

CustomToolbar.propTypes = {
  setFilterButtonEl: PropTypes.func.isRequired,
};

export default function CustomFilterPanelPosition(props) {
  const getBackgroundColor = (color, mode) =>
    mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);

  const getHoverBackgroundColor = (color, mode) =>
    mode === "dark" ? darken(color, 0.5) : lighten(color, 0.5);

  return (
    <div
      style={{ height: "85vh", width: "100%", backgroundColor: "ghostwhite" }}
    >
      <DataGrid
        {...props.data}
        components={{
          Toolbar: GridToolbar,
        }}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
          "& .super-app-theme--header": {
            color: "rgba(0, 0, 255, 1)",
          },
          "& .super-app-theme--In-Progress": {
            bgcolor: (theme) =>
              getBackgroundColor(theme.palette.info.main, theme.palette.mode),
            "&:hover": {
              bgcolor: (theme) =>
                getHoverBackgroundColor(
                  theme.palette.info.main,
                  theme.palette.mode
                ),
            },
          },
          "& .super-app-theme--Hired": {
            bgcolor: (theme) =>
              getBackgroundColor(
                theme.palette.success.main,
                theme.palette.mode
              ),
            "&:hover": {
              bgcolor: (theme) =>
                getHoverBackgroundColor(
                  theme.palette.success.main,
                  theme.palette.mode
                ),
            },
          },
          "& .super-app-theme--On-Hold": {
            bgcolor: (theme) =>
              getBackgroundColor(
                theme.palette.secondary.main,
                theme.palette.mode
              ),
            "&:hover": {
              bgcolor: (theme) =>
                getHoverBackgroundColor(
                  theme.palette.secondary.main,
                  theme.palette.mode
                ),
            },
          },
          "& .super-app-theme--Pending": {
            bgcolor: (theme) =>
              getBackgroundColor(
                theme.palette.warning.main,
                theme.palette.mode
              ),
            "&:hover": {
              bgcolor: (theme) =>
                getHoverBackgroundColor(
                  theme.palette.warning.main,
                  theme.palette.mode
                ),
            },
          },
          "& .super-app-theme--Rejected": {
            bgcolor: (theme) =>
              getBackgroundColor(theme.palette.error.main, theme.palette.mode),
            "&:hover": {
              bgcolor: (theme) =>
                getHoverBackgroundColor(
                  theme.palette.error.main,
                  theme.palette.mode
                ),
            },
          },
        }}
        getRowClassName={(params) => `super-app-theme--${params.row.status}`}
      />
    </div>
  );
}
