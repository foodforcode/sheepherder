export const forms = [
  {
    name: "Company application",
    fields: [
      {
        component: "section",
        title: "Company Details",
        description: "Section for company details.",
        name: "companyDetails",
        fields: [
          {
            name: "company_name",
            label: "What is the Company Name?",
            component: "text",
            validate: [
              {
                type: "required",
              },
            ],
          },
          {
            name: "ceo",
            label: "What is the name of the CEO?",
            component: "text",
            validate: [
              {
                type: "required",
              },
            ],
          },
          {
            name: "website",
            label: "Company website?",
            component: "url",
          },
          {
            component: "section",
            title: "Address",
            name: "address",
            fields: [
              {
                name: "address1",
                label: "Address",
                component: "text",
                validate: [
                  {
                    type: "required",
                  },
                ],
              },
              {
                name: "address2",
                label: "Address 2",
                component: "text",
              },
              {
                name: "city",
                label: "City",
                component: "text",
              },
            ],
          },
        ],
      },
      {
        name: "is_california_relevant",
        label: "Will the contractor perform any work in California?",
        component: "checkbox",
      },
      {
        name: "total_compensation",
        label: "What is the total compensation of all your workers?",
        component: "number",
        validate: [
          {
            type: "required",
          },
          {
            type: "min",
            value: 0,
          },
        ],
      },
    ],
  },
  {
    name: "Employee application",
    fields: [
      {
        name: "applicant_name",
        label: "Applicant name",
        component: "input",
        validate: [
          {
            type: "required",
          },
        ],
      },
      {
        name: "applicant_title",
        label: "Applicant title",
        component: "text",
        validate: [
          {
            type: "required",
          },
        ],
      },
    ],
  },
  {
    name: "Auto application",
    fields: [
      {
        name: "vin",
        label: "VIN",
        component: "input",
        validate: [
          {
            type: "required",
          },
        ],
      },
      {
        name: "make",
        label: "Make",
        component: "select",
        options: ["Honda", "Toyota", "BMW", "Ford", "Dodge"],
        validate: [
          {
            type: "required",
          },
        ],
      },
    ],
  },
];
