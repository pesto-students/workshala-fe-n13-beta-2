import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import Switch from "@mui/material/Switch";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Grid } from "@mui/material";
const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "date", label: "Date\u00a0Applied", minWidth: 100 },
  {
    id: "company",
    label: "Company",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "type",
    label: "Type",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "position",
    label: "Position",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "contact",
    label: "Contact",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(id, date, company, type, position, contact, status) {
  return { id, date, company, type, position, contact, status };
}

const rows = [
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "ABC Company",
    "Freelance",
    "Delivery Boy",
    "",
    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "ABC Company",
    "Freelance",
    "Delivery Boy",
    "",
    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "ABC Company",
    "Freelance",
    "Delivery Boy",
    "",
    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "ABC Company",
    "Freelance",
    "Delivery Boy",
    "",
    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "ABC Company",
    "Freelance",
    "Delivery Boy",
    "",
    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "ABC Company",
    "Freelance",
    "Delivery Boy",
    "",
    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "ABC Company",
    "Freelance",
    "Delivery Boy",
    "",
    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "ABC Company",
    "Freelance",
    "Delivery Boy",
    "",
    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "ABC Company",
    "Freelance",
    "Delivery Boy",
    "",
    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "ABC Company",
    "Freelance",
    "Delivery Boy",
    "",
    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "ABC Company",
    "Freelance",
    "Delivery Boy",
    "",
    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "ABC Company",
    "Freelance",
    "Delivery Boy",
    "",
    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "ABC Company",
    "Freelance",
    "Delivery Boy",
    "",
    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "ABC Company",
    "Freelance",
    "Delivery Boy",
    "",
    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "ABC Company",
    "Freelance",
    "Delivery Boy",
    "",
    "Pending"
  ),
];

export default function Application() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      style={{ minHeight: "100vh", width: "100px", radius: "8" }}
      sx={{ mx: -10 }}
    >
      <Grid item md={12}>
        <Grid container>
          <Grid item sx={{ mt: 2, marginLeft: 15 }}>
            <Typography>Suggestions</Typography>
          </Grid>
          <Grid item xs={0.5} sm={0.5} md={0.5}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="right"
              sx={{ marginLeft: 30, mt: 2 }}
            >
              <Chip
                label="Technician"
                color="primary"
                sx={{ marginRight: 1 }}
              />
              <Chip
                label="Mechanic"
                color="success"
                style={{ backgroundColor: "#0000FF" }}
                sx={{ marginRight: 1, marginLeft: 1 }}
              />
              <Chip
                label="Delivery Boy"
                color="success"
                style={{ backgroundColor: "#0000FF" }}
                sx={{ marginRight: 1, marginLeft: 1 }}
              />
              <Chip
                label="Builder"
                style={{ backgroundColor: "#0000FF" }}
                color="success"
                sx={{ marginRight: 1 }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={10} md={12} alignItems="center" justifyContent="center">
        <Paper
          sx={{
            width: "90%",

            margin: 16,
            height: "80%",
            elevation: 3,
          }}
        >
          <TableContainer sx={{ maxHeight: 800 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
