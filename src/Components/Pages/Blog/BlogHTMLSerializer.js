import React from "react";
import { Elements } from "prismic-reactjs";
import { linkResolver } from "../../../prismic-configuration.js";
// import styled from "styled-components";

// -- Function to add unique key to props
const propsWithUniqueKey = function (props, key) {
  return Object.assign(props || {}, { key });
};

// const BlogContent = styled.div`
//   border-left: solid 4px orange;
//   padding: 0px 0px 0px 30px;
//   color: black;
//   margin: 30px;
// `;

// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
export const BlogHTMLSerializer = function (
  type,
  element,
  content,
  children,
  key
) {
  let props = {};

  switch (type) {
    // Add a class to paragraph elements
    case Elements.paragraph:
      props = { className: "paragraph-class" };
      return (
        // <BlogContent>
        React.createElement("p", propsWithUniqueKey(props, key), children)
        // </BlogContent>
      );

    // Don't wrap images in a <p> tag
    case Elements.image:
      props = {
        src: element.url,
        alt: element.alt || "",
        className: "single-blog-image",
      };
      return React.createElement("img", propsWithUniqueKey(props, key));

    // Add a class to hyperlinks
    case Elements.hyperlink:
      const targetAttr = element.data.target
        ? { target: element.data.target }
        : {};
      const relAttr = element.data.target ? { rel: "noopener" } : {};
      props = Object.assign(
        {
          className: "link-class",
          href: element.data.url || linkResolver(element.data),
        },
        targetAttr,
        relAttr
      );
      return React.createElement("a", propsWithUniqueKey(props, key), children);

    // Return null to stick with the default behavior
    default:
      return null;
  }
};
