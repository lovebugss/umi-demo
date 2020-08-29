/**
 * 帖子详情专用model
 */
import { queryPostDetailById } from './service';

export default {
  namespace: 'postDetail',
  state: {
    postId: '',
  },
  effects: {
    * fetchPostById(id, { call, put }) {
      const response = yield call(queryPostDetailById, id);
      put({
        type: 'queryPost',
        payload: response,
      });
    },
  },
  reducers: {},
  subscriptions: {},
};
