import React, { useEffect, useState } from "react";
import { FormFields, Validation, FormOption } from "../types";
import { FormField } from "./FormField";

export const ApplicationForm = ({ name, id, fields }: FormOption) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", event.target);
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
