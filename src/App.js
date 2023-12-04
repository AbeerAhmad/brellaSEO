import React, { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "./index.css";
import styled from "styled-components";
import GlobalFonts from "./assets/fonts/fonts.js";
import CookieBanner from "./Components/Shared/CookieBanner.js";
import LoadData from "Utilities/LoadData.js";
import TrainingContent from "./Components/Pages/TrainingAsAnEvent/TrainingContent.js";
import { RotatingLines } from "react-loader-spinner";
const Home = lazy(() => import("./Components/Pages/Home/Home.js"));
const Events = lazy(() => import("./Components/Pages/Events/Events.js"));
const Video = lazy(() => import("./Components/Pages/Video/Video.js"));
const PageNotFound = lazy(() => import("./Components/Shared/404-page.js"));
const Menu = lazy(() => import("./Components/Shared/Menu/Menu.js"));
const Footer = lazy(() => import("./Components/Shared/Footer/Footer.js"));
const PrivacyPolicy = lazy(() =>
  import("./Components/Shared/PrivacyPolicy/PrivacyPolicy.js")
);
const Design = lazy(() => import("./Components/Pages/Design/Design.js"));
const Elearning = lazy(() =>
  import("./Components/Pages/Elearning/Elearning.js")
);
const Learning = lazy(() => import("./Components/Pages/Learning/Learning.js"));
const MeetingsEvents = lazy(() =>
  import("./Components/Pages/MeetingsEvents/MeetingsEvents.js")
);
const CorporateCommunications = lazy(() =>
  import(
    "./Components/Pages/CorporateCommunications/CorporateCommunications.js"
  )
);
const CustomerEducation = lazy(() =>
  import("./Components/Pages/CustomerEducation/CustomerEducation.js")
);
const InternalSupport = lazy(() =>
  import("./Components/Pages/InternalSupport/InternalSupport.js")
);
const Portfolio = lazy(() =>
  import("./Components/Pages/Portfolio/Portfolio.js")
);
const PortfolioSingle = lazy(() =>
  import("./Components/Pages/Portfolio/PortfolioSingle.js")
);
const Blog = lazy(() => import("./Components/Pages/Blog/Blog.js"));
const BlogSingle = lazy(() => import("./Components/Pages/Blog/BlogSingle.js"));
const About = lazy(() => import("./Components/Pages/About/About.js"));
const ContactPage = lazy(() =>
  import("./Components/Pages/Contact/ContactPage.js")
);
const Careers = lazy(() => import("./Components/Pages/Careers/Careers.js"));

const AppContainer = styled.div`
  display: flex;
  color: black;
  min-height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

function App() {
  const [loadFooter, setLoadFooter] = useState(false);

  const helmetContext = {};

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadFooter(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [loadFooter]);

  return (
    <HelmetProvider context={helmetContext}>
      <AppContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Video Production, Events and Digital Strategy | Brella</title>
          <meta
            name="description"
            content="Brella is a full-spectrum digital production company, providing communications, learning, event and staffing solutions for healthcare and wellness organizations."
          />
        </Helmet>
        <Suspense fallback={<RotatingLines strokeColor="#f3803b" />}>
          <GlobalFonts />
          <LoadData />
          <Menu />
          <Routes>
            <Route strict exact path="/" element={<Home />} />
            <Route exact path="/events" element={<Events />} />
            <Route exact path="/video" element={<Video />} />
            <Route exact path="/design" element={<Design />} />
            <Route exact path="/elearning" element={<Elearning />} />
            <Route exact path="/learning" element={<Learning />} />
            <Route exact path="/meetingsevents" element={<MeetingsEvents />} />
            <Route
              exact
              path="/corporate"
              element={<CorporateCommunications />}
            />
            <Route exact path="/customer" element={<CustomerEducation />} />
            <Route exact path="/internal" element={<InternalSupport />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<PortfolioSingle />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogSingle />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/careers" element={<Careers />} />
            <Route exact path="/privacy" element={<PrivacyPolicy />} />
            <Route
              exact
              path="/training-as-an-event"
              element={<TrainingContent />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {loadFooter ? <Footer /> : null}
          {/* <Footer /> */}
          <CookieBanner />
        </Suspense>
      </AppContainer>
    </HelmetProvider>
  );
}

export default App;
