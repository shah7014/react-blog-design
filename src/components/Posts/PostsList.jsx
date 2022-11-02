import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

const images = [
  "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1633117678642-7fcc7870f64a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  "https://images.unsplash.com/photo-1550147760-44c9966d6bc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  "https://images.unsplash.com/photo-1595351298020-038700609878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1594882471743-2758d2ce5f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const PostsList = () => {
  return (
    <div className={classes.posts}>
      {images.map((img, index) => (
        <Post key={index} img={img} />
      ))}
    </div>
  );
};

export default PostsList;
