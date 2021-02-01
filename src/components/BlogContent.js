// Child Component of BlogPost it gets props.articleText from BlogPost(Parent Component)
import React from "react";

function BlogContent(props) {
  console.log(props)

  // hide unpublished content BlogContent
  if (!props.isPublished) return null; 

  return ( 
  <div id="blog-content">
    <h1>{props.articleText}</h1>
    <p>{props.minutesToRead} minutes to read</p>
  </div>
  );
}

export default BlogContent;
