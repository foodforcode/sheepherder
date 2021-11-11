import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { FormOptions } from "./FormOptions";

export const App = () => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    axios.get("/forms").then((response) => {
      setOptions(response.data);
    });
  }, []);

  return (
    <Fragment>
      Form Options:
      <FormOptions options={options} />
    </Fragment>
  );
};
