import { useState, useEffect } from 'react';
import { getPosts } from '../../services/fetchUtils';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data);
    }
    fetchData();
  }, []);
  return posts;
};