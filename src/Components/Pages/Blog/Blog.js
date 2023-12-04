import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import {
  PageTitleContainer,
  IndividualTitleContainer,
  FirstLine,
  SecondLine,
  BlogRow,
} from "../../styles.js";
import BlogLink from "./BlogLink.js";
import "../Portfolio/portfolio.css";
import Background_Circles1 from "../../../assets/img/parallax-bokeh_layer1.png";
import Background_Circles2 from "../../../assets/img/parallax-bokeh_layer2.png";
import { fetchByDocument } from "../../../prismicApi.js";
import { getCanoicalUrl } from "Utilities/util.js";

const PageContainerB = styled.div`
  display: flex;
  color: black;
  width: 100%;
  flex-direction: column;
  background-image: url(${Background_Circles1});
  background-size: cover;
  background-repeat: no-repeat;
`;

const InnerPageContainerB = styled.div`
  display: flex;
  color: black;
  width: 100%;
  flex-direction: column;
  background-image: url(${Background_Circles2});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
`;

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const screenSize = window.innerWidth;
  const storedScrollY = sessionStorage.navScrollY ?? 0;

  useEffect(() => {
    //delete sessionStorage.blogData;

    let storedBlogData = [];
    if (sessionStorage.blogData) {
      storedBlogData = JSON.parse(sessionStorage.blogData);
      setPosts(storedBlogData);
    } else {
      //Blog data
      const fetchAllPosts = async () => {
        let page = 1;
        let total = 2;
        const posts = [];

        while (page <= total) {
          try {
            const response = await fetchByDocument("blog", {
              orderings: "my.blog.published_date desc",
              pageSize: 100,
              page,
            });
            if (!response || !response.total_pages) {
              total = 0;
              continue;
            }
            total = response.total_pages;
            page++;
            posts.push(...response.results);
          } catch (error) {
            total = 0;
          }
        }
        return posts;
      };

      fetchAllPosts().then((posts) => {
        sessionStorage.blogData = JSON.stringify(posts);
        storedBlogData = JSON.parse(sessionStorage.blogData);
        setPosts(storedBlogData);
      });
    }

    setTimeout(() => {
      // Scroll Logic
      if (storedScrollY) window.scroll(0, storedScrollY);
    }, 10);
  }, [screenSize, storedScrollY]);

  return (
    <>
      <Helmet>
        <title>Brella | Blog</title>

        {/* Canonical Tag */}
        <link rel="canonical" href={getCanoicalUrl("/blog")} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Brella Productions | Insights and Inspiration"
        />
        <meta
          name="twitter:description"
          content="Digital production and strategic services focused on audience engagement in support of your business objectives."
        />
        <meta
          name="twitter:image"
          content="https://brella.com/Brella_Web-refresh_PREVIEW-CARD.jpg"
        />

        {/* Open Graph Meta Tags for Social Media */}
        <meta
          property="og:title"
          content="Brella Productions | Insights and Inspiration"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brella.com/blog" />
        <meta
          name="og:description"
          content="Digital production and strategic services focused on audience engagement in support of your business objectives."
          data-rh="true"
        />
        <meta
          property="og:image"
          content="https://brella.com/Brella_Web-refresh_PREVIEW-CARD.jpg"
        />
      </Helmet>
      <PageContainerB>
        <InnerPageContainerB>
          <PageTitleContainer>
            <IndividualTitleContainer>
              <FirstLine>OUR</FirstLine>
              <SecondLine>BLOG</SecondLine>
            </IndividualTitleContainer>
          </PageTitleContainer>
          <BlogRow key={Date()}>
            {posts?.map((post, index) => {
              return (
                <BlogLink
                  key={index}
                  to={"/blog/" + post.uid}
                  onClick={(e) => {
                    sessionStorage.navScrollY = window.scrollY;
                  }}
                  featuredImage={post.data.featured_image}
                  title={post.data.title}
                  id={post.id}
                  uid={post.uid}
                />
              );
            })}
          </BlogRow>
        </InnerPageContainerB>
      </PageContainerB>
    </>
  );
};

export default Blog;
