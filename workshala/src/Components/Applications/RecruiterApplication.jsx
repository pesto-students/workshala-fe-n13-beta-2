import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import dateFormat from "dateformat";
import {
  Button,
  Grid,
  Select,
  MenuItem,
  TextField,
  Chip,
  Stack,
  Typography,
  InputAdornment,
  Skeleton,
  TablePagination,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Paper,
} from "@mui/material";
import Links from "@mui/material/Link";
import { useDispatch, useSelector } from "react-redux";
import { getApplications } from "../../redux/actions/applications";
import { Link } from "react-router-dom";

const suggestions = [
  {
    label: "Technician",
    color: "primary",
  },
  {
    label: "Mechanic",
    color: "success",
  },
  {
    label: "Delivery Boy",
    color: "success",
  },
  {
    label: "Builder",
    color: "success",
  },
];

const columns = [
  { id: "id", label: "Application\u00a0ID" },
  { id: "date", label: "Date\u00a0Applied" },
  {
    id: "title",
    label: "Job\u00a0Title",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "position", label: "Position" },
  {
    id: "candidateEmail",
    label: "Candidate\u00a0Email-ID",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "resume", label: "Resume", format: (value) => value.toFixed(2) },

  { id: "status", label: "Details", format: (value) => value.toFixed(2) },
];

function createData(id, date, title, position, candidateEmail, resume, status) {
  return { id, date, title, position, candidateEmail, resume, status };
}

const rows = [
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "candidate@test.com",
    "",

    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "candidate@test.com",
    "",

    "In-Progress"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "candidate@test.com",
    "",

    "On-Hold"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "candidate@test.com",
    "",

    "Hired"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "candidate@test.com",
    "",

    "Rejected"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "candidate@test.com",
    "",

    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "candidate@test.com",
    "",

    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "candidate@test.com",
    "",

    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "candidate@test.com",
    "",

    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "candidate@test.com",
    "",

    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "candidate@test.com",
    "",

    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "candidate@test.com",
    "",

    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "candidate@test.com",
    "",

    "Hired"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "candidate@test.com",
    "",

    "Pending"
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "candidate@test.com",
    "",
    "Pending"
  ),
];

const DownloadResumeCell = (props) => {
  var statusColor = "blue";

  return (
    <Button
      variant="outlined"
      style={{
        width: "100px",
        height: "10%",
        borderRadius: 10,
        color: statusColor,
      }}
    >
      Download
    </Button>
  );
};

const ColoredStatusCell = (props) => {
  var statusColor = "blue";

  return (
    <Links
      href="#"
      underline="hover"
      variant="outlined"
      style={{
        width: "100%",
        height: "10%",
        color: statusColor,
      }}
    >
      Details
    </Links>
  );
};

export default function RecruiterApplication() {
  //   const [sort, setValue] = React.useState("");

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const dispatch = useDispatch();

  const applications = useSelector((state) => state.applications);

  React.useEffect(() => {
    dispatch(getApplications());
  }, []);

  var appsList = [];

  if (applications.loading) {
    return <Skeleton />;
  } else {
    if (
      applications != undefined &&
      applications.status &&
      applications.applications != undefined &&
      applications.applications.data != undefined &&
      applications.applications.data.results != undefined
    ) {
      const data = applications.applications.data.results;
      data.forEach(function (k, i) {
        //id, date, title, position, candidateEmail, resume, status;
        //appsList[i] = {title: data[i].title, desc: data[i].desc, experience: data[i].experience};
        //             { id: "id", label: "ID"},
        // { id: "date", label: "Date\u00a0Applied"},
        // { id: "company", label: "Company", format: (value) => value.toLocaleString("en-US")},
        // { id: "type", label: "Type", format: (value) => value.toLocaleString("en-US")},
        // { id: "position", label: "Position", format: (value) => value.toFixed(2)},
        // { id: "contact",  label: "Contact", format: (value) => value.toFixed(2)},
        // { id: "status", label: "Status",  format: (value) => value.toFixed(2)},
        appsList[i] = {
          id: data[i].ObjectId,
          date: dateFormat(data[i].createdAt, "mmmm dS, yyyy"),
          title: "test",
          position: data[i].position,
          candidateEmail: data[i].email,
          resume: "download",
          status: data[i].status,
        };
      });
      console.log(appsList);
      // UpdateData(userData);
    }

    return (
      <Grid container>
        {/* Search bar */}
        <Grid item md={12}>
          <TextField
            sx={{
              width: "96%",
              m: 1,
              p: 1,
              borderRadius: 4,
              backgroundColor: "white",
              border: 0,
            }}
            size="small"
            border={0}
            placeholder="Search by Title, company or keyword..."
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <Button
                    variant="contained"
                    sx={{ width: 100, borderRadius: 4 }}
                    startIcon={<SearchIcon />}
                  >
                    Find
                  </Button>
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
        </Grid>

        <Grid item container md={12}>
          <Grid
            item
            md={1.5}
            sx={{
              ml: 2,
              mt: 3,
            }}
          >
            <Typography>Suggestions</Typography>
          </Grid>
          <Grid item sx={{ mt: 2 }} xs={0.5} sm={0.5} md={5}>
            <Stack direction="colunm">
              {suggestions.map((item, i) => (
                <Chip
                  key={i}
                  label={item.label}
                  color={item.color}
                  sx={{ ml: 1 }}
                />
              ))}{" "}
            </Stack>
          </Grid>
          <Grid item sx={{ mt: 2 }} xs={0.5} sm={0.5} md={5} align="right">
            <Select
              sx={{ height: 35, width: 120, borderRadius: 4 }}
              // value={sort}
              displayEmpty
              // onChange={handleChange}
            >
              <MenuItem value="">Newest</MenuItem>
              <MenuItem value="Oldest">Oldest</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid item container md={12} spacing={1} sx={{ mt: 2 }}>
          <Grid
            item
            md={12}
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 1 }}
          >
            <Paper
              sx={{
                m: 1,
                borderRadius: 4,
                p: 1,
              }}
            >
              <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth, fontWeight: 550 }}
                        >
<<<<<<< HEAD
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {appsList
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
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
                              return i === 5 ? (
                                <TableCell>
                                  <DownloadResumeCell value={value} />
                                </TableCell>
                              ) : i === 6 ? (
                                <TableCell>
                                  <ColoredStatusCell
                                    component={Link}
                                    to="/ActiveJob"
                                    value={value}
                                  />
                                </TableCell>
                              ) : (
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
=======
                          {columns.map((column, i) => {
                            const value = row[column.id];
                            return i === 5 ? (
                              <TableCell>
                                <DownloadResumeCell value={value} />
                              </TableCell>
                            ) : i === 6 ? (
                              <TableCell>
                                <ColoredStatusCell
                                  component={Link}
                                  to="/activeJob"
                                  value={value}
                                />
                              </TableCell>
                            ) : (
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
>>>>>>> sur_feature_8
        </Grid>
      </Grid>
    );
  }
}
