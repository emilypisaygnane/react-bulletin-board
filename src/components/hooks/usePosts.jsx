import { useState, useEffect } from 'react';
import { getPosts } from '../../services/fetchUtils';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      return setPosts(data);
    }
    fetchData();
  }, []);
  return posts;
}