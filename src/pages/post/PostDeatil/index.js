import React, { Component } from 'react';
import { useParams, connect } from 'umi';
import { Button } from 'antd';
import PostInfo from './components/PostInfo';
import ScoreDetailTable from './components/ScoreDetailTable';

class PostDeatil extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    const id = match.params.id;
    dispatch({
      type: 'postDetail/fetchPostById',
      id,
    });
  }

  render() {
    const { postDetail, loading } = this.props;
    const dataLoading = loading || postDetail === {};
    return (
      <div>
        <PostInfo postDetail={postDetail} />
        <ScoreDetailTable
          loading={dataLoading}
          scoreDetail={postDetail.scoreDetails}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ loading, postDetail }) => {
  return {
    postDetail: postDetail.postDetail,
    loading: loading.effects['postDetail/fetchPostById'],
  };
};
export default connect(mapStateToProps)(PostDeatil);
