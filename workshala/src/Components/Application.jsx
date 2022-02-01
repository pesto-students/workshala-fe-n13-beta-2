import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import email from '../Images/email.png';
import Phone_icon from '../Images/Phone_icon.png';

import Switch from "@mui/material/Switch";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button, Grid, Avatar } from "@mui/material";

const suggestions = [
  {
      label: "All",
      color: "primary"
  }, {
      label: "Pending",
      color: "success"
  }, {
      label: "On-Hold",
      color: "success"
  }, {
      label: "In-Progress",
      color: "success"
  },{
    label: "Hired",
    color: "success"
},{
  label: "Rejected",
  color: "success"
}
]

const columns = [
  { id: "id", label: "ID"},
  { id: "date", label: "Date\u00a0Applied"},
  { id: "company", label: "Company", format: (value) => value.toLocaleString("en-US")},
  { id: "type", label: "Type", format: (value) => value.toLocaleString("en-US")},
  { id: "position", label: "Position", format: (value) => value.toFixed(2)},
  { id: "contact",  label: "Contact", format: (value) => value.toFixed(2)},
  { id: "status", label: "Status",  format: (value) => value.toFixed(2)},
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
    <Grid container>
      <Grid item container md={12}>
            <Grid item
                md={1.5}
                sx={
                    {
                        ml: 2,
                        mt: 3
                    }
            }>
                <Typography>Suggestions</Typography>
            </Grid>
            <Grid item
                sx={
                    {mt: 2}
                }
                xs={0.5}
                sm={0.5}
                md={9.5}>
                <Stack direction="colunm">
                    {
                    suggestions.map(item => (
                        <Chip label={
                                item.label
                            }
                            color={
                                item.color
                            }
                            sx={
                                {ml: 1}
                            }/>
                    ))
                } </Stack>
            </Grid>
        </Grid>
      
      <Grid item md={12} alignItems="center" justifyContent="center" sx={{mt:2}}>
        <Paper
          sx={{
            m:1,
            borderRadius:4,
            p:2
          }}
        >
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth , fontWeight:550}}
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
                        {columns.map((column, i) => {
                          const value = row[column.id];
                          return (
                            (i == 5) ?
                              <TableCell>
                                <Grid container>
                                  <Grid item sx={{mr:1}}> 
                                    <Avatar src={Phone_icon}
                                      sx={{width: 30, height: 30}}/>
                                  </Grid>
                                  <Grid>
                                    <Avatar src={email}
                                      sx={{width: 30, height: 30}}/>
                                  </Grid>
                                </Grid>
                              </TableCell>
                            :
                            (i == 6) ? 
                              <TableCell>
                                <Button variant="outlined">{value}</Button>
                              </TableCell> :
                            
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
