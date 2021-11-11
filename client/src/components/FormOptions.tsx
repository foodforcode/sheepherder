import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProgressPlugin } from "webpack";

interface FormProps {
  options: Option[];
}

interface Option {
  name: string;
  fields: FormFields[];
}

interface FormFields {
  name: string;
  label: string;
  component: string;
  validate?: Validation[];
}

interface Validation {
  type: string;
}

export const FormOptions = (props: FormProps) => {
  console.log(props);
  return (
    <div>
      {props.options.map((option: Option) => {
        return <button>{option.name}</button>;
      })}
    </div>
  );
};
