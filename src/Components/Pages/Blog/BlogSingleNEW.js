import React, { useState, useEffect, useMemo } from "react";
import { RichText } from "prismic-reactjs";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchByUID } from "../../../prismicApi.js";
import { BlogHTMLSerializer } from "./BlogHTMLSerializer.js";
import { linkResolver } from "../../../prismic-configuration.js";
import BlogSliceMap from "./BlogSliceMap.js";
import { useOpenGraphTags } from "../../../CustomHooks/useOpenGraphTags.js";
import { truncate } from "../../../Utilities/truncate.js";
import {
  PageContainer,
  PageTitleContainer,
  Section,
  //StyledLinkBack,
} from "../../styles.js";
//import { dateFormat } from "../../../Utilities/util.js";
import {
  px2vw,
  calculateMargin,
  screenWidth,
} from "../../../Utilities/util.js";
import BlogItem from "./BlogItem.js";

// const PublishDateContainer = styled.div`
//   font-size: 0.8rem;
//   font-family: "FuturaStd-Condensed", Futura, Helvetica, Arial, serif;
// `;

const BlogSingle = () => {
  const [post, setPost] = useState(null);
  //const [postBody, setPostBody] = useState(null);
  //const navigate = useNavigate();
  const { slug } = useParams();

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
    console.log(post.body);
    return tags;
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

  // const bodySet =
  //   post.body[0].type === "image" ? post.body.slice(1) : post.body;

  // setPost(bodySet);

  const BackImage = styled.div`
    position: relative;

    img {
      position: absolute;
      width: 100%;
      height: auto;
    }
  `;

  const TitleRow = styled.div`
    margin: ${px2vw(calculateMargin(900), screenWidth)} ${px2vw(600)} 0
      ${px2vw(150)};
  `;

  const Title = styled.h1`
    font-size: 3rem;
    //font-weight: bold;
    color: black;
    line-height: 1;
    text-shadow: 2px 2px 9px rgba(0, 0, 0, 0.8); //-1px 1px 10px rgba(0, 0, 0, 0.75);
    text-transform: uppercase;

    /* @media (min-width: 600px) {
      font-size: 2rem;
    }
    @media (min-width: 800px) {
      font-size: 3rem;
    }
    @media (min-width: 1200px) {
      font-size: 5rem;
    }

    @media (min-width: 2560px) {
      font-size: 6rem;
    } */
  `;

  const BlogContent = styled.div`
    border-left: solid 4px orange;
    padding: 0px 0px 0px 30px;
    color: black;
    margin: 150px 0 0 0;
  `;

  return (
    <>
      {post && (
        <PageContainer>
          {/* <StyledLinkBack onClick={() => navigate("/blog")} /> */}
          <BackImage>
            <img src={post.featured_image.url} alt="Event" loading="lazy"></img>
          </BackImage>
          <PageTitleContainer>
            <TitleRow>
              <Title>{RichText.asText(post.title)}</Title>
            </TitleRow>
          </PageTitleContainer>
          <Section col={12} padding={"p-4"}>
            <BlogContent>
              <RichText
                render={post.body}
                htmlSerializer={BlogHTMLSerializer}
                linkResolver={linkResolver}
              />
              <BlogSliceMap slice={post.body1} />
            </BlogContent>
          </Section>
        </PageContainer>
      )}
    </>
  );
};

export default BlogSingle;
