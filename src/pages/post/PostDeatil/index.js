import React from 'react';
import { useParams, connect } from 'umi';
import { Button } from 'antd';

export default () => {
  const { id } = useParams();
  return (
    <div>

      <Button type="primary">{id}</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
}
