import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  px2vw,
  calculateMargin,
  screenWidth,
} from "../../../Utilities/util.js";
import Background_Circles1 from "../../../assets/img/parallax-bokeh_layer1.png";
import Background_Circles2 from "../../../assets/img/parallax-bokeh_layer2.png";

const PageContainer = styled.div`
  display: flex;
  color: black;
  width: 100%;
  flex-direction: column;
  min-height: 50vh;
  background-image: url(${Background_Circles1});
  background-size: cover;
  background-repeat: no-repeat;
`;

const InnerPageContainer = styled.div`
  display: flex;
  color: black;
  width: 100%;
  flex-direction: column;
  z-index: 1;
  background-image: url(${Background_Circles2});
  background-size: cover;
  background-repeat: no-repeat;
`;

const JobDescription = () => {
  const [jobs, setJobs] = useState([]);
  const [found, setFound] = useState(false);
  let navigate = useNavigate();
  const { slug } = useParams();

  console.log(slug);

  useEffect(() => {
    setJobs(JSON.parse(sessionStorage.Jobs));
    setFound(true);
  }, [slug]);

  console.log(jobs);

  const result = jobs.find((item) => item.jobCode === slug);
  console.log(result);

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/gi, "");
  }

  if (!found) return;

  const jobDescription = removeTags(result.description).replace("&nbsp;", "");

  return (
    <>
      <PageContainer style={{ marginTop: "100px" }}>
        <InnerPageContainer>
          <div>Title: {result.title} </div>
          <div>Department: {result.hiringDepartment}</div>
          <div>Location: {result.jobLocation.name}</div>
          <div style={{ padding: "50px" }}>{jobDescription}</div>
        </InnerPageContainer>
      </PageContainer>
    </>
  );
};

export default JobDescription;
