import React from 'react';
import { Row, Col } from 'antd';

const NotFound404 = () => {
  return (
    <Row
      type="flex"
      align="middle"
      justify="center"
      style={{ minHeight: 'calc(100vh - 200px)' }}>
      <Col>
        <strong style={{ fontSize: '1.5rem' }}>
          Página no encontrada | 404
        </strong>
      </Col>
    </Row>
  );
};

export default NotFound404;
