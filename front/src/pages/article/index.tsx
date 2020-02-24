import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../shared/loader";

const getFakeData = () => {};

const SingleArticle = props => {
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  return (
    <div>
      {loading && <Loader />}
      <h3>ID: {id}</h3>
    </div>
  );
};

export default SingleArticle;
