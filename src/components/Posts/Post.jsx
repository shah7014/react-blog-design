import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <img src={props.img} alt="" className={classes.img} />

      <div>
        <span className={classes.postCat}>Music</span>
        <span className={classes.postCat}>Life</span>
      </div>

      <span className={classes.title}>Lorem ipsum dolor sit amet</span>

      <span className={classes.time}>1 hour ago</span>

      <p className={classes.content}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ea,
        officiis consectetur beatae culpa nobis eveniet delectus, doloremque
        vero magni voluptate nesciunt cupiditate. Odio tempora dicta distinctio
        libero exercitationem cum.
      </p>
    </div>
  );
};

export default Post;
