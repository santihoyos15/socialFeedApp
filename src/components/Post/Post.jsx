import { Author, Content, Date, PostCard, Layout } from './styles';

export const Post = ({ content, author, date }) => (
  <Layout>
    <PostCard>
      <Content>{content}</Content>
      <Author>- {author}</Author>
    </PostCard>
    <Date>{date}</Date>
  </Layout>
);
