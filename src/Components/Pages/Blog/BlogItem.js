import React from "react";
import styled from "styled-components";

const BlogContent = styled.div`
  border-left: solid 4px orange;
  padding: 20px 50px 20px 50px;
  color: black;
  margin: 20px;
`;

const BlogItem = (props) => {
  return (
    <>
      <div>
        {props.children.heading?.type === "image" ? (
          <img src={`${props.children.heading?.url}`}></img>
        ) : null}
        <BlogContent>
          <p style={{ fontWeight: "bold" }}>{props.children.heading?.text}</p>
          {props.children.children.map((p) => {
            return `${p.text}${"\n"}`;
          })}
        </BlogContent>
      </div>
    </>
  );
};

export default BlogItem;
