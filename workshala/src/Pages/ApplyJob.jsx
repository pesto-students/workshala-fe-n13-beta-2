import * as React from "react";
import CandidateLayout from "../Layouts/CandidateLayout";
import ApplicationForm from '../Components/Applications/ApplicationForm'

export default function ApplyJob() {
    return (
        <CandidateLayout>
            <ApplicationForm/>
        </CandidateLayout>
    );
}
