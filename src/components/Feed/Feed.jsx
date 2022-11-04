import { Post } from '../Post/Post';
import { FeedSection } from './styles';
import { usePosts } from '../../hooks/usePosts';

export const Feed = ({ URL, numOfPosts, updateInterval }) => {
  const { posts } = usePosts(URL, numOfPosts, updateInterval);

  return (
    <FeedSection>
      {posts.map((post) => (
        <Post
          key={post.id}
          content={post.text}
          author={post.author}
          date={post.date}
        />
      ))}
    </FeedSection>
  );
};