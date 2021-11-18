export interface FormOptions {
  form: FormOption[];
}

export interface FormOption {
  name: string;
  id: number;
  fields: FormFields[];
}

export interface FormFields {
  name: string;
  label: string;
  component: string;
  title?: string;
  description?: string;
  validate?: Validation[];
  fields?: FormFields[];
}

export interface Validation {
  type: string;
}
