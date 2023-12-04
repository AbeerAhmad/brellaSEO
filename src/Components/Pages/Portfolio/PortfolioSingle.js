import React, { useState, useEffect, useMemo, createElement } from "react";
import styled from "styled-components";
//import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import TrailContentAnimation from "../../../Utilities/TrailContentAnimation.js";
import { fetchByUID } from "../../../prismicApi.js";
import { RichText, Elements } from "prismic-reactjs";
import { truncate } from "../../../Utilities/truncate.js";
import { useOpenGraphTags } from "../../../CustomHooks/useOpenGraphTags.js";
import {
  PageContainer,
  SecondaryPageContainer,
  Section,
  StyledLinkBack,
  Title,
} from "../../styles.js";
import useViewport from "CustomHooks/UseViewport.js";
import { Helmet } from "react-helmet-async";

const MediaContainer = styled.iframe`
  height: 650px;
  width: 100%;

  @media (max-width: 1024px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 500px;
  }

  @media (max-width: 425px) {
    height: 300px;
  }
`;

// -- Function to add unique key to props
const propsWithUniqueKey = function (props, key) {
  return Object.assign(props || {}, { key });
};

const htmlSerializer = (type, element, content, children, key) => {
  let props = {};
  switch (type) {
    case Elements.heading2: // Heading 2
      props = { className: "port-h2" };
      return createElement("h2", propsWithUniqueKey(props, key), children);
    default:
      return;
  }
};

const PortfolioSingle = () => {
  const [found, setFound] = useState(false);
  const [example, setExample] = useState(null);
  let navigate = useNavigate();
  const { slug } = useParams();
  //need to use the variable for 4K styles
  const { width } = useViewport();
  const breakpoint = width < 2560 ? 0 : 2560;

  useEffect(() => {
    try {
      fetchByUID("portfolio", slug).then((response) => {
        setExample(response.data);
        setFound(true);
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }, [slug]);

  const openGraphData = useMemo(() => {
    const tags = [];
    if (example === null) return tags;
    tags.push({ name: "title", content: example.name });
    tags.push({ name: "url", content: window.location.href });
    tags.push({ name: "image", content: example.thumbnail_image.url });
    const desc = truncate(
      example.description.find((el) => el.type === "paragraph")?.text || "",
      250
    );
    tags.push({ name: "description", content: desc });
    return tags;
  }, [example]);

  useOpenGraphTags(openGraphData);

  // FOR SEO PURPOSES
  const metaDescriptionTags = useMemo(() => {
    if (
      !example ||
      !example?.meta_description ||
      example?.meta_description?.length === 0
    ) {
      return [];
    }
    return example?.meta_description?.map((metaDesc, index) => (
      <meta
        key={`metaDesc${index}`}
        name={"description"}
        content={metaDesc?.text || ""}
      />
    ));
  }, [example]);

  // FOR SEO PURPOSES
  const metaTitleTags = useMemo(() => {
    if (!example || !example?.meta_title || example?.meta_title?.length === 0) {
      return [];
    }
    return example?.meta_title?.map((metaTitle, index) => (
      <meta
        key={`metaTitle${index}`}
        name={"title"}
        content={metaTitle?.text || ""}
      />
    ));
  }, [example]);

  if (!found) return;

  return (
    <PageContainer>
      <Helmet>
        <title>
          {RichText.asText(example?.h1bold || example?.title || "")}
        </title>
        {metaDescriptionTags}
        {metaTitleTags}
      </Helmet>
      <SecondaryPageContainer>
        <StyledLinkBack onClick={() => navigate(-1)} />
      </SecondaryPageContainer>
      <SecondaryPageContainer>
        <Section col={12} padding={"p-4"} size={breakpoint}>
          <TrailContentAnimation>
            <Title>
              <span className="port-h1-bold">
                {RichText.asText(example.h1bold)}
              </span>{" "}
              {RichText.asText(example.h1reg)}
            </Title>

            {example.description.length !== 0 && (
              <RichText
                render={example.description}
                htmlSerializer={htmlSerializer}
              />
            )}
          </TrailContentAnimation>
          <div>
            {/*Only render iframe when there is emebed url  present*/}
            {example.media.embed_url && (
              <MediaContainer
                src={example.media.embed_url}
                className="vimeo-iframe-mobile"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={example.name}
              />
            )}
            {/* Only render unity generated app */}
            {example.special_link.url && (
              <MediaContainer
                src={example.special_link.url}
                className="vimeo-iframe-mobile"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={example.name}
              />
            )}
            {/*Only render iframe when there is image url present*/}
            {example.main_image.url && (
              <img
                className="port-img-responsive w-100"
                src={example.main_image.url}
                alt={example.name}
                loading="lazy"
              />
            )}
          </div>
        </Section>
      </SecondaryPageContainer>
    </PageContainer>
  );
};

export default PortfolioSingle;
