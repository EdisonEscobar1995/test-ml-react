import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Breadcrumb } from "../components";
import { default as currencyFormatter } from 'currency-formatter';

const ProductDetail = ({ data }) => {
  const product = data.item;
  return (
    <>
      <Breadcrumb categories={data?.categories || []} />
      <div className="content-detail">
        <section className="sec-product">
          <div>
            <img src={product.picture} alt="Product" />
          </div>
          <div className="detail">
            <span>
              {`${product.condition === "new" ? "Nuevo - " : ""} ${
                product.sold_quantity
              } vendidos`}
            </span>
            <span>{product.title}</span>
            <span>
              {currencyFormatter.format(product.price.amount, {
                symbol: "$ ",
                decimal: ",",
                thousand: ".",
                precision: 0,
              })}
            </span>
            <Button type="primary">Comprar</Button>
          </div>
        </section>
        <section className="sec-description">
          <div>Descripción del producto</div>
          <div>{product.description}</div>
        </section>
      </div>
    </>
  );
};

ProductDetail.propTypes = {
  data: PropTypes.object,
};

export default ProductDetail;
