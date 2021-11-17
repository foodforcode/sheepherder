import React, { Fragment } from "react";
import { FormFields, Validation } from "../types";

export const FormField = ({
  name,
  label,
  component,
  title,
  description,
  fields,
  validate,
}: FormFields) => {
  console.log("fields:", fields);
  return (
    <Fragment>
      {component === "section" ? (
        <section>
          {title}: {description}
          <hr />
        </section>
      ) : (
        <div>
          <label>{label}</label>
          <input
            name={name}
            type={component}
            required={validate ? true : null}
          ></input>
        </div>
      )}
      {fields
        ? fields.map((field) => {
            return (
              <FormField
                fields={field.fields}
                name={field.name}
                label={field.label}
                component={field.component}
                description={field.description}
                validate={field.validate}
                title={field.title}
              />
            );
          })
        : null}
    </Fragment>
  );
};
