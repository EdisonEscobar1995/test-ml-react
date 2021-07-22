import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "antd";
import axios from "axios";
import { Loading, Result as ResultComponent } from "../components";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Result = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const query = useQuery().get("search");

  debugger;
  useEffect(() => {
    setLoading(true);
    setData({});
    axios
      .get("/api/items?q=" + query)
      .then((response) => {
        // console.log(response.data);
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
  }, [query]);

  return (
    <>
      <Loading loading={loading}>
        {Object.keys(data).length > 0 && <ResultComponent data={data} />}
        {error && (
          <Row
            type="flex"
            align="middle"
            justify="center"
            style={{ minHeight: 'calc(100vh - 200px)' }}>
            <Col>
              <strong style={{ fontSize: '1.5rem' }}>
                {`Búsqueda no encontrada.`}
              </strong>
            </Col>
          </Row>
        )}
      </Loading>
    </>
  );
};

export default Result;
