import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import {
  PageContainer,
  InnerPageContainer,
  PageTitleContainer,
} from "../../styles.js";
import { px2vw } from "../../../Utilities/util.js";

const TitleRow = styled.div`
  margin: ${px2vw(150)} 0 0 ${px2vw(150)};

  @media (max-width: 768px) {
    margin: ${px2vw(250)} ${px2vw(50)} 0 ${px2vw(150)};
  }

  @media (max-width: 425px) {
    margin: ${px2vw(350)} ${px2vw(80)} 0 ${px2vw(150)};
  }

  @media (max-width: 320px) {
    margin: ${px2vw(450)} 0 0 ${px2vw(150)};
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  //font-weight: bold;
  color: black;
  line-height: 1;
  text-align: center;
  //text-shadow: 2px 2px 9px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
  }

  @media (min-width: 2560px) {
    font-size: 3rem;
  }
`;

const SecondaryTitle = styled.h2`
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  font-size: 2rem;
  color: black;
  line-height: 1.5;
  //text-shadow: 2px 2px 9px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 2560px) {
    font-size: 5rem;
  }
`;

const ContentContainer = styled.div`
  margin: ${px2vw(50)} ${px2vw(50)} ${px2vw(100)} ${px2vw(150)};
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  line-height: normal;

  a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 768px) {
    margin: ${px2vw(50)} ${px2vw(50)} ${px2vw(50)} ${px2vw(150)};
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    //margin: ${px2vw(50)} ${px2vw(50)} ${px2vw(50)} ${px2vw(150)};
  }

  @media (max-width: 375px) {
    // margin: ${px2vw(50)} ${px2vw(50)} ${px2vw(50)} ${px2vw(150)};
  }

  @media (max-width: 320px) {
    //margin: ${px2vw(50)} ${px2vw(60)} ${px2vw(50)} ${px2vw(150)};
  }

  @media (min-width: 2560px) {
    font-size: 2rem;
  }
`;

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy Production | Brella</title>
        <meta
          name="description"
          content="Brella is a full-spectrum digital production company, providing communications, learning, event and staffing solutions for healthcare and wellness organizations."
        />
      </Helmet>
      <PageContainer>
        <InnerPageContainer>
          <PageTitleContainer>
            <TitleRow style={{ marginLeft: "0px" }}>
              <Title>Brella Productions' Privacy Policy</Title>
            </TitleRow>
          </PageTitleContainer>
          <ContentContainer>
            <p>
              Brella Productions’ privacy policy explains how our organization
              uses the personal data we collect from users of our website.{" "}
            </p>
            <br />
            {/* <p>Topics:</p>
            <ul style={{ marginLeft: "50px" }}>
              <a href="#infocollect">
                <li>What data do we collect?</li>
              </a>
              <a href="#infouse">
                <li>How do we collect user data?</li>
              </a>
              <a href="#legalbases">
                <li>How will we use user data?</li>
              </a>
              <a href="#whoshare">
                <li>How do we store user data?</li>
              </a>
              <a href="#cookies">
                <li>Marketing</li>
              </a>
              <a href="#inforetain">
                <li>What are your data protection rights?</li>
              </a>
              <a href="#infosafe">
                <li>What are cookies?</li>
              </a>
              <a href="#infominors">
                <li>How do we use cookies?</li>
              </a>
              <a href="#privacyrights">
                <li>What types of cookies do we use?</li>
              </a>
              <a href="#DNT">
                <li>How to manage your cookies</li>
              </a>
              <a href="#caresidents">
                <li>Privacy policies of other websites</li>
              </a>
              <a href="#virginia">
                <li>Changes to our privacy policy</li>
              </a>
              <a href="#policyupdates">
                <li>How to contact us</li>
              </a>
            </ul> */}
            <SecondaryTitle id="infocollect">
              What data do we collect?
            </SecondaryTitle>
            <p>
              Through our website we collect data for recruiting, marketing,
              sales, and vendor interaction purposes. Depending on the purpose
              of your interaction with our website, we collect relevant data.
              Below is a list of all the data we may collect. We will not
              collect data that isn’t relevant to your interaction.
            </p>
            <p style={{ marginLeft: "50px" }}>
              <ul>
                <li>Personal identification information </li>

                <ul>
                  <li>Name</li>
                  <li>Email Address</li>
                  <li>Company Name</li>
                  <li>Company Website</li>
                  <li>Phone Number</li>
                </ul>
                <li>Employment application, resume data, and work history</li>
              </ul>
            </p>
            <SecondaryTitle id="infouse">
              How do we collect your data?
            </SecondaryTitle>
            <p>
              Users directly provide Brella Productions with most of the data we
              collect. Through our website, we collect data and process data
              when a user:
            </p>
            <ul style={{ marginLeft: "50px" }}>
              <li>Submits their information in our online contact form.</li>
              <li>
                Voluntarily completes a customer survey or provides feedback via
                email.
              </li>
              <li>Uses or views our website via their browser’s cookies.</li>
              <li>Applies for a job through our website.</li>
            </ul>
            <p>
              We may also receive user data indirectly from the following
              sources:
            </p>
            <ul style={{ marginLeft: "50px" }}>
              <li>Marketing and lead generation services.</li>
              <li>Recruiting related services.</li>
              <li>
                ERP (Enterprise Resource Planning) systems for financial
                processing.
              </li>
            </ul>
            <br />
            <SecondaryTitle id="legalbases">
              How will we use your data?
            </SecondaryTitle>
            <p>Brella Productions collects user data so that we can:</p>
            <ul style={{ marginLeft: "50px" }}>
              <li>
                Manage our relationships with clients, vendors, employees, and
                prospective employees.
              </li>
              <li>
                Reach out to prospective and existing clients and vendors.
              </li>
            </ul>
            <p>
              When Brella processes user information, it may send that data to
              our CRM (Customer Relationship Management) or HRIS (Human
              Resources Information System) systems and also use the resulting
              information from credit, background, and/or employment reference
              services.
            </p>
            <br />
            <SecondaryTitle id="whoshare">
              How do we store your data?
            </SecondaryTitle>
            <p>
              Brella Productions securely stores your data with certified online
              CRM/ERP/HRIS systems, as well as in our private data storage.
            </p>
            <p>
              We keep contact data related to marketing and sales generation for
              2 years after the last time you interact with Brella Productions.
              Once this time period has expired, we will delete your data by
              removing all digital records and securing and destroying any
              physical records.
            </p>
            <p>
              We keep employee and/or recruitment data for 7 years or as
              required by local and federal law. Once this time period has
              expired, we will delete your data by removing all digital records
              and securing and destroying any physical records.
              <br />
              <br />
              We keep tax records in perpetuity as required by local and federal
              law.
              <br />
              <br />
              We keep vendor and client contracts in perpetuity. <br />
              <br />
              Personal financial and banking data, with the exception of the
              aforementioned legal and tax documents, will be removed 2 years
              following last payment. Once this time period has expired, we will
              delete your financial data by removing all digital records and
              securing and destroying any physical records.
            </p>
            <br />
            <SecondaryTitle id="cookies">Marketing</SecondaryTitle>
            <p>
              If you have agreed to receive marketing contacts, you may always
              opt out at a later date.
            </p>
            <p>
              You have the right at any time to stop Brella Productions from
              contacting you for marketing purposes.
            </p>
            <p>
              If you no longer wish to be contacted for marketing purposes,
              email{" "}
              <a
                href="mailto:sales@brella.com"
                style={{ textDecoration: "none", color: "#f3803b" }}
              >
                sales@brella.com
              </a>
              .You may request copies of held data or ask to have data removed
              as allowed by local and federal law.
            </p>
            <br />
            <SecondaryTitle id="inforetain">
              What are your data protection rights?
            </SecondaryTitle>
            <p>
              Brella Productions would like to make sure you are fully aware of
              all of your data protection rights. Every user is entitled to the
              following:
              <br />
              <br />
              <strong>The right to access</strong> – You have the right to
              request copies of your personal data. We may charge you a small
              fee for this service.
              <br />
              <br />
              <strong>The right to rectification</strong> – You have the right
              to request that Brella Productions correct any information you
              believe is inaccurate. You also have the right to request we
              complete information you believe is incomplete.
              <br />
              <br />
              <strong>The right to erasure</strong> – You have the right to
              request that Brella Productions erase your personal data, under
              certain conditions.
              <br />
              <br />
              <strong>The right to restrict processing</strong> – You have the
              right to request that Brella Productions restrict the processing
              of your personal data, under certain conditions.
              <br />
              <br />
              <strong>The right to object to processing</strong> – You have the
              right to object to Brella Productions’ processing of your personal
              data, under certain conditions.
              <br />
              <br />
              <strong>The right to data portability</strong> – You have the
              right to request that Brella Productions transfer the data that we
              have collected to another organization, or directly to you, under
              certain conditions.
              <br />
              <br />
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us at
              our email:
              <br />
              <br />
              Email{" "}
              <a
                href="mailto:humanresources@brella.com"
                style={{ textDecoration: "none", color: "#f3803b" }}
              >
                humanresources@brella.com
              </a>{" "}
              to request copies of HR related data to review or data removal as
              allowed by local and federal law.
              <br />
              <br />
              Email{" "}
              <a
                href="mailto:sales@brella.com"
                style={{ textDecoration: "none", color: "#f3803b" }}
              >
                sales@brella.com
              </a>{" "}
              to request copies of marketing related held data or ask to have
              data removed as allowed by local and federal law.
              <br />
              <br />
              Email{" "}
              <a
                href="mailto:ap@brella.com"
                style={{ textDecoration: "none", color: "#f3803b" }}
              >
                ap@brella.com
              </a>{" "}
              to request copies of financial or vendor related held data or to
              ask to have data removed as allowed by local and federal law.
            </p>
            <br />
            <SecondaryTitle id="infosafe">Cookies</SecondaryTitle>
            <p>
              Cookies are text files placed on your computer to collect standard
              internet log information and visitor behavior information. When
              you visit our{" "}
              <a
                href="https://brella.com/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#f3803b" }}
              >
                website
              </a>
              , we may collect information from you automatically through
              cookies or similar technologies.
            </p>
            <p>
              For further information, visit{" "}
              <a
                href="https://allaboutcookies.org/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#f3803b" }}
              >
                allaboutcookies.org
              </a>
              .
            </p>
            <br />
            <SecondaryTitle id="infosafe">
              How do we use cookies?
            </SecondaryTitle>
            <p>
              Brella Productions uses cookies in a range of ways to improve your
              experience on our website, including:
            </p>
            <ul style={{ marginLeft: "50px" }}>
              <li>Understanding how you use our website</li>
              <li>Tracking website performance</li>
            </ul>
            <br />
            <SecondaryTitle id="privacyrights">
              What types of cookies do we use?
            </SecondaryTitle>
            <p>
              There are a number of different types of cookies. Our website
              uses:
            </p>
            <ul style={{ marginLeft: "50px" }}>
              <li>
                Functionality – Brella Productions uses these cookies so that we
                recognize you on our website and remember your previously
                selected preferences. These could include what language you
                prefer and location you are in. A mix of first-party and
                third-party cookies are used.
              </li>
            </ul>
            <br />
            <SecondaryTitle id="DNT">How to manage cookies</SecondaryTitle>
            <p>
              You can set your browser to not accept cookies (
              <a
                href="https://allaboutcookies.org/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#f3803b" }}
              >
                allaboutcookies.org
              </a>{" "}
              tells you how to remove cookies from your browser). However, in a
              few cases, some of our website features may not function as a
              result.
            </p>
            <br />
            <SecondaryTitle id="caresidents">
              Privacy policies of other websites
            </SecondaryTitle>
            <p>
              The Brella Productions website contains links to other websites.
              Our privacy policy applies only to our website. If you click on a
              link to another website, you should read their privacy policy.
            </p>
            <br />
            <SecondaryTitle id="virginia">
              Changes to our privacy policy
            </SecondaryTitle>
            <p>
              Brella Productions keeps its privacy policy under regular review
              and places any updates on this web page. This privacy policy was
              last updated on August 2023.
            </p>
            <br />
            <SecondaryTitle id="policyupdates">
              How to contact us
            </SecondaryTitle>
            <p>
              If you have any questions about Brella Productions’ privacy
              policy, the data we hold on you, or you would like to exercise one
              of your data protection rights, please do not hesitate to contact
              us.
              <br />
              <br />
              Email us at:{" "}
              <a
                href="mailto:it@brella.com"
                style={{ textDecoration: "none", color: "#f3803b" }}
              >
                it@brella.com
              </a>{" "}
              <br />
              <br />
              Call us: +1 8478644040 <br />
              <br />
              Or write to us at:
              <br />
              Brella Productions
              <br />
              Data Protection Officer
              <br />
              1601 Simpson St
              <br />
              Evanston, IL 60201
            </p>
          </ContentContainer>
        </InnerPageContainer>
      </PageContainer>
    </>
  );
};

export default PrivacyPolicy;
