import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { UserContext } from '../context/UserContext';

export default function PostDetail(post) {
  return (
    <>
      <div>
        <h2>{ post.title }</h2>
        <p>{ post.description }</p>
      </div>
    </>
  );
}
  // const { user } = useContext(UserContext);
  // if (!user) {
  //   return <Redirect to="/auth" />;
  // }

  // if (user === user.id) {
  //   return (
  //     <>
  //       <div>
  //         <h2>{title}</h2>
  //         <p>{description}</p>
  //         <button className="edit-post">Edit This Post</button>
  //       </div>
  //     </>
  //   );
  // }
