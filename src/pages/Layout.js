import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import routes from '../config/routes';
import NotFound404 from './404';
import { Header } from 'antd/lib/layout/layout';
import logoML from '../img/logo_ML_2x.png';

const { Footer, Content } = Layout;

const Routes = () => {
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

const LayoutPage = props => {
  const {
    location: { pathname },
  } = props;

  return (
    <Layout className="custom-layout">
      <Header className="custom-header">
        <div className="custom-container-header">
          <img className="img-ml" src={logoML} alt="logo_ML" />
          <Input size="small" placeholder="Nunca dejes de buscar" style={{ height: '30px' }} />
        </div>
      </Header>
      <Content className="custom-layout-content">
        <Routes />
      </Content>
    </Layout>
  );
};

LayoutPage.propTypes = {
  location: PropTypes.object,
};

export default withRouter(LayoutPage);
