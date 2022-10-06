import { getPosts } from '../services/fetchUtils';
import PostDetail from './Posts/PostDetail';

export async function Home() {
  const postsData = await getPosts();
  // console.log(postsData);

  return (
    <>
      <div>
        {postsData.map((post) => (
          <PostDetail key={post.id} title={post.title} description={post.description} />
        ))}
      </div>

      <main className="home">
        <h1>Bulletin Board</h1>
      </main>
    </>
  );
}
