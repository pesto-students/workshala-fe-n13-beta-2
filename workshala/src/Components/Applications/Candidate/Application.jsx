import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApplications } from "../../../redux/actions/applications";
import Loader from "../../../Services/Utils/Loader";
import Table from "../../../Services/Utils/Table";
import * as moment from "moment";

export default function Application() {
  const dispatch = useDispatch();

  const applications = useSelector((state) => state.applications);

  React.useEffect(() => {
    dispatch(getApplications());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let appsList = [];

  const columnsList = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "position", headerName: "Position", width: 160 },
    { field: "type", headerName: "Type", width: 100 },
    { field: "email", headerName: "Candidate Email", width: 200 },
    { field: "date", headerName: "Date Applied", width: 200 },
    { field: "contact", headerName: "Contact", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
  ];

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
        position: data[i].position,
        type: data[i].type,
        email: data[i].email,
        date: moment(data[i].createdAt).format("YYYY-MM-DD"),
        contact: data[i].mobile,
        status: data[i].status,
      };
    });

    return <Table columns={columnsList} rows={appsList} />;
  } else {
    return <Loader />;
  }
}
