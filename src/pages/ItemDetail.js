import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import { Loading, ProductDetail } from '../components';

const ItemDetail = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setData({});
    setError(false);
    axios
      .get("/api/items/" + id)
      .then((response) => {
        if (response.data.status !== 404) {
          setData(response.data);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <Loading loading={loading}>
        {Object.keys(data).length > 0 && <ProductDetail data={data} />}
        {error && (
          <Row
            type="flex"
            align="middle"
            justify="center"
            style={{ minHeight: 'calc(100vh - 200px)' }}>
            <Col>
              <strong style={{ fontSize: '1.5rem' }}>
                {`Item '${id}' no encontrado`}
              </strong>
            </Col>
          </Row>
        )}
      </Loading>
    </>
  );
}

export default ItemDetail;
