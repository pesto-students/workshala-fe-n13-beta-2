import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {fetchRecruiterPostedJobs} from '../../../redux/actions/jobs'

import {
  Button,
  Grid,
  TextField,
  TablePagination,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Skeleton,
  Paper,
} from "@mui/material";
import dateFormat from "dateformat";
import Links from "@mui/material/Link";
import {makeStyles} from '@mui/styles';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UpdateJobDetails from "./PostJobComponent";
import { isEmpty } from "../../../Services/Utils/Generic";

const columns = [
  // { id: "id", label: "Job\u00a0ID" },
  
  { id: "title", label: "Job\u00a0Title", format: (value) => value.toLocaleString("en-US") },
  { id: "position", label: "Position", format: (value) => value.toFixed(2)},
  { id: "type", label: "Type", format: (value) => value.toLocaleString("en-US") },
  { id: "postedOn", label: "Posted\u00a0On" },
  { id: "status", label: "Status", format: (value) => value.toFixed(2) },
  { id: "detail", label: "Detail", format: (value) => value.toFixed(2) },
];

function createData(id, date, title, type, position, status, detail) {
  return { id, date, title, type, position, status, detail };
}

const rows = [
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "Delivery Executive",
    "Pending",
    ""
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "Delivery Executive",
    "In-Progress",
    ""
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "Delivery Executive",
    "On-Hold",
    ""
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "Delivery Executive",
    "Hired",
    ""
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "Delivery Executive",
    "Rejected",
    ""
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "Delivery Executive",
    "Pending",
    ""
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "Delivery Executive",
    "Pending",
    ""
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "Delivery Executive",
    "Pending",
    ""
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "Delivery Executive",
    "Pending",
    ""
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "Delivery Executive",
    "Pending",
    ""
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "Delivery Executive",
    "Pending",
    ""
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "Delivery Executive",
    "Pending",
    ""
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "Delivery Executive",
    "Hired",
    ""
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "Delivery Executive",
    "Pending",
    ""
  ),
  createData(
    "APL-067",
    "Jan 28, 2021 23:05 PM",
    "Delivery Executive",
    "Delivery",
    "Delivery Executive",
    "Pending",
    ""
  ),
];

const ColoredDetailsCell = (props) => {
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

const ColoredStatusCell = (props) => {
  var statusColor = "blue";
  switch (props.value) {
    case "Active":
      statusColor = "green";
      break;
    case "InActive":
      statusColor = "red";
      break;
    default:
      statusColor = "blue";
  }
  return (
    <Button
      variant="outlined"
      style={{
        width: "100%",
        height: "10%",
        borderRadius: 10,
        color: statusColor,
      }}
    >
      {props.value}
    </Button>
  );
};
export default function ActiveJob() {

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

  const jobsInfo = useSelector(state => state.jobs);

  React.useEffect(() => {
    dispatch(fetchRecruiterPostedJobs());
  }, []);             // eslint-disable-line react-hooks/exhaustive-deps

  var jobsList = [];

  if (jobsInfo.loading) {
    return <Skeleton />;
  } else {
    if (
      jobsInfo !== undefined &&
      jobsInfo.status &&
      jobsInfo.jobs !== undefined &&
      jobsInfo.jobs.data !== undefined &&
      jobsInfo.jobs.data.results !== undefined
    ) {
      const data = jobsInfo.jobs.data.results;
      data.forEach(function (k, i) {
        jobsList[i] = {
          
          postedOn: dateFormat(data[i].createdAt, "mmmm dS, yyyy"),
          title: isEmpty(data[i].title) ? "Technician" : data[i].title,
          type: isEmpty(data[i].type) ? "Delivery" : data[i].type,
          position: isEmpty(data[i].position) ? "Executive" : data[i].position,
          status: isEmpty(data[i].status) ? "In-Progress" : data[i].status,
          detail: "",
        };
      });
    }

    return (
      <Grid container>
        {/* Search bar */}
        <Grid item md={10}>
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

        <Grid item md={2}>
            <Button
                component={Link}
                to="/recruiter/postjob"
                variant="contained"
                sx={{
                      width: "180px",
                      height: "50px",
                      marginLeft: "0 auto",
                      borderRadius: 4,
                      display: "flex",
                      mt: 1,
                    }}
            >
              Post a New Job
            </Button>
        </Grid>
        <Grid item container md={12} spacing={1}>
          <Grid
            item
            md={12}
            alignItems="center"
            justifyContent="center"
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
                  <TableHead >
                    <TableRow className={classes.root}>
                      {columns.map((column, i) => (
                        <TableCell
                          key={i}
                          align={column.align}
                          style={{ minWidth: column.minWidth, fontWeight: 550, textTransform: "uppercase" }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {jobsList
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
                              return i === 4 ? (
                                <TableCell key={i}>
                                  <ColoredStatusCell value={value} />
                                </TableCell>
                              ) : i === 5 ? (
                                <TableCell key={i}>
                                  <ColoredDetailsCell
                                    component={Link}
                                    to="/ActiveJob"
                                    value={value}
                                    onClick={() => {
                                      UpdateJobDetails(jobsList[value]);
                                    }}
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
