import * as React from "react";
import CandidateLayout from "../../Layouts/CandidateLayout";
import PostJobComponent from "../../Components/Jobs/Recruiter/PostJobComponent";
import PostJob from "../../Components/Jobs/Recruiter/PostJob";

export default function PostAJob() {
  return (
    <CandidateLayout>
      {/* <PostJobComponent /> */}
      <PostJob/>
    </CandidateLayout>
  );
}
