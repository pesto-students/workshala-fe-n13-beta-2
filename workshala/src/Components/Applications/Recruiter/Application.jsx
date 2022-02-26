import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import dateFormat from "dateformat";
import {makeStyles} from '@mui/styles';
import {fetchRecApplicationsList} from '../../../redux/actions/applications'
import { Download } from "@mui/icons-material";
import {
  Button,
  Grid,
  Select,
  MenuItem,
  TextField,
  Chip,
  Typography,
  Skeleton,
  TablePagination,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Paper,
  IconButton,
} from "@mui/material";
import Links from "@mui/material/Link";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isEmpty } from "../../../Services/Utils/Generic";

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
  { id: "position", label: "Position" },
  { id: "candidateName", label: "Candidate\u00a0Name", format: (value) => value.toLocaleString("en-US") },
  { id: "candidateEmail", label: "Candidate\u00a0Email-ID", format: (value) => value.toLocaleString("en-US")},
  { id: "appliedOn", label: "Date\u00a0Applied" },
  { id: "resume", label: "Resume", format: (value) => value.toFixed(2) },
  { id: "status", label: "Details", format: (value) => value.toFixed(2) }
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
  
  return (
    <a href={props.resume} download="resume" target='_blank'>
    <IconButton >
        <Download style={{ color: 'brown'}}/>
    </IconButton>
    </a>
    
    // <Button
    //   variant="outlined"
    //   style={{
    //     width: "100px",
    //     height: "10%",
    //     borderRadius: 10,
    //     color: statusColor,
    //   }}
    // >
    //   Download
    // </Button>
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

export default function Application() {
  const useStyles = makeStyles({

    root: {
        "& .MuiTableCell-head": {
            color: "white",
            backgroundColor: "blue",
        },
    }
  });
  const classes = useStyles();

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

  const auth = useSelector((state) => state.user);

  const filterData = {
        'userId' : auth.user.data.objectId,
        'role': auth.user.data.role
  }

  React.useEffect(() => {
    dispatch(fetchRecApplicationsList(filterData));
  }, []);

  var appsList = [];

  if (applications.loading) {
    return <Skeleton />;
  } else {
    if (
      applications !== undefined &&
      applications.status &&
      applications.applications !== undefined &&
      applications.applications.data !== undefined &&
      applications.applications.data.results !== undefined
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
          id: data[i].objectId,
          appliedOn: dateFormat(data[i].createdAt, "mmmm dS, yyyy"),
          candidateName: isEmpty(data[i].candidateName) ? "John Doe" : data[i].candidateName,
          position: isEmpty(data[i].position) ? "Delivery" : data[i].position,
          candidateEmail: isEmpty(data[i].email) ? "mail@gmail.com" : data[i].email,
          resume: data[i].resume,
          status: isEmpty(data[i].status) ? "In-Progress": data[i].status,
        };
      });
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
                
                  <Button
                    variant="contained"
                    sx={{ width: 100, borderRadius: 4 }}
                    startIcon={<SearchIcon />}
                  >
                    Find
                  </Button>
                
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
            <Grid item >
              {suggestions.map((item, i) => (
                <Chip
                  key={i}
                  label={item.label}
                  color={item.color}
                  sx={{ ml: 1 }}
                />
              ))}{" "}
            </Grid>
          </Grid>
          <Grid item sx={{ mt: 2 }} xs={0.5} sm={0.5} md={5} align="right">
            <Select
              sx={{ height: 35, width: 120, borderRadius: 4 }}
              // value={sort}
              defaultValue={""}
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
              <TableContainer sx={{ maxHeight: 500 }} style={{borderRadius: 8}}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow className={classes.root}>
                      {columns.map((column, i) => (
                        <TableCell
                          key={i}
                          align={column.align}
                          style={{ minWidth: column.minWidth, fontWeight: 550 }}
                        >
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
                      .map((row, i) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={i}
                          >
                            {columns.map((column, i) => {
                              const value = row[column.id];
                              return i === 5 ? (
                                <TableCell key={i}>
                                  <DownloadResumeCell resume={value}/>
                                </TableCell>
                              ) : i === 6 ? (
                                <TableCell key={i}>
                                  <ColoredStatusCell
                                    component={Link}
                                    to="/ActiveJob"
                                    value={value}
                                  />
                                </TableCell>
                              ) : (
                                <TableCell key={i} align={column.align}>
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
      </Grid>
    );
  }
}
