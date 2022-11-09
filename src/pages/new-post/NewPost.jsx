import React from "react";
import { GrAdd } from "react-icons/gr";
import classes from "./NewPost.module.css";

const NewPost = () => {
  return (
    <div className={classes.container}>
      <img
        src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
        alt=""
        className={classes.img}
      />

      <form className={classes.newPostForm}>
        <div className={classes.titleimage}>
          <label htmlFor="img-upload">
            <GrAdd className={classes.addIcon} />
          </label>
          <input type="file" id="img-upload" style={{ display: "none" }} />
          <input
            placeholder="Title"
            className={classes.titleInput}
            autoFocus={true}
          />
        </div>
        <textarea
          placeholder="Tell your story..."
          className={classes.content}
        />

        <button type="submit" className={classes.btn}>
          Publish
        </button>
      </form>
    </div>
  );
};

export default NewPost;
