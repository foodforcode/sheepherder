import React, { useEffect, useState } from "react";
import { FormFields, Validation, FormOption } from "../../../utils/types";
import { FormField } from "./FormField";
import axios from "axios";

export const ApplicationForm = ({ name, id, fields }: FormOption) => {
  const [values, setValues] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/form", {
      params: {
        values: values,
        id: id,
      },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>{name}</h3>
      {fields.map((field: FormFields) => {
        return (
          <FormField
            name={field.name}
            label={field.label}
            component={field.component}
            title={field.title}
            description={field.description}
            fields={field.fields}
          />
        );
      })}
      <input type="submit"></input>
    </form>
  );
};
