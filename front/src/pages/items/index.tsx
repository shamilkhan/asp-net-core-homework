import React from "react";
import Loader from "../../shared/loader";

function Items() {
  const [loading, setLoading] = React.useState(true);
  return <div>{loading ? <Loader /> : <div>Content</div>}</div>;
}

export default Items;
