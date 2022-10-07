import React, { useContext } from 'react';
import PostCard from '../Posts/PostCard';
import { usePosts } from '../hooks/usePosts';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Posts() {
  const { user } = useContext(UserContext);
 
  const posts = usePosts();

  if (!user) {
    return <Redirect to="/auth" />;
  }

  return (
    <main className="posts">
      <h1>Bulletin Board</h1>
      { posts.map((post) => (
        <PostCard
          key={ post.id } { ...post } />
      )) }
    </main>
  );
}

export default Posts;
