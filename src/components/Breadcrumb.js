import React from 'react';
import * as PropTypes from 'prop-types';
import { Breadcrumb as BreadcrumbAnt } from 'antd';

const Breadcrumb = ({ categories }) => (
  <BreadcrumbAnt separator=">">
    {categories.map((category, index) =>
      <BreadcrumbAnt.Item key={index}>{category}</BreadcrumbAnt.Item>
    )}
  </BreadcrumbAnt>
);

Breadcrumb.propTypes = {
  categories: PropTypes.array
};

export default Breadcrumb;
