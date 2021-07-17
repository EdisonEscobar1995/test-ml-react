import React from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Result = () => {
  let query = useQuery();
  return (
    <div>
      Prueba {query.get('search')}
    </div>
  );
}

export default Result;
