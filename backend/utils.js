const response = {
  author: {
    name: "Edison",
    lastname: "Escobar",
  }
};

module.exports = {
  getStructureSearch: async (data, handleGetMostCategory) => {
    const items = [];
    let categories = [];
    const results = data.results;
    const filters = data.filters;
    const available_filters = data.available_filters;
    if (results.length > 0) {
      for (let i in results) {
        if (i<4) {
          items.push({
            id: results[i].id,
            title: results[i].title,
            price: {
              currency: results[i].currency_id,
              amount: results[i].price,
              decimals: 0,
            },
            picture: results[i].thumbnail,
            condition: results[i].condition,
            free_shipping: results[i].shipping.free_shipping,
            seller_state: results[i].seller_address.state.name
          })
        }
      }
    }
    if (filters.length > 0) {
      for (let i in filters) {
        if (filters[i].id === "category") {
          const path_from_root = (filters[i].values[0]?.path_from_root || []);
          for (let j in path_from_root) {
            categories.push(path_from_root[j].name);
          }
        }
      }
    } else if (available_filters.length > 0) {
      for (let i in available_filters) {
        if (available_filters[i].id === "category") {
          categories = await handleGetMostCategory(available_filters[i].values);
        }
      }
    }
    response.categories = categories;
    response.items = items;
    
    return response;
  },

  getStructureItem: async (data, dataDescription, getPathCategory) => {
    let item = {};

    if (data) {
      item = {
        id: data.id,
        title: data.title,
        price: {
          currency: data.currency_id,
          amount: data.price,
          decimals: 0,
        },
        picture: data.thumbnail,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        description: dataDescription.plain_text
      }
    }
    response.categories = await getPathCategory(data.category_id);
    response.item = item;

    return response;
  }
};
