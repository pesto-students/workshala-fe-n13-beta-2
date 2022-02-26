import * as React from "react";
import { fetchRecApplicationsList } from "../../../redux/actions/applications";
import Loader from "../../../Services/Utils/Loader";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../../Services/Utils/Generic";
import Table from "../../../Services/Utils/Table";
import * as moment from "moment";
import { IconButton, Link } from "@mui/material";
import { Download } from "@mui/icons-material";

const handleClick = (event, cellValues) => {
  const path = cellValues.row.resume;
  if(path === undefined) {
    alert("Resume not available");
  } else {
    window.open(cellValues.row.resume.url);
  }
};

const columnsList = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "position", headerName: "Position", width: 200 },
  {
    field: "candidateEmail",
    headerName: "Candidate Email",
    width: 200,
    renderCell: (params) => (
      <Link href={`mailto:${params.value}`}>{params.value}</Link>
    ),
  },
  { field: "appliedOn", headerName: "Date Applied", width: 200 },
  {
    field: "resume",
    headerName: "Resume",
    width: 150,
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
  { field: "status", headerName: "Status", width: 150 },
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
  }, []);

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
