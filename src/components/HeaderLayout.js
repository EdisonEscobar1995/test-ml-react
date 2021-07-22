import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Layout, Input } from 'antd';
import logoML from '../img/logo_ML_2x.png';

const { Header } = Layout;
const { Search } = Input;

const HeaderLayout = ({ querySearch, setQuerySearch }) => {
  let history = useHistory();

  const onSearch = (value) => {
    setQuerySearch(value);
    history.push(`/items?search=${value}`);
  };

  return (
    <Header className="custom-header">
      <div className="custom-container-header">
        <img className="img-ml" src={logoML} alt="logo_ML" />
        <Search
          placeholder="Nunca dejes de buscar"
          className="input-search"
          defaultValue={querySearch}
          onSearch={onSearch}
        />
      </div>
    </Header>
  );
}

HeaderLayout.propTypes = {
  querySearch: PropTypes.string,
  setQuerySearch: PropTypes.func,
};

export default HeaderLayout;
