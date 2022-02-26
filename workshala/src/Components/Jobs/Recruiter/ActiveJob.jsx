import * as React from "react";
import {fetchRecruiterPostedJobs} from '../../../redux/actions/jobs'
import {deletePostedJobs} from '../../../redux/actions/jobs'
import {
  Button,
  Grid,
} from "@mui/material";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../../Services/Utils/Generic";
import {PrefillPostJob} from './PostJob'
import Table from "../../../Services/Utils/Table";
import Loader from "../../../Services/Utils/Loader";

export default function ActiveJob() {
const dispatch = useDispatch();

  const jobsInfo = useSelector(state => state.jobs);

  React.useEffect(() => {
    dispatch(fetchRecruiterPostedJobs());
  }, []);             // eslint-disable-line react-hooks/exhaustive-deps

  const HandleEdit = (event, cellValues) => {
    PrefillPostJob(cellValues.row.id);
  };
  
  const HandleDelete = (event, cellValues) => {
    dispatch(deletePostedJobs(cellValues.row.id));
  };
  
  const columnsList = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "position", headerName: "Position", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
    { field: "postedOn", headerName: "Posted On", width: 180 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "action", headerName: "Actions", width: 150,
      renderCell: (cellValues) => {
        return (
          <Grid item container justifyContent={"center"}>
            <Grid item md={6}>
              <Button
                component={Link}
                to="/recruiter/postJob"
                onClick={(event) => {
                  HandleEdit(event, cellValues);
                }}
              >
                Edit
              </Button>
            </Grid>
            <Grid item md={6}>
              <Button
                style={{ color: "red" }}
                onClick={(event) => {
                  HandleDelete(event, cellValues);
                }}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        );
      },
    },
  ];

  var jobsList = [];
  
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
          id: data[i].objectId,
          postedOn: dateFormat(data[i].createdAt, "mmmm dS, yyyy"),
          title: isEmpty(data[i].title) ? "Technician" : data[i].title,
          type: isEmpty(data[i].type) ? "Delivery" : data[i].type,
          position: isEmpty(data[i].position) ? "Executive" : data[i].position,
          status: isEmpty(data[i].status) ? "Active" : data[i].status,
          detail: "",
        };
      });

      return (
        <Grid container spacing={1}>
          <Grid item md={12} sx={{textAlign:"-webkit-right"}}>
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

          <Grid item md={12}>
            <Table columns={columnsList} rows={jobsList} />;
          </Grid>
        </Grid>
      );
    } else {
      return <Loader />;
    }
}
