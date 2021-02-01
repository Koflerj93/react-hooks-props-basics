// Parent Component of BlogContent
import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

// line 10 passes BlogContent articleTest here
function BlogPost() {
  return (
    <div id="blog-post">
      {/* BlogContent is being returned from BlogPost */}
      {/* Therefore, BlogContent a child of BlogPost */}
      <BlogContent
        articleText={
          "Dear Reader: Bjarne Stroustrup has the perfect lecture oration."
        }
        isPublished={true}
        minutesToRead={1}
      />
      <Comment commentText={"I agree with this statement. - Angela Merkel"} />
      <Comment commentText={"A universal truth. - Noam Chomsky"} />
      <Comment
        commentText={
          "Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451"
        }
      />
    </div>
  );
}

export default BlogPost;
