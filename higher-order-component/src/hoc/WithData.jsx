import React, { useEffect, useState } from "react";

const WithData = (WrappedComponent, url) => {
  return function EnhancedComponent() {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    return <WrappedComponent data={data} />;
  };
};

export default WithData;
