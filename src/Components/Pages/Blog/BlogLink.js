import React, { useState } from "react";
import placeholderImg from "../../../assets/img/brella-landing-letters@2x.png";
import { BlogCard, BlogCardTitle } from "../../styles.js";

const BlogLink = ({ key, to, featuredImage, title, id, uid }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const BlogImage = ({ featuredImage, hover }) => {
    const { url, alt } = featuredImage;
    if (!url) {
      return (
        <img
          src={placeholderImg}
          alt="Placeholder logo"
          loading="lazy"
          style={{
            ...(hover && { boxShadow: "0 0 11px #f4803b" }),
          }}
        />
      );
    }
    return (
      <img
        src={url}
        alt={alt}
        style={{
          ...(hover && { boxShadow: "0 0 11px #f4803b" }),
        }}
      />
    );
  };

  const BlogTitle = ({ title, id, uid }) => {
    return (
      <BlogCardTitle
        key={id}
        to={"/blog/" + uid}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title[0].text}
      </BlogCardTitle>
    );
  };

  return (
    <div key={key + 3}>
      <BlogCard
        key={key}
        to={to}
        onClick={(e) => {
          sessionStorage.navScrollY = window.scrollY;
        }}
      >
        <BlogImage
          featuredImage={featuredImage}
          key={key + 2}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          hover={hover}
        />
      </BlogCard>
      <BlogTitle title={title} id={id} uid={uid} key={key + 1}></BlogTitle>
    </div>
  );
};

export default BlogLink;
