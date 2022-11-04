import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../components/Feed/postsSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
