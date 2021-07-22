import React, { useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Layout, Spin } from 'antd';
import { Route, Switch, withRouter } from 'react-router-dom';
import routes from '../config/routes';
import NotFound404 from './404';
import { HeaderLayout } from '../components';


const { Content } = Layout;

const Routes = (querySearch) => {
  return (
    <Suspense fallback={<Spin size="large" className="custom-layout-spin" />}>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.index}
            exact={route.exact ? route.exact : false}
            path={route.path}
            render={props => React.createElement(route.component, props, null)}
          />
        ))}
        <Route path="*" component={NotFound404} />
      </Switch>
    </Suspense>
  );
};

const LayoutPage = () => {
  const [querySearch, setQuerySearch] = useState('');
  return (
    <Layout className="custom-layout">
      <HeaderLayout
        querySearch={querySearch}
        setQuerySearch={setQuerySearch}
      />
      <Content className="custom-layout-content">
        <Routes querySearch={querySearch} />
      </Content>
    </Layout>
  );
};

LayoutPage.propTypes = {
  location: PropTypes.object,
};

export default withRouter(LayoutPage);
