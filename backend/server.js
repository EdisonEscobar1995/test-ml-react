const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

const { getStructureSearch, getStructureItem } = require('./utils.js');

const HOST = 'https://api.mercadolibre.com/';

const getPathCategory = async (idCategory) => {
  const path_from_root = [];
  try {    
    const responseCategory = await axios.get(HOST + 'categories/' + idCategory);
    if (responseCategory.data.path_from_root.length > 0) {
      const paths = responseCategory.data.path_from_root;
      paths.forEach(path =>{
        path_from_root.push(path.name);
      })
    }
  } catch (error) {
    console.log('Error = ', error);
  }

  return path_from_root;
};

const getCategoryMostResults = async (categories) => {
  let path_from_root = [];
  let most_results = {
    results: 0
  };
  categories.forEach(element => {
    if (element.results > most_results.results) {
      most_results = element;
    }
  });
  console.log('most_results = ', most_results);

  if (most_results.results > 0) {
    /* try {    
      const responseCategory = await axios.get(HOST + 'categories/' + most_results.id);
      if (responseCategory.data.path_from_root.length > 0) {
        const paths = responseCategory.data.path_from_root;
        paths.forEach(path =>{
          path_from_root.push(path.name);
        })
      }
    } catch (error) {
      console.log('Error = ', error);
    } */
    path_from_root = await getPathCategory(most_results.id);
  }

  return path_from_root;
};

app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/api/items', (req, res) => {
  var queryParam = req.query;
  var query = req.query['q'];
  console.log(queryParam);
  console.log(query);
  axios.get(HOST + 'sites/MLA/search?q=' + query)
    .then(async (response) => {
      console.log("query ejecutado");
      res.send(await getStructureSearch(response.data, getCategoryMostResults));
    })
    .catch((error) => {
      console.log(error);
      res.send({
        status: 404,
        error
      })
    })
});

app.get('/api/items/:id', async (req, res) => {
  const id = req.params.id;
  if (id) {
    try {    
      const responseItem = await axios.get(HOST + 'items/' + id);
      const responseItemDescription = await axios.get(HOST + 'items/' + id + '/description');

      res.send(await getStructureItem(responseItem.data, responseItemDescription.data, getPathCategory));
    } catch (error) {
      console.log('Error = ', error);
      res.send({
        status: 404,
        error
      })
    }    
  }
})
