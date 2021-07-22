import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../components";
import { default as currencyFormatter } from "currency-formatter";
import ic_shipping from "../img/ic_shipping.png";

const Result = ({ data }) => {
  return (
    <>
      <Breadcrumb categories={data?.categories || []} />
      <div className="content-results">
        {data?.items.length > 0 ? (
          data?.items.map((item, index) => (
            <div className="item-result" key={item.id}>
              <Link to={`items/${item.id}`}>
                <img className="img-item" src={item.picture} alt={item.title} />
              </Link>
              <div key={`${index}_${item.id}`} className="item-detail">
                <span className="span-price">
                  {currencyFormatter.format(item.price.amount, {
                    symbol: "$ ",
                    decimal: ",",
                    thousand: ".",
                    precision: 0
                  })}
                  {item.condition === 'new' ? <img src={ic_shipping} alt={'ic_shipping'} /> : ''}
                </span>
                <span className="span-title">{item.title}</span>
              </div>
              <div className="item-city">
                <span>Mendoza</span>
              </div>
            </div>
          ))
        ) : (
          <Row
            type="flex"
            align="middle"
            justify="center"
            style={{ minHeight: 'calc(100vh - 200px)' }}>
            <Col>
              <strong style={{ fontSize: '1.5rem' }}>
                {`Sin resultados.`}
              </strong>
            </Col>
          </Row>
        )}
        
      </div>
    </>
  );
};

Result.propTypes = {
  data: PropTypes.object,
};

export default Result;
