import React from 'react';
import './CreatePost.css';
const CreatePost = (post, setPost) => {
  return (
    <section className="create-post-wrapper">
      <h1>What&apos;s on your mind?</h1>
      <div className="create-post-container">
        <form className="create-post-form">
          <label htmlFor="title" className="title-input">
            <input name="title" type="text" className="title" value={ post.title } placeholder="title"/>
          </label>
          <label htmlFor="description" className="description-input">
            <input name="description" type="text" className="description" value={ post.description } placeholder="description"/>
          </label>
          <div className="create-post-button">
            <button value={ post } onClick={ (e) => { setPost(e.target.value); } }>
              create post
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreatePost;