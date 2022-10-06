import React from 'react';
import PostDetail from '../Posts/PostDetail';
import { usePosts } from '../hooks/usePosts';

function Home() {

  const posts = usePosts();

  return (
    <main className="home">
      <h1>Bulletin Board</h1>
      { posts.map((post) => (
        <PostDetail
          key={ post.id } { ...post } />
      )) }
    </main>
  );
}

export default Home;
