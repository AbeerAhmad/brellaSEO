import React, { useState, useEffect, useMemo } from "react";
import { RichText } from "prismic-reactjs";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { BlogHTMLSerializer } from "./BlogHTMLSerializer.js";
import { fetchByUID } from "../../../prismicApi.js";
import { linkResolver } from "../../../prismic-configuration.js";
import BlogSliceMap from "./BlogSliceMap.js";
import { useOpenGraphTags } from "../../../CustomHooks/useOpenGraphTags.js";
import { truncate } from "../../../Utilities/truncate.js";
import {
  PageContainer,
  SecondaryPageContainer,
  Section,
  StyledLinkBack,
  Title,
} from "../../styles.js";
import { dateFormat } from "../../../Utilities/util.js";
import useViewport from "CustomHooks/UseViewport.js";
import { Helmet } from "react-helmet-async";

const PublishDateContainer = styled.div`
  font-size: 1rem;
  font-family: "FuturaStd-Condensed", Futura, Helvetica, Arial, sans-serif;
  text-align: left;

  @media (min-width: 2560px) {
    font-size: 2rem;
  }
`;

const BlogSingle = () => {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();
  //need to use the variable for 4K styles
  const { width } = useViewport();
  const breakpoint = width < 2560 ? 0 : 2560;

  const openGraphData = useMemo(() => {
    const tags = [];
    if (post === null) return tags;
    tags.push({ name: "title", content: post.title[0].text });
    tags.push({ name: "url", content: window.location.href });
    tags.push({ name: "image", content: post.featured_image.url });
    const desc = truncate(
      post.body.find((el) => el.type === "paragraph")?.text || "",
      250
    );
    tags.push({ name: "description", content: desc });
    return tags;
  }, [post]);

  // FOR SEO PURPOSES
  const metaDescriptionTags = useMemo(() => {
    if (
      !post ||
      !post?.meta_description ||
      post?.meta_description?.length === 0
    )
      return [];
    return post?.meta_description?.map((metaDesc, index) => (
      <meta
        key={`metaDesc${index}`}
        name={"description"}
        content={metaDesc?.text || ""}
      />
    ));
  }, [post]);

  // FOR SEO PURPOSES
  const metaTitleTags = useMemo(() => {
    if (!post || !post?.meta_title || post?.meta_title?.length === 0) return [];
    return post?.meta_title?.map((metaTitle, index) => (
      <meta
        key={`metaTitle${index}`}
        name={"title"}
        content={metaTitle?.text || ""}
      />
    ));
  }, [post]);

  useOpenGraphTags(openGraphData);

  useEffect(() => {
    try {
      fetchByUID("blog", slug).then((response) => {
        setPost(response.data);
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }, [slug]);

  return (
    <>
      {post && (
        <PageContainer>
          <Helmet>
            <title>{RichText.asText(post?.title || "")}</title>
            {metaDescriptionTags}
            {metaTitleTags}
          </Helmet>
          <SecondaryPageContainer>
            <StyledLinkBack onClick={() => navigate(-1)} />
            <div>
              <Section col={12} padding={"p-4"} size={breakpoint}>
                <Title>{RichText.asText(post.title)}</Title>
              </Section>
              <Section col={12} padding={"p-4"} size={breakpoint}>
                <PublishDateContainer>
                  Publication date:{" "}
                  {dateFormat(post.published_date, "MM dd, yyyy")}
                </PublishDateContainer>
                <RichText
                  render={post.body}
                  htmlSerializer={BlogHTMLSerializer}
                  linkResolver={linkResolver}
                />
                <BlogSliceMap slice={post.body1} />
              </Section>
            </div>
          </SecondaryPageContainer>
        </PageContainer>
      )}
    </>
  );
};

export default BlogSingle;
