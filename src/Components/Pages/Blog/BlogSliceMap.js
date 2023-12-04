import React from "react";
// import styled from "styled-components";
import { RichText } from "prismic-reactjs";
import { BlogHTMLSerializer } from "./BlogHTMLSerializer.js";
import { linkResolver } from "../../../prismic-configuration.js";
import BlogGallery from "./BlogGallery.js";

// const BlogContent = styled.div`
//   border-left: solid 4px orange;
//   padding: 0px 50px 0px 50px;
//   color: black;
//   margin: 20px;
// `;

const BlogSliceMap = ({ slice }) => {
  if (slice) {
    return slice.map((item, index) => {
      if (item.slice_type === "content_one") {
        return (
          <>
            {/* <BlogContent> */}
            <RichText
              key={index}
              render={item.primary.content}
              htmlSerializer={BlogHTMLSerializer}
              linkResolver={linkResolver}
            />
            {/* </BlogContent> */}
          </>
        );
      }
      if (item.slice_type === "gallery") {
        return (
          <React.Fragment key={index}>
            <BlogGallery gallery={item.items} />
          </React.Fragment>
        );
      }
      if (item.slice_type === "content_two") {
        return (
          <>
            {/* <BlogContent> */}
            <RichText
              key={index}
              render={item.primary.content}
              htmlSerializer={BlogHTMLSerializer}
              linkResolver={linkResolver}
            />
            {/* </BlogContent> */}
          </>
        );
      }
      return null;
    });
  }
  return null;
};

export default BlogSliceMap;
