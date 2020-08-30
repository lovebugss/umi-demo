import React from 'react';
import { Table, Tag } from 'antd';

const columns = [
  {
    title: '打分纬度',
    dataIndex: 'dimension',
    key: 'dimension',
  },
  {
    title: '名人正向',
    dataIndex: 'celebrityPositive',
    key: 'celebrityPositive',
  },
  {
    title: '名人负向',
    dataIndex: 'celebrityNegative',
    key: 'celebrityNegative',
  },
  {
    title: '名人中立',
    key: 'celebrityNeutral',
    dataIndex: 'celebrityNeutral',
  },
  {
    title: '非名人正向',
    key: 'positive',
    dataIndex: 'positive',
  },
  {
    title: '非名人中立',
    key: 'positive',
    dataIndex: 'positive',
  },
  {
    title: '非名人负向',
    key: 'neutral',
    dataIndex: 'neutral',
  },
  {
    title: '权重',
    key: 'weightValue',
    weightValue: 'weightValue',
    render: ({ weightValue }) => {
      return weightValue * 100 + '%';
    },
  },
  {
    title: '加权得分',
    key: 'score',
    dataIndex: 'score',
  },
];

const ScoreDetailTable = props => {
  let { scoreDetail, loading } = props;
  console.log('scoreDeatil:', scoreDetail);
  return (
    <div>
      <Table
        rowKey="id"
        pagination={false}
        loading={loading}
        columns={columns}
        dataSource={scoreDetail}
      />
    </div>
  );
};
export default ScoreDetailTable;
