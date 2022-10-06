import React, { useContext } from 'react';
// import { getPostDetail } from '../../services/fetchUtils';
import { Redirect, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { usePost } from '../hooks/usePosts';


export default function PostDetail({ id, user_id, email }) {
  const { user } = useUser();
  const owner = user.id === user_id;
  const { title, description, error, setError } = usePost(id);
  if (!user) {
    return <Redirect to="/auth" />;
  }
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <div>
        <h2>{ title }</h2>
        <p>{ description }</p>
        <p>{ email }</p>
        {owner && (
          <p>
            <Link to={`/post/edit/:${id}`}>Edit</Link>
          </p>
        )}
      </div>
    </>
  );
}

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
