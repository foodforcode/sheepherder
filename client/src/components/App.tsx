import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { ProgressPlugin } from "webpack";
import { FormOptions, FormOption, FormFields } from "../types";
import { ApplicationForm } from "./ApplicationForm";

export const App = () => {
  const [options, setOptions] = useState<FormOption[]>([]);
  const handleClick = (option: any) => {
    // e.preventDefault();
    console.log(option);
    setSelected(option);
  };
  const [selected, setSelected] = useState<FormOption>();
  console.log(options);
  useEffect(() => {
    axios.get("/forms").then((response) => {
      setOptions(response.data);
    });
  }, []);

  return (
    <div>
      Form Options:
      {options.map((option) => {
        return (
          <button key={option.id} onClick={() => handleClick(option)}>
            {option.name}
          </button>
        );
      })}
      {selected && (
        <ApplicationForm
          id={selected.id}
          name={selected.name}
          fields={selected.fields}
        />
      )}
    </div>
  );
};

// export const FormOptions = (props: FormProps) => {
//   console.log(props);
//   return (
//     <div>

//     </div>
//   );
// };
