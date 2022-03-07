import * as React from "react";
import { fetchRecApplicationsList } from "../../../redux/actions/applications";
import Loader from "../../../Utils/Loader";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../../Utils/Generic";
import Table from "../../../Utils/Table";
import * as moment from "moment";
import { IconButton, Button, Typography } from "@mui/material";
import { default as MailLink } from "@mui/material/Link";
import { Download } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { updateStatus } from "./ApplicationDetails";

const handleClick = (event, cellValues) => {
  const path = cellValues.row.resume;
  if (path === undefined) {
    alert("Resume not available");
  } else {
    window.open(cellValues.row.resume.url);
  }
};

const handleStatus = (event, cellValues) => {
  const data = cellValues.row;
  updateStatus({ id: data.id, status: data.status });
};

const columnsList = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "position", headerName: "Position", width: 150 },
  {
    field: "candidateEmail",
    headerName: "Candidate Email",
    width: 200,
    renderCell: (params) => (
      <MailLink href={`mailto:${params.value}`}>{params.value}</MailLink>
    ),
  },
  { field: "appliedOn", headerName: "Date Applied", width: 150 },
  {
    field: "resume",
    headerName: "Resume",
    width: 120,
    renderCell: (cellValues) => {
      return (
        <IconButton
          onClick={(event) => {
            handleClick(event, cellValues);
          }}
        >
          <Download />
        </IconButton>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (cellValues) => {
      return <Typography color="secondary">{cellValues.row.status}</Typography>;
    },
  },
  {
    field: "action",
    headerName: "",
    width: 150,
    renderCell: (cellValues) => {
      return (
        <Button
          component={Link}
          to="/recruiter/applicationAction"
          onClick={(event) => {
            handleStatus(event, cellValues);
          }}
        >
          Action
        </Button>
      );
    },
  },
];

export default function Application() {
  const dispatch = useDispatch();

  const applications = useSelector((state) => state.applications);
  const auth = useSelector((state) => state.user);

  const filterData = {
    userId: auth.user.data.objectId,
    role: auth.user.data.role,
  };

  React.useEffect(() => {
    dispatch(fetchRecApplicationsList(filterData));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var appsList = [];

  if (
    applications !== undefined &&
    applications.status &&
    applications.applications !== undefined &&
    applications.applications.data !== undefined &&
    applications.applications.data.results !== undefined
  ) {
    const data = applications.applications.data.results;
    data.forEach(function (k, i) {
      appsList[i] = {
        id: data[i].objectId,
        appliedOn: moment(data[i].createdAt).format("YYYY-MM-DD"),
        candidateName: isEmpty(data[i].candidateName)
          ? "John Doe"
          : data[i].candidateName,
        position: isEmpty(data[i].position) ? "Delivery" : data[i].position,
        candidateEmail: isEmpty(data[i].email)
          ? "mail@gmail.com"
          : data[i].email,
        resume: data[i].resume,
        status: isEmpty(data[i].status) ? "In-Progress" : data[i].status,
      };
    });

    return <Table columns={columnsList} rows={appsList} />;
  } else {
    return <Loader />;
  }
}
