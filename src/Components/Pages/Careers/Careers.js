import React, { useEffect, useState, useCallback } from "react";
//import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import {
  PageContainer,
  InnerPageContainer,
  ButtonContainer,
  OrangeLinkButton,
} from "../../styles.js";
import CareersMainImage from "../../../assets/img/careers-header@2x.jpg";
import MobileHeader from "../../Shared/MobileHeader.js";
import DesktopHeaderCenter from "../../Shared/DesktopHeaderCenter.js";
import {
  px2vw,
  calculateMargin,
  screenWidth,
  getCanoicalUrl,
} from "../../../Utilities/util.js";

const Container = styled.div`
  display: block;
  grid-template-rows: 19%;
  position: relative;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  opacity: 1;
`;

const Title = styled.h2`
  margin: 20px auto;
  font-size: 3rem;
  font-weight: bold;
  color: #f3803b;
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  letter-spacing: 2px;

  @media (max-width: 425px) {
    font-size: 2rem;
    padding: 10px;
    letter-spacing: 1px;
  }

  @media (min-width: 2560px) {
    font-size: 6rem;
  }
`;

const TopSectionContainer = styled.div`
  //border-left: solid 4px #f3803b;
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  position: relative;
  z-index: 1;
  margin: ${px2vw(calculateMargin(50), screenWidth)} ${px2vw(50)} ${px2vw(50)}
    ${px2vw(150)};

  p {
    line-height: 1.5;
    padding: 0 ${px2vw(50)} 0 ${px2vw(0)};
    margin-left: ${px2vw(0)};

    @media (max-width: 425px) {
      margin-left: ${px2vw(35)};
    }
  }

  @media only screen and (min-width: 762px) and (max-width: 800px) {
    font-size: 1.3rem;
    margin-left: ${px2vw(150)};
  }

  @media only screen and (min-width: 600px) and (max-width: 762px) {
    font-size: 1.2rem;
    padding: 0 ${px2vw(50)} 0 ${px2vw(20)};
    margin-left: ${px2vw(150)};
  }

  @media only screen and (min-width: 200px) and (max-width: 600px) {
    font-size: 1.1rem;
    margin-left: ${px2vw(150)};
  }

  @media (min-width: 2560px) {
    font-size: 2.5rem;
  }
`;

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 10px 10px;
  font-size: 1.2rem;
  padding: 10px;
  /* align-items: center;
  justify-items: center; */
  //margin-top: 10px;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

const SelectField = styled.select`
  color: rgb(40 40 40);
  border: solid 2px #f3803b;
  border-radius: 2px;
  background: transparent;
  background-blend-mode: overlay;
  padding: 7px 13.5px 8px 14px;
  background: white;

  &:hover {
    color: rgb(40 40 40);
    border-radius: 2px;
    border: solid 2px #f3803b;
    background: transparent;
    background-blend-mode: overlay;
    background: white;
    box-shadow: 0 0 11px #f4803b;
    outline-style: solid;
    outline-color: #f3803b;
  }

  @media (max-width: 320px) {
    padding: 0px;
    font-size: 0.8rem;
  }

  @media (min-width: 2560px) {
    font-size: 2rem;
  }
`;

const SearchResultContainer = styled.div`
  margin-top: ${px2vw(30)};

  ul {
    list-style: none;
    margin-left: ${px2vw(-30)};
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const data = {
  content: [
    {
      type: "paragraph",
      text: "JOIN US",
      spans: [],
    },
  ],
};

// const testJobsData = [
//   {
//     title: "PHP Dev",
//     hiringDepartment: "Development",
//     jobLocation: "At Client site - Lake County, IL",
//   },
//   {
//     title: "Javascript Dev",
//     hiringDepartment: "Development",
//     jobLocation: "Remote",
//   },
//   {
//     title: "Project Manager",
//     hiringDepartment: "Project Management",
//     jobLocation: "At Client site - Lake County, IL",
//   },
//   {
//     title: "Account Manager",
//     hiringDepartment: "Account Management",
//     jobLocation: "At Client site - Lake County, IL",
//   },
//   {
//     title: "Graphic Designer",
//     hiringDepartment: "Design",
//     jobLocation: "Remote",
//   },
// ];

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedDepartment, setSelectedDepartment] = useState(
    "All Areas of Interest"
  );
  const [searchComplete, setSearchComplete] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const locations = [];
  const departments = [];

  const displaySearchResult = () => {
    //display all jobs
    if (
      selectedLocation === "All Locations" &&
      selectedDepartment === "All Areas of Interest"
    ) {
      setFilteredJobs(jobs);
    }
    //display jobs in specific location and department
    if (
      selectedLocation !== "All Locations" &&
      selectedDepartment !== "All Areas of Interest"
    ) {
      setFilteredJobs(
        jobs.filter(
          (item) =>
            item.hiringDepartment === selectedDepartment &&
            item.jobLocation.locationDisplayName === selectedLocation
        )
      );
    }
    //display jobs in all departments
    if (
      selectedLocation === "All Locations" &&
      selectedDepartment !== "All Areas of Interest"
    ) {
      setFilteredJobs(
        jobs.filter((item) => item.hiringDepartment === selectedDepartment)
      );
    }
    //display jobs in all locations
    if (
      selectedLocation !== "All Locations" &&
      selectedDepartment === "All Areas of Interest"
    ) {
      setFilteredJobs(
        jobs.filter(
          (item) => item.jobLocation.locationDisplayName === selectedLocation
        )
      );
    }

    setSearchComplete(true);
  };

  const fetchData = useCallback(async () => {
    const data = await fetch(
      "https://recruiting.paylocity.com/recruiting/v2/api/feed/jobs/bad51cde-c860-42f9-b932-8b45067dd4e3"
    );

    sessionStorage.Jobs = JSON.stringify(data.jobs);
    setJobs(data.jobs);
    console.log("From fetch");
  }, []);

  const locationsList = () => {
    const count = {};

    jobs.forEach((element) => {
      count[element.jobLocation.locationDisplayName] =
        (count[element.jobLocation.locationDisplayName] || 0) + 1;
    });

    Object.keys(count).forEach((key) => {
      locations.push({
        name: key,
        count: count[key],
      });
    });
    const defaultValue = { name: "All Locations", count: jobs.length };
    locations.unshift(defaultValue);
  };

  const departmensList = () => {
    const count = {};

    jobs.forEach((element) => {
      count[element.hiringDepartment] =
        (count[element.hiringDepartment] || 0) + 1;
    });

    Object.keys(count).forEach((key) => {
      departments.push({
        name: key,
        count: count[key],
      });
    });
    const defaultValue = { name: "All Areas of Interest", count: jobs.length };
    departments.unshift(defaultValue);
  };

  useEffect(() => {
    if (sessionStorage.Jobs) {
      setJobs(JSON.parse(sessionStorage.Jobs));
      console.log("From session");
    } else {
      fetchData().catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
    }

    departmensList();

    // eslint-disable-next-line
  }, [fetchData]);

  locationsList();
  departmensList();

  return (
    <>
      <Helmet>
        <title>Brella | Careers</title>

        {/* Canonical Tag */}
        <link rel="canonical" href={getCanoicalUrl("/careers")} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brella Productions | Your Next Great Job"
        />
        <meta
          name="twitter:description"
          content="Brella offers a rewarding work experience in a team-centric environment with opportunities for creative and professional growth."
        />
        <meta
          name="twitter:image"
          content="https://brella.com/static/media/careers-header@2x.246397617aeb1309076f.jpg"
        />

        {/* Open Graph Meta Tags for Social Media */}
        <meta
          property="og:title"
          content="Brella Productions | Your Next Great Job"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brella.com/careers" />
        <meta
          name="og:description"
          content="Brella offers a rewarding work experience in a team-centric environment with opportunities for creative and professional growth."
        />
        <meta
          property="og:image"
          content="https://brella.com/static/media/careers-header@2x.246397617aeb1309076f.jpg"
        />
      </Helmet>
      <Container>
        <MobileHeader
          alt="Lady in the park"
          img={CareersMainImage}
          items={[RichText.asText(data.content)]}
        />
        <DesktopHeaderCenter
          img={CareersMainImage}
          items={[RichText.asText(data.content)]}
        />
        <PageContainer>
          <Title>CAREERS AT BRELLA PRODUCTIONS</Title>
          <InnerPageContainer>
            <TopSectionContainer>
              <div>
                Do you crave: <br />
                <ul>
                  <li>Creative challenges in a collaborative environment</li>
                  <li>
                    Flexibility to balance your work life with other pursuits
                  </li>
                  <li>
                    Growth opportunities with training and mentorship support
                  </li>
                  <li>
                    Comprehensive benefits package with an ethical and inclusive
                    company culture
                  </li>
                  <li>
                    Independence, camaraderie, inspiration, and accountability
                  </li>
                </ul>
                <p>
                  Then we want to hear from you. Browse current opportunities
                  below or contact us at{" "}
                  <a
                    href="mailto:jobs@brella.com"
                    style={{ textDecoration: "none", color: "#f3803b" }}
                  >
                    jobs@brella.com
                  </a>
                  .
                </p>
                <p>
                  Subscribe to our RSS feeds to receive instant updates as new
                  positions become available.
                </p>
                <p>Filter Jobs:</p>
              </div>
              <SearchContainer>
                <SelectField
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map((item, index) => {
                    return (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </SelectField>
                <SelectField
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  {departments.map((item, index) => {
                    return (
                      <option key={index} value={item.name}>
                        {item.name}{" "}
                        {selectedDepartment !== "All Areas of Interest"
                          ? `- ${item.count} job(s)`
                          : ""}
                      </option>
                    );
                  })}
                </SelectField>
              </SearchContainer>
              <ButtonContainer style={{ padding: "0" }}>
                <OrangeLinkButton onClick={() => displaySearchResult()}>
                  SEARCH
                </OrangeLinkButton>
              </ButtonContainer>
              <SearchResultContainer>
                {searchComplete && (
                  <ul>
                    {filteredJobs.map((job) => {
                      return (
                        <a
                          href={job.displayUrl}
                          target="_blank"
                          rel="noreferrer"
                          key={job.jobId}
                        >
                          <li key={job.jobId}>
                            {job.title} - {job.hiringDepartment}
                          </li>
                        </a>
                      );
                    })}
                  </ul>
                )}
              </SearchResultContainer>
            </TopSectionContainer>
          </InnerPageContainer>
        </PageContainer>
      </Container>
    </>
  );
};

export default Careers;
