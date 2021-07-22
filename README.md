#### It uses the following modules:
* [React](https://reactjs.org) ([Create React App](https://github.com/facebook/create-react-app))
* [React Router v5](https://reacttraining.com/react-router/)
* [Ant Design](https://ant.design)
* [Less](http://lesscss.org) for Ant Design customization
* [Axios](https://github.com/axios/axios)

#### Clone project

```
git clone https://github.com/EdisonEscobar1995/test-ml-react.git
```

#### Install dependencies:

```
yarn
```
or
```
npm install
```
#### Start project - frontend:
```
yarn start
```
or
```
npm start
```
#### Start project - backend:
```
yarn start-server
```
or
```
npm start-server
```
#### Routes available

* /
* "/items?search=query"
* "/items/:id"

#### Structure folders
```
src
|-- components
|   |-- Breadcrumb.js
|   |-- HeaderLayout.js
|   |-- index.js
|   |-- Loading.js
|   |-- ProductDetail.js
|   |-- Result.js
|-- config
|   |-- routes.js
|-- img
|   |-- ic_Search_2x.png
|   |-- ic_shipping.png
|   |-- logo_ML_2x.png
|   |-- logo_ML.png
|-- pages
|   |-- 404.js
|   |-- Home.js
|   |-- ItemDetail.js
|   |-- Layout.js
|   |-- Result.js
|-- index.js
|-- styles
|   |-- detail.less
|   |-- index.less
|   |-- layout.less
|   |-- result.less

backend
|-- server.js
|-- utils.js
```