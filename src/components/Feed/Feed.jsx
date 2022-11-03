import { FeedSection } from './styles';
import { Post } from '../Post/Post';

export const Feed = () => (
  <FeedSection>
    {[
      <Post
        content={
          "Hi new tweeps & old. Hope you're having fun Love the SO, RTs, and likes.Visit my #kindle #author  ebsite:… https://t.co/VZpaywm8eg"
        }
        author="Santiago Hoyos"
        key={1}
        date="Posted: Fri Dec 29 19:15:04"
      />,
      <Post
        content={
          "Hi new tweeps & old. Hope you're having fun Love the SO, RTs, and likes.Visit my #kindle #author  ebsite:… https://t.co/VZpaywm8eg"
        }
        author="Santiago Hoyos"
        key={2}
        date="Posted: Fri Dec 29 19:15:04"
      />,
      <Post
        content={
          "Hi new tweeps & old. Hope you're having fun Love the SO, RTs, and likes.Visit my #kindle #author  ebsite:… https://t.co/VZpaywm8eg"
        }
        author="Santiago Hoyos"
        key={3}
        date="Posted: Fri Dec 29 19:15:04"
      />,
      <Post
        content={
          "Hi new tweeps & old. Hope you're having fun Love the SO, RTs, and likes.Visit my #kindle #author  ebsite:… https://t.co/VZpaywm8eg"
        }
        author="Santiago Hoyos"
        key={4}
        date="Posted: Fri Dec 29 19:15:04"
      />,
    ]}
  </FeedSection>
);
