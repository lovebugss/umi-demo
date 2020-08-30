/**
 * 帖子详情专用model
 */
import { queryPostDetailById } from '../service/post';

export default {
  namespace: 'postDetail',
  state: {
    postDetail: {},
  },
  effects: {
    *fetchPostById({ id }, { call, put }) {
      const response = yield call(queryPostDetailById, id);
      yield put({
        type: 'queryPost',
        payload: response,
      });
    },
  },
  reducers: {
    queryPost(state, action) {
      return { ...state, postDetail: action.payload.data || {} };
    },
  },
  subscriptions: {},
};
