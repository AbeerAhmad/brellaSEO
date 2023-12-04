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
  font-size: 4rem;
  font-weight: bold;
  color: black;
  line-height: 1;
  //text-shadow: 2px 2px 9px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 2560px) {
    font-size: 7rem;
  }
`;

const SecondaryTitle = styled.h2`
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  font-size: 3rem;
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

const ThirdTitle = styled.h3`
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  font-size: 2.5rem;
  color: black;
  line-height: 1.5;
  //text-shadow: 2px 2px 9px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 2560px) {
    font-size: 4rem;
  }
`;

const FourthTitle = styled.h4`
  font-family: "FuturaStd-CondensedBold", Futura, Helvetica, Arial, sans-serif;
  font-size: 2rem;

  color: black;
  line-height: 1.5;
  //text-shadow: 2px 2px 9px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 2560px) {
    font-size: 3rem;
  }
`;

const ContentContainer = styled.div`
  margin: ${px2vw(50)} ${px2vw(50)} ${px2vw(100)} ${px2vw(150)};
  font-family: "FuturaStd-Book", Futura, Helvetica, Arial, sans-serif;
  font-size: 1.5rem;

  a {
    text-decoration: none;
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

const TableContainer = styled.div`
  margin-right: 25px;
  @media (max-width: 425px) {
    font-size: 1rem;
  }

  @media (max-width: 375px) {
    font-size: 0.7rem;
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
            <TitleRow>
              <Title style={{ color: "black" }}>Privacy Policy</Title>
            </TitleRow>
          </PageTitleContainer>
          <ContentContainer>
            <p>Last updated June 26, 2023</p>{" "}
            <p>
              This privacy notice for Brella Productions ("Company," "we," "us,"
              or "our"), describes how and why we might collect, store, use,
              and/or share ("process") your information when you use our
              services ("Services"), such as when you:
            </p>
            <ul>
              <li>
                Visit our website at{" "}
                <a
                  href="http://www.brella.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://www.brella.com
                </a>
                , or any website of ours that links to this privacy notice
              </li>
              <li>
                Engage with us in other related ways, including any sales,
                marketing, or events
              </li>
            </ul>
            <SecondaryTitle style={{ color: "black" }}>
              SUMMARY OF KEY POINTS
            </SecondaryTitle>
            <p>
              This summary provides key points from our privacy notice, but you
              can find out more details about any of these topics by clicking
              the link following each key point or by using our{" "}
              <a href="#toc">table of contents</a> below to find the section you
              are looking for.
            </p>
            <p>
              What personal information do we process? When you visit, use, or
              navigate our Services, we may process personal information
              depending on how you interact with Brella Productions and the
              Services, the choices you make, and the products and features you
              use. Learn more about personal information you disclose to us.
            </p>
            <p>
              Do we process any sensitive personal information? We do not
              process sensitive personal information.
            </p>
            <p>
              Do we receive any information from third parties? We do not
              receive any information from third parties.
            </p>
            <p>
              How do we process your information? We process your information to
              provide, improve, and administer our Services, communicate with
              you, for security and fraud prevention, and to comply with law. We
              may also process your information for other purposes with your
              consent. We process your information only when we have a valid
              legal reason to do so. Learn more about{" "}
              <a href="#infouse">how we process your information</a>.
            </p>
            <p>
              In what situations and with which types of parties do we share
              personal information? We may share information in specific
              situations and with specific categories of third parties. Learn
              more about{" "}
              <a href="#whoshare">
                when and with whom we share your personal information
              </a>
              .
            </p>
            <p>
              How do we keep your information safe? We have organizational and
              technical processes and procedures in place to protect your
              personal information. However, no electronic transmission over the
              internet or information storage technology can be guaranteed to be
              100% secure, so we cannot promise or guarantee that hackers,
              cybercriminals, or other unauthorized third parties will not be
              able to defeat our security and improperly collect, access, steal,
              or modify your information. Learn more about{" "}
              <a href="#infosafe">how we keep your information safe</a>.
            </p>
            <p>
              What are your rights? Depending on where you are located
              geographically, the applicable privacy law may mean you have
              certain rights regarding your personal information. Learn more
              about <a href="#privacyrights">your privacy rights</a>.
            </p>
            <p>
              How do you exercise your rights? The easiest way to exercise your
              rights is by visiting{" "}
              <a
                href="https://brella.com/contact"
                target="_blank"
                rel="noreferrer"
              >
                https://brella.com/contact
              </a>
              , or by contacting us. We will consider and act upon any request
              in accordance with applicable data protection laws.
            </p>
            <p>
              Want to learn more about what Brella Productions does with any
              information we collect?{" "}
              <a href="#toc">Review the privacy notice in full</a>.
            </p>
            <SecondaryTitle style={{ color: "black" }} id="toc">
              TABLE OF CONTENTS
            </SecondaryTitle>
            <ol>
              <a href="#infocollect">
                <li>WHAT INFORMATION DO WE COLLECT?</li>
              </a>
              <a href="#infouse">
                <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
              </a>
              <a href="#legalbases">
                <li>
                  WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
                  INFORMATION?
                </li>
              </a>
              <a href="#whoshare">
                <li>
                  WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?{" "}
                </li>
              </a>
              <a href="#cookies">
                <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
              </a>
              <a href="#inforetain">
                <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
              </a>
              <a href="#infosafe">
                <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
              </a>
              <a href="#infominors">
                <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
              </a>
              <a href="#privacyrights">
                <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
              </a>
              <a href="#DNT">
                <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
              </a>
              <a href="#caresidents">
                <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
              </a>
              <a href="#virginia">
                <li>DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
              </a>
              <a href="#policyupdates">
                <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
              </a>
              <a href="#contact">
                <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
              </a>
              <a href="#request">
                <li>
                  HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                  YOU?
                </li>
              </a>
            </ol>
            <SecondaryTitle id="infocollect">
              1. WHAT INFORMATION DO WE COLLECT?
            </SecondaryTitle>
            <ThirdTitle>Personal information you disclose to us</ThirdTitle>
            <p>
              In Short: We collect personal information that you provide to us.
            </p>
            <p>
              We collect personal information that you voluntarily provide to us
              when you express an interest in obtaining information about us or
              our products and Services, when you participate in activities on
              the Services, or otherwise when you contact us.
            </p>
            <p>
              Personal Information Provided by You. The personal information
              that we collect depends on the context of your interactions with
              us and the Services, the choices you make, and the products and
              features you use. The personal information we collect may include
              the following:
            </p>
            <ul>
              <li>names</li>
              <li>phone numbers</li>
              <li>email addresses</li>
              <li>contact preferences</li>
              <li>contact or authentication data</li>
            </ul>
            <p>
              Sensitive Information. We do not process sensitive information.
            </p>
            <p>
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </p>
            <FourthTitle>Information automatically collected</FourthTitle>
            <p>
              In Short: Some information — such as your Internet Protocol (IP)
              address and/or browser and device characteristics — is collected
              automatically when you visit our Services.
            </p>
            <p>
              We automatically collect certain information when you visit, use,
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services, and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our
              internal analytics and reporting purposes.
            </p>
            <p>
              Like many businesses, we also collect information through cookies
              and similar technologies.
            </p>
            <p>The information we collect includes:</p>
            <ul>
              <li>
                Log and Usage Data. Log and usage data is service-related,
                diagnostic, usage, and performance information our servers
                automatically collect when you access or use our Services and
                which we record in log files. Depending on how you interact with
                us, this log data may include your IP address, device
                information, browser type, and settings and information about
                your activity in the Services (such as the date/time stamps
                associated with your usage, pages and files viewed, searches,
                and other actions you take such as which features you use),
                device event information (such as system activity, error reports
                (sometimes called "crash dumps"), and hardware settings).
              </li>
              <li>
                Device Data. We collect device data such as information about
                your computer, phone, tablet, or other device you use to access
                the Services. Depending on the device used, this device data may
                include information such as your IP address (or proxy server),
                device and application identification numbers, location, browser
                type, hardware model, Internet service provider and/or mobile
                carrier, operating system, and system configuration information.
              </li>
              <li>
                Location Data. We collect location data such as information
                about your device's location, which can be either precise or
                imprecise. How much information we collect depends on the type
                and settings of the device you use to access the Services. For
                example, we may use GPS and other technologies to collect
                geolocation data that tells us your current location (based on
                your IP address). You can opt out of allowing us to collect this
                information either by refusing access to the information or by
                disabling your Location setting on your device. However, if you
                choose to opt out, you may not be able to use certain aspects of
                the Services.
              </li>
            </ul>
            <SecondaryTitle id="infouse">
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </SecondaryTitle>
            <p>
              In Short: We process your information to provide, improve, and
              administer our Services, communicate with you, for security and
              fraud prevention, and to comply with law. We may also process your
              information for other purposes with your consent.
            </p>
            <p>
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </p>
            <ul>
              <li>
                To deliver and facilitate delivery of services to the user. We
                may process your information to provide you with the requested
                service.
              </li>
              <li>
                To respond to user inquiries/offer support to users. We may
                process your information to respond to your inquiries and solve
                any potential issues you might have with the requested service.
              </li>
              <li>
                To send administrative information to you. We may process your
                information to send you details about our products and services,
                changes to our terms and policies, and other similar
                information.
              </li>
              <li>
                To enable user-to-user communications. We may process your
                information if you choose to use any of our offerings that allow
                for communication with another user.
              </li>
              <li>
                To request feedback. We may process your information when
                necessary to request feedback and to contact you about your use
                of our Services.
              </li>
              <li>
                To send you marketing and promotional communications. We may
                process the personal information you send to us for our
                marketing purposes, if this is in accordance with your marketing
                preferences. You can opt out of our marketing emails at any
                time. For more information, see{" "}
                <a href="#privacyrights">"WHAT ARE YOUR PRIVACY RIGHTS?"</a>{" "}
                below.
              </li>
              <li>
                To deliver targeted advertising to you. We may process your
                information to develop and display personalized content and
                advertising tailored to your interests, location, and more.
              </li>
              <li>
                To protect our Services. We may process your information as part
                of our efforts to keep our Services safe and secure, including
                fraud monitoring and prevention.
              </li>
              <li>
                To identify usage trends. We may process information about how
                you use our Services to better understand how they are being
                used so we can improve them.
              </li>
              <li>
                To determine the effectiveness of our marketing and promotional
                campaigns. We may process your information to better understand
                how to provide marketing and promotional campaigns that are most
                relevant to you.
              </li>
              <li>
                To save or protect an individual's vital interest. We may
                process your information when necessary to save or protect an
                individual’s vital interest, such as to prevent harm.
              </li>
            </ul>
            <SecondaryTitle id="legalbases">
              3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
            </SecondaryTitle>
            <p>
              In Short: We only process your personal information when we
              believe it is necessary and we have a valid legal reason (i.e.,
              legal basis) to do so under applicable law, like with your
              consent, to comply with laws, to provide you with services to
              enter into or fulfill our contractual obligations, to protect your
              rights, or to fulfill our legitimate business interests.
            </p>
            <p>
              If you are located in the EU or UK, this section applies to you.
            </p>
            <p>
              The General Data Protection Regulation (GDPR) and UK GDPR require
              us to explain the valid legal bases we rely on in order to process
              your personal information. As such, we may rely on the following
              legal bases to process your personal information:
            </p>
            <ul>
              <li>
                Consent. We may process your information if you have given us
                permission (i.e., consent) to use your personal information for
                a specific purpose. You can withdraw your consent at any time.
                Learn more about{" "}
                <a href="#withdrawconsent">withdrawing your consent</a>.
              </li>
              <li>
                Performance of a Contract. We may process your personal
                information when we believe it is necessary to fulfill our
                contractual obligations to you, including providing our Services
                or at your request prior to entering into a contract with you.
              </li>
              <li>
                Legitimate Interests. We may process your information when we
                believe it is reasonably necessary to achieve our legitimate
                business interests and those interests do not outweigh your
                interests and fundamental rights and freedoms. For example, we
                may process your personal information for some of the purposes
                described in order to:
              </li>
              <ul>
                <li>
                  Send users information about special offers and discounts on
                  our products and services
                </li>
                <li>
                  Develop and display personalized and relevant advertising
                  content for our users
                </li>
                <li>
                  Analyze how our Services are used so we can improve them to
                  engage and retain users
                </li>
                <li>Support our marketing activities</li>
                <li>Diagnose problems and/or prevent fraudulent activities</li>
                <li>
                  Understand how our users use our products and services so we
                  can improve user experience
                </li>
              </ul>
              <li>
                Understand how our users use our products and services so we can
                improve user experience
              </li>
              <li>
                Vital Interests. We may process your information where we
                believe it is necessary to protect your vital interests or the
                vital interests of a third party, such as situations involving
                potential threats to the safety of any person.
              </li>
            </ul>
            <p>If you are located in Canada, this section applies to you.</p>
            <p>
              We may process your information if you have given us specific
              permission (i.e., express consent) to use your personal
              information for a specific purpose, or in situations where your
              permission can be inferred (i.e., implied consent). You can
              <a href="#withdrawconsent"> withdraw your consent</a> at any time.
            </p>
            <p>
              In some exceptional cases, we may be legally permitted under
              applicable law to process your information without your consent,
              including, for example:
            </p>
            <ul>
              <li>
                If collection is clearly in the interests of an individual and
                consent cannot be obtained in a timely way
              </li>
              <li>For investigations and fraud detection and prevention</li>
              <li>
                For business transactions provided certain conditions are met
              </li>
              <li>
                If it is contained in a witness statement and the collection is
                necessary to assess, process, or settle an insurance claim
              </li>
              <li>
                For identifying injured, ill, or deceased persons and
                communicating with next of kin
              </li>
              <li>
                If we have reasonable grounds to believe an individual has been,
                is, or may be victim of financial abuse
              </li>
              <li>
                If it is reasonable to expect collection and use with consent
                would compromise the availability or the accuracy of the
                information and the collection is reasonable for purposes
                related to investigating a breach of an agreement or a
                contravention of the laws of Canada or a province
              </li>
              <li>
                If disclosure is required to comply with a subpoena, warrant,
                court order, or rules of the court relating to the production of
                records
              </li>
              <li>
                If it was produced by an individual in the course of their
                employment, business, or profession and the collection is
                consistent with the purposes for which the information was
                produced
              </li>
              <li>
                If the collection is solely for journalistic, artistic, or
                literary purposes
              </li>
              <li>
                If the information is publicly available and is specified by the
                regulations
              </li>
            </ul>
            <SecondaryTitle id="whoshare">
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </SecondaryTitle>
            <p>
              In Short: We may share information in specific situations
              described in this section and/or with the following categories of
              third parties.
            </p>
            <p>
              Vendors, Consultants, and Other Third-Party Service Providers. We
              may share your data with third-party vendors, service providers,
              contractors, or agents ("third parties") who perform services for
              us or on our behalf and require access to such information to do
              that work. The categories of third parties we may share personal
              information with are as follows:
            </p>
            <ul>
              <li>Data Analytics Services</li>
              <li>Sales & Marketing Tools</li>
              <li>Social Networks</li>
              <li>Website Hosting Service Providers</li>
              <li>Data Storage Service Providers</li>
              <li>Performance Monitoring Tools</li>
              <li>Product Engineering & Design Tools</li>
              <li>Testing Tools</li>
            </ul>
            <p>
              We also may need to share your personal information in the
              following situations:
            </p>
            <ul>
              <li>
                Business Transfers. We may share or transfer your information in
                connection with, or during negotiations of, any merger, sale of
                company assets, financing, or acquisition of all or a portion of
                our business to another company.
              </li>
              <li>
                When we use Google Maps Platform APIs. We may share your
                information with certain Google Maps Platform APIs (e.g., Google
                Maps API, Places API). We obtain and store on your device
                ("cache") your location. You may revoke your consent anytime by
                contacting us at the contact details provided at the end of this
                document.
              </li>
            </ul>
            <SecondaryTitle id="cookies">
              5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </SecondaryTitle>
            <p>
              In Short: We may use cookies and other tracking technologies to
              collect and store your information.
            </p>
            <p>
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to access or store information. Specific
              information about how we use such technologies and how you can
              refuse certain cookies is set out in our Cookie Notice.
            </p>
            <SecondaryTitle id="inforetain">
              6. HOW LONG DO WE KEEP YOUR INFORMATION?
            </SecondaryTitle>
            <p>
              In Short: We keep your information for as long as necessary to
              fulfill the purposes outlined in this privacy notice unless
              otherwise required by law.
            </p>
            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements).
            </p>
            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
            <SecondaryTitle id="infosafe">
              7. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </SecondaryTitle>
            <p>
              In Short: We aim to protect your personal information through a
              system of organizational and technical security measures.
            </p>
            <p>
              We have implemented appropriate and reasonable technical and
              organizational security measures designed to protect the security
              of any personal information we process. However, despite our
              safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Although we will do our best to protect your personal information,
              transmission of personal information to and from our Services is
              at your own risk. You should only access the Services within a
              secure environment.
            </p>
            <SecondaryTitle id="infosafe">
              8. DO WE COLLECT INFORMATION FROM MINORS?
            </SecondaryTitle>
            <p>
              In Short: We do not knowingly collect data from or market to
              children under 18 years of age.
            </p>
            <p>
              We do not knowingly solicit data from or market to children under
              18 years of age. By using the Services, you represent that you are
              at least 18 or that you are the parent or guardian of such a minor
              and consent to such minor dependent’s use of the Services. If we
              learn that personal information from users less than 18 years of
              age has been collected, we will deactivate the account and take
              reasonable measures to promptly delete such data from our records.
              If you become aware of any data we may have collected from
              children under age 18, please contact us at amiddleton@brella.com.
            </p>
            <SecondaryTitle id="privacyrights">
              9. WHAT ARE YOUR PRIVACY RIGHTS?
            </SecondaryTitle>
            <p>
              In Short: In some regions, such as the European Economic Area
              (EEA), United Kingdom (UK), and Canada, you have rights that allow
              you greater access to and control over your personal information.
              You may review, change, or terminate your account at any time
            </p>
            <p>
              In some regions (like the EEA, UK, and Canada), you have certain
              rights under applicable data protection laws. These may include
              the right (i) to request access and obtain a copy of your personal
              information, (ii) to request rectification or erasure; (iii) to
              restrict the processing of your personal information; and (iv) if
              applicable, to data portability. In certain circumstances, you may
              also have the right to object to the processing of your personal
              information. You can make such a request by contacting us by using
              the contact details provided in the section{" "}
              <a href="#contact">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a>{" "}
              below.
            </p>
            <p>
              We will consider and act upon any request in accordance with
              applicable data protection laws.
            </p>
            <p>
              If you are located in the EEA or UK and you believe we are
              unlawfully processing your personal information, you also have the
              right to complain to your{" "}
              <a
                href="https://ec.europa.eu/newsroom/article29/items/612080"
                target="_blank"
                rel="noreferrer"
              >
                Member State data protection authority
              </a>{" "}
              or{" "}
              <a
                href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
                target="_blank"
                rel="noreferrer"
              >
                UK data protection authority
              </a>
              .
            </p>
            <p>
              If you are located in Switzerland, you may contact the{" "}
              <a
                href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                target="_blank"
                rel="noreferrer"
              >
                Federal Data Protection and Information Commissioner
              </a>
              .
            </p>
            <p>
              Withdrawing your consent: If we are relying on your consent to
              process your personal information, which may be express and/or
              implied consent depending on the applicable law, you have the
              right to withdraw your consent at any time. You can withdraw your
              consent at any time by contacting us by using the contact details
              provided in the section{" "}
              <a href="#contact">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a>{" "}
              below.
            </p>
            <p>
              However, please note that this will not affect the lawfulness of
              the processing before its withdrawal nor, when applicable law
              allows, will it affect the processing of your personal information
              conducted in reliance on lawful processing grounds other than
              consent.
            </p>
            <p>
              Opting out of marketing and promotional communications: You can
              unsubscribe from our marketing and promotional communications at
              any time by clicking on the unsubscribe link in the emails that we
              send, or by contacting us using the details provided in the
              section{" "}
              <a href="#contact">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a>{" "}
              below. You will then be removed from the marketing lists. However,
              we may still communicate with you — for example, to send you
              service-related messages that are necessary for the administration
              and use of your account, to respond to service requests, or for
              other non-marketing purposes.
            </p>
            <p>
              Cookies and similar technologies: Most Web browsers are set to
              accept cookies by default. If you prefer, you can usually choose
              to set your browser to remove cookies and to reject cookies. If
              you choose to remove cookies or reject cookies, this could affect
              certain features or services of our Services. You may also{" "}
              <a
                href="https://optout.aboutads.info/?c=2&lang=EN"
                target="_blank"
                rel="noreferrer"
              >
                opt out of interest-based advertising by advertisers
              </a>{" "}
              on our Services.
            </p>
            <p>
              If you have questions or comments about your privacy rights, you
              may email us at privacy@brella.com.
            </p>
            <SecondaryTitle id="DNT">
              10. CONTROLS FOR DO-NOT-TRACK FEATURES
            </SecondaryTitle>
            <p>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ("DNT") feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this privacy notice.
            </p>
            <SecondaryTitle id="caresidents">
              11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </SecondaryTitle>
            <p>
              In Short: Yes, if you are a resident of California, you are
              granted specific rights regarding access to your personal
              information.
            </p>
            <p>
              California Civil Code Section 1798.83, also known as the "Shine
              The Light" law, permits our users who are California residents to
              request and obtain from us, once a year and free of charge,
              information about categories of personal information (if any) we
              disclosed to third parties for direct marketing purposes and the
              names and addresses of all third parties with which we shared
              personal information in the immediately preceding calendar year.
              If you are a California resident and would like to make such a
              request, please submit your request in writing to us using the
              contact information provided below.
            </p>
            <p>
              If you are under 18 years of age, reside in California, and have a
              registered account with Services, you have the right to request
              removal of unwanted data that you publicly post on the Services.
              To request removal of such data, please contact us using the
              contact information provided below and include the email address
              associated with your account and a statement that you reside in
              California. We will make sure the data is not publicly displayed
              on the Services, but please be aware that the data may not be
              completely or comprehensively removed from all our systems (e.g.,
              backups, etc.).
            </p>
            <ThirdTitle>CCPA Privacy Notice</ThirdTitle>
            <p>The California Code of Regulations defines a "resident" as:</p>
            <p>
              (1) every individual who is in the State of California for other
              than a temporary or transitory purpose and <br />
              (2) every individual who is domiciled in the State of California
              who is outside the State of California for a temporary or
              transitory purpose
            </p>
            <p>All other individuals are defined as "non-residents."</p>
            <p>
              If this definition of "resident" applies to you, we must adhere to
              certain rights and obligations regarding your personal
              information.
            </p>
            <p>What categories of personal information do we collect?</p>
            <p>
              We have collected the following categories of personal information
              in the past twelve (12) months:
            </p>
            <TableContainer>
              <table>
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid #ddd",
                      textAlign: "center",
                    }}
                  >
                    <td>Category</td>
                    <td>Examples</td>
                    <td>Collected</td>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td>A. Identifiers</td>
                    <td
                      style={{
                        padding: "0px 40px 0px 40px",
                      }}
                    >
                      Contact details, such as real name, alias, postal address,
                      telephone or mobile contact number, unique personal
                      identifier, online identifier, Internet Protocol address,
                      email address, and account name
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      YES
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td>
                      B. Personal information categories listed in the
                      California Customer Records statute
                    </td>
                    <td
                      style={{
                        padding: "0px 40px 0px 40px",
                      }}
                    >
                      Name, contact information, education, employment,
                      employment history, and financial information
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      NO
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td>
                      C. Protected classification characteristics under
                      California or federal law
                    </td>
                    <td
                      style={{
                        padding: "0px 40px 0px 40px",
                      }}
                    >
                      Gender and date of birth
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      NO
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td>D. Commercial information</td>
                    <td
                      style={{
                        padding: "0px 40px 0px 40px",
                      }}
                    >
                      Transaction information, purchase history, financial
                      details, and payment information
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      NO
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td>E. Biometric information</td>
                    <td
                      style={{
                        padding: "0px 40px 0px 40px",
                      }}
                    >
                      Fingerprints and voiceprints
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      NO
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td>F. Internet or other similar network activity</td>
                    <td
                      style={{
                        padding: "0px 40px 0px 40px",
                      }}
                    >
                      Browsing history, search history, online behavior,
                      interest data, and interactions with our and other
                      websites, applications, systems, and advertisements
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      YES
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td>G. Geolocation data</td>
                    <td
                      style={{
                        padding: "0px 40px 0px 40px",
                      }}
                    >
                      Device location
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      NO
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td>
                      H. Audio, electronic, visual, thermal, olfactory, or
                      similar information
                    </td>
                    <td
                      style={{
                        padding: "0px 40px 0px 40px",
                      }}
                    >
                      Images and audio, video or call recordings created in
                      connection with our business activities
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      NO
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td>I. Professional or employment-related information</td>
                    <td
                      style={{
                        padding: "0px 40px 0px 40px",
                      }}
                    >
                      Business contact details in order to provide you our
                      Services at a business level or job title, work history,
                      and professional qualifications if you apply for a job
                      with us
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      NO
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td>J. Education Information</td>
                    <td
                      style={{
                        padding: "0px 40px 0px 40px",
                      }}
                    >
                      Student records and directory information
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      NO
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td>K. Inferences drawn from other personal information</td>
                    <td
                      style={{
                        padding: "0px 40px 0px 40px",
                      }}
                    >
                      Inferences drawn from any of the collected personal
                      information listed above to create a profile or summary
                      about, for example, an individual’s preferences and
                      characteristics
                    </td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      NO
                    </td>
                  </tr>
                  <tr
                    style={{
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    <td>L. Sensitive Personal Information</td>
                    <td
                      style={{
                        padding: "0px 40px 0px 40px",
                      }}
                    ></td>
                    <td
                      style={{
                        textAlign: "center",
                      }}
                    >
                      NO
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableContainer>
            <p>
              <br />
              We will use and retain the collected personal information as
              needed to provide the Services or for:
            </p>
            <ul>
              <li>Category A - As long as the user has an account with us</li>
              <li>Category F - As long as the user has an account with us</li>
            </ul>
            <p>
              We may also collect other personal information outside of these
              categories through instances where you interact with us in person,
              online, or by phone or mail in the context of:
            </p>
            <ul>
              <li>Receiving help through our customer support channels;</li>
              <li>Participation in customer surveys or contests; and</li>
              <li>
                Facilitation in the delivery of our Services and to respond to
                your inquiries.
              </li>
            </ul>
            <p>
              <strong>
                How do we use and share your personal information?
              </strong>
            </p>
            <p>
              We may also collect other personal information outside of these
              categories through instances where you interact with us in person,
              online, or by phone or mail in the context of:
            </p>
            <ul>
              <li>Targeting cookies/Marketing cookies</li>
              <li>Social media cookies</li>
              <li>Beacons/Pixels/Tags</li>
            </ul>
            <p>
              More information about our data collection and sharing practices
              can be found in this privacy notice.
            </p>
            <p>
              You can opt out from the selling or sharing of your personal
              information by disabling cookies in Cookie Preference Settings and
              clicking on the Do Not Sell or Share My Personal Information link
              on our homepage.
            </p>
            <p>
              You may contact us by visiting{" "}
              <a href="https://brella.com/contact">
                https://brella.com/contact
              </a>
              , or by referring to the contact details at the bottom of this
              document.
            </p>
            <p>
              If you are using an authorized agent to exercise your right to opt
              out we may deny a request if the authorized agent does not submit
              proof that they have been validly authorized to act on your
              behalf.
            </p>
            <p>
              <strong>Will your information be shared with anyone else?</strong>
            </p>
            <p>
              We may disclose your personal information with our service
              providers pursuant to a written contract between us and each
              service provider. Each service provider is a for-profit entity
              that processes the information on our behalf, following the same
              strict privacy protection obligations mandated by the CCPA.
            </p>
            <p>
              We may use your personal information for our own business
              purposes, such as for undertaking internal research for
              technological development and demonstration. This is not
              considered to be "selling" of your personal information.
            </p>
            <p>
              Brella Productions has disclosed the following categories of
              personal information to third parties for a business or commercial
              purpose in the preceding twelve (12) months:
            </p>
            <p>
              The categories of third parties to whom we disclosed personal
              information for a business or commercial purpose can be found
              under{" "}
              <a href="#whoshare">
                {" "}
                "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
              </a>
              .
            </p>
            <p>
              Brella Productions has sold or shared the following categories of
              personal information to third parties in the preceding twelve (12)
              months:
            </p>
            <p>
              The categories of third parties to whom we sold personal
              information are:
            </p>
            <p>
              The categories of third parties to whom we shared personal
              information with are:
            </p>
            <ul>
              <li>Social Networks</li>
              <li>Data Analytics Services</li>
            </ul>
            <p>
              <strong>Your rights with respect to your personal data</strong>
            </p>
            <p>
              <u>Right to request deletion of the data — Request to delete</u>
            </p>
            <p>
              You can ask for the deletion of your personal information. If you
              ask us to delete your personal information, we will respect your
              request and delete your personal information, subject to certain
              exceptions provided by law, such as (but not limited to) the
              exercise by another consumer of his or her right to free speech,
              our compliance requirements resulting from a legal obligation, or
              any processing that may be required to protect against illegal
              activities.
            </p>
            <p>
              <u>Right to be informed — Request to know</u>
            </p>
            <p>Depending on the circumstances, you have a right to know:</p>
            <ul>
              <li>whether we collect and use your personal information;</li>
              <li>he categories of personal information that we collect;</li>
              <li>
                the purposes for which the collected personal information is
                used;
              </li>
              <li>
                whether we sell or share personal information to third parties;
              </li>
              <li>
                the categories of personal information that we sold, shared, or
                disclosed for a business purpose;
              </li>
              <li>
                the categories of third parties to whom the personal information
                was sold, shared, or disclosed for a business purpose;
              </li>
              <li>
                the business or commercial purpose for collecting, selling, or
                sharing personal information; and
              </li>
              <li>
                the specific pieces of personal information we collected about
                you.
              </li>
            </ul>
            <p>
              In accordance with applicable law, we are not obligated to provide
              or delete consumer information that is de-identified in response
              to a consumer request or to re-identify individual data to verify
              a consumer request.
            </p>
            <p>
              <u>
                Right to Non-Discrimination for the Exercise of a Consumer’s
                Privacy Rights
              </u>
            </p>
            <p>
              We will not discriminate against you if you exercise your privacy
              rights.
            </p>
            <p>
              <u>
                Right to Limit Use and Disclosure of Sensitive Personal
                Information
              </u>
            </p>
            <p>We do not process consumer's sensitive personal information.</p>
            <p>
              <u>Verification process</u>
            </p>
            <p>
              Upon receiving your request, we will need to verify your identity
              to determine you are the same person about whom we have the
              information in our system. These verification efforts require us
              to ask you to provide information so that we can match it with
              information you have previously provided us. For instance,
              depending on the type of request you submit, we may ask you to
              provide certain information so that we can match the information
              you provide with the information we already have on file, or we
              may contact you through a communication method (e.g., phone or
              email) that you have previously provided to us. We may also use
              other verification methods as the circumstances dictate.
            </p>
            <p>
              We will only use personal information provided in your request to
              verify your identity or authority to make the request. To the
              extent possible, we will avoid requesting additional information
              from you for the purposes of verification. However, if we cannot
              verify your identity from the information already maintained by
              us, we may request that you provide additional information for the
              purposes of verifying your identity and for security or
              fraud-prevention purposes. We will delete such additionally
              provided information as soon as we finish verifying you.
            </p>
            <p>
              <u>Other privacy rights</u>
            </p>
            <ul>
              <li>
                You may object to the processing of your personal information.
              </li>
              <li>
                You may request correction of your personal data if it is
                incorrect or no longer relevant, or ask to restrict the
                processing of the information.
              </li>
              <li>
                You can designate an authorized agent to make a request under
                the CCPA on your behalf. We may deny a request from an
                authorized agent that does not submit proof that they have been
                validly authorized to act on your behalf in accordance with the
                CCPA.
              </li>
            </ul>
            <p>
              To exercise these rights, you can contact us by visiting{" "}
              <a href="https://brella.com/contact">
                https://brella.com/contact
              </a>
              , or by referring to the contact details at the bottom of this
              document. If you have a complaint about how we handle your data,
              we would like to hear from you.
            </p>
            <SecondaryTitle id="virginia">
              12. DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </SecondaryTitle>
            <p>
              In Short: Yes, if you are a resident of Virginia, you may be
              granted specific rights regarding access to and use of your
              personal information.
            </p>
            <ThirdTitle>Virginia CDPA Privacy Notice</ThirdTitle>
            <p>Under the Virginia Consumer Data Protection Act (CDPA):</p>
            <p>
              "Consumer" means a natural person who is a resident of the
              Commonwealth acting only in an individual or household context. It
              does not include a natural person acting in a commercial or
              employment context.
            </p>
            <p>
              "Personal data" means any information that is linked or reasonably
              linkable to an identified or identifiable natural person.
              "Personal data" does not include de-identified data or publicly
              available information.
              <br />
              <br />
              "Sale of personal data" means the exchange of personal data for
              monetary consideration.
              <br />
              <br />
              If this definition "consumer" applies to you, we must adhere to
              certain rights and obligations regarding your personal data.
              <br />
              <br />
              The information we collect, use, and disclose about you will vary
              depending on how you interact with Brella Productions and our
              Services. To find out more, please visit the following links:
            </p>
            <ul>
              <li>
                <a href="#infocollect">Personal data we collect</a>
              </li>
              <li>
                <a href="#infouse">How we use your personal data</a>
              </li>
              <li>
                <a href="#whoshare">
                  When and with whom we share your personal data
                </a>
              </li>
            </ul>
            <p>
              <u>Your rights with respect to your personal data</u>
            </p>
            <ul>
              <li>
                Right to be informed whether or not we are processing your
                personal data
              </li>
              <li>Right to access your personal data</li>
              <li>Right to correct inaccuracies in your personal data</li>
              <li>Right to request deletion of your personal data</li>
              <li>
                Right to obtain a copy of the personal data you previously
                shared with us
              </li>
              <li>
                Right to opt out of the processing of your personal data if it
                is used for targeted advertising, the sale of personal data, or
                profiling in furtherance of decisions that produce legal or
                similarly significant effects ("profiling") Brella Productions
                has not sold any personal data to third parties for business or
                commercial purposes. Brella Productions will not sell personal
                data in the future belonging to website visitors, users, and
                other consumers.
              </li>
            </ul>
            <p>
              <u>Exercise your rights provided under the Virginia CDPA</u>
            </p>
            <p>
              More information about our data collection and sharing practices
              can be found in this privacy notice.
              <br />
              <br />
              You may contact us by email at privacy@brella.com, by visiting{" "}
              <a href="https://brella.com/contact">
                https://brella.com/contact
              </a>
              , or by referring to the contact details at the bottom of this
              document.
              <br />
              <br />
              If you are using an authorized agent to exercise your rights, we
              may deny a request if the authorized agent does not submit proof
              that they have been validly authorized to act on your behalf.
            </p>
            <p>
              <u>Verification process</u>
            </p>
            <p>
              We may request that you provide additional information reasonably
              necessary to verify you and your consumer's request. If you submit
              the request through an authorized agent, we may need to collect
              additional information to verify your identity before processing
              your request. <br />
              <br />
              Upon receiving your request, we will respond without undue delay,
              but in all cases, within forty-five (45) days of receipt. The
              response period may be extended once by forty-five (45) additional
              days when reasonably necessary. We will inform you of any such
              extension within the initial 45-day response period, together with
              the reason for the extension.
            </p>
            <p>
              <u>Right to appeal</u>
            </p>
            <p>
              If we decline to take action regarding your request, we will
              inform you of our decision and reasoning behind it. If you wish to
              appeal our decision, please email us at privacy@brella.com. Within
              sixty (60) days of receipt of an appeal, we will inform you in
              writing of any action taken or not taken in response to the
              appeal, including a written explanation of the reasons for the
              decisions. If your appeal if denied, you may contact the{" "}
              <a
                href="https://www.oag.state.va.us/consumer-protection/index.php/file-a-complaint"
                target="_blank"
                rel="noreferrer"
              >
                Attorney General to submit a complaint
              </a>
              .
            </p>
            <SecondaryTitle id="policyupdates">
              13. DO WE MAKE UPDATES TO THIS NOTICE?
            </SecondaryTitle>
            <p>
              In Short: Yes, we will update this notice as necessary to stay
              compliant with relevant laws.
              <br />
              <br />
              We may update this privacy notice from time to time. The updated
              version will be indicated by an updated "Revised" date and the
              updated version will be effective as soon as it is accessible. If
              we make material changes to this privacy notice, we may notify you
              either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review
              this privacy notice frequently to be informed of how we are
              protecting your information.
            </p>
            <SecondaryTitle id="contact">
              14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </SecondaryTitle>
            <p>
              If you have questions or comments about this notice, you may
              contact our Data Protection Officer (DPO) , A. Middleton, by email
              at amiddleton@brella.com, by phone at +1-847-864-4040, or contact
              us by post at:
              <br />
              <br />
              Brella Productions
              <br />
              A. Middleton
              <br />
              1601 Simpson St
              <br />
              Evanston, IL 60201
              <br />
              United States
              <br />
            </p>
            <SecondaryTitle id="request">
              15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </SecondaryTitle>
            <p>
              Based on the applicable laws of your country, you may have the
              right to request access to the personal information we collect
              from you, change that information, or delete it. To request to
              review, update, or delete your personal information, please visit:{" "}
              <a href="https://brella.com/contact">
                https://brella.com/contact
              </a>
              . <br />
              <br />
              This privacy policy was created using Termly's{" "}
              <a
                href="https://termly.io/products/privacy-policy-generator/"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy Generator
              </a>
              .
            </p>
          </ContentContainer>
        </InnerPageContainer>
      </PageContainer>
    </>
  );
};

export default PrivacyPolicy;
