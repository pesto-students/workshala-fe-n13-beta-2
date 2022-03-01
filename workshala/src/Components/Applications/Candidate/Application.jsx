import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApplications } from "../../../redux/actions/applications";
import Loader from "../../../Services/Utils/Loader";
import Table from "../../../Services/Utils/Table";
import * as moment from "moment";
import { Button } from "@mui/material";

export default function Application() {
  const dispatch = useDispatch();

  const applications = useSelector((state) => state.applications);

  React.useEffect(() => {
    dispatch(getApplications());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let appsList = [];

  const colorList = {
    Pending: "warning",
    "In-Progress": "secondary",
    "On-Hold": "primary",
    Hired: "success",
    Rejected: "error",
  };

  const columnsList = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "position", headerName: "Position", width: 160 },
    { field: "type", headerName: "Type", width: 110 },
    { field: "workLevel", headerName: "Level", width: 110 },
    { field: "salary", headerName: "Salary Range", width: 150 },
    { field: "location", headerName: "Location", width: 130 },
    { field: "date", headerName: "Date Applied", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <Button color={colorList[cellValues.row.status]}>
            {cellValues.row.status}
          </Button>
        );
      },
    },
  ];

  if (
    applications !== undefined &&
    applications.status &&
    applications.applications !== undefined &&
    applications.applications.data !== undefined &&
    applications.applications.data.result !== undefined
  ) {
    const data = applications.applications.data.result;
    data.forEach(function (k, i) {
      appsList[i] = {
        id: data[i].objectId,
        position: data[i].position,
        type: data[i].type,
        workLevel: data[i].jobRef ? data[i].jobRef.workLevel : "Senior",
        location: data[i].jobRef ? data[i].jobRef.location : "Hyderbad",
        date: moment(data[i].createdAt).format("YYYY-MM-DD"),
        salary: data[i].jobRef
          ? data[i].jobRef.minSalary + " - " + data[i].jobRef.maxSalary
          : "$100k - $150k",
        status: data[i].status,
      };
    });

    return <Table columns={columnsList} rows={appsList} />;
  } else {
    return <Loader />;
  }
}
