import React from 'react';
import PostCard from '../Posts/PostCard';
import { usePosts } from '../hooks/usePosts';

function Posts() {

  const posts = usePosts();

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
