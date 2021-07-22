import React from 'react';
import * as PropTypes from 'prop-types';
import { Col, Row, Spin } from 'antd';

const Loading = ({ loading, children}) => (
  <Row type="flex" className="custom-loading-row">
    <Col span={24} className="custom-loading-col">
      <Spin spinning={loading} className={'custom-loading-spin'} delay={400}>
        {children}
      </Spin>
    </Col>
  </Row>
);

Loading.propTypes = {
  children: PropTypes.any,
  loading: PropTypes.bool,
};

export default Loading;
