import { useCallback, useEffect, useState } from 'react';
import { postsFormatter } from '../utils/postsFormatter';

export const usePosts = (feedURL, numOfPosts, updateInterval) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getAndSetPosts = useCallback(() => {
    const formattedURL = `${feedURL}?limit=${numOfPosts}${
      posts.length ? `start_id=${posts[0].id}` : ''
    } `;
    fetch(formattedURL)
      .then((res) => res.json())
      .then((data) => {
        setPosts(postsFormatter(data, numOfPosts));
        setIsError(false);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        console.error(error);
      });
  }, [feedURL, numOfPosts, posts.length]);

  useEffect(() => {
    getAndSetPosts();
  }, [getAndSetPosts]);

  useEffect(() => {
    const interval = setInterval(() => getAndSetPosts(), updateInterval);

    return () => clearInterval(interval);
  }, [getAndSetPosts, updateInterval]);

  return { posts, isLoading, isError };
};
