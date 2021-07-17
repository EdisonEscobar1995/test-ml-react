import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="about">
        <Button htmlType="button" type="primary" size="large">
          Ir a about
        </Button>
      </Link>
    </div>
  );
};

export default Home;
