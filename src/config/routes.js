import { lazy } from 'react';
import Home from '../pages/Home';

const createRoute = (index, url, component, exact = false, search = "") => ({
  index,
  path: url,
  component,
  exact,
  search
});

const AsyncResults = lazy(() => import('../pages/Result.js'));
const AsyncItemDetail = lazy(() => import('../pages/ItemDetail.js'));

const routes = [
  createRoute(1, '/', Home, true),
  createRoute(2, '/items', AsyncResults, true, "?search="),
  createRoute(3, '/items/:id?', AsyncItemDetail, true)
];

export default routes;
