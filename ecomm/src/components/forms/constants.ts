export const formConfig = [
  {
    type: 'text',
    label: 'First Name',
    placeholder: 'John',
    formProps: 'first_name',
    col: 6,
  },
  {
    type: 'text',
    label: 'Last Name',
    placeholder: 'Doe',
    formProps: 'last_name',
    col: 6,
  },
  {
    type: 'select',
    label: 'Country',
    placeholder: 'Canada',
    formProps: 'country',
    options: ['Canada', 'United States', 'United Kingdom'],
    col: 12,
  },
  {
    type: 'text',
    label: 'State/Province',
    placeholder: 'ON',
    formProps: 'province',
    col: 6,
  },
  {
    type: 'text',
    label: 'Town/City',
    placeholder: 'Toronto',
    formProps: 'city',
    col: 6,
  },
  {
    type: 'text',
    label: 'Address',
    placeholder: '245 Church St',
    formProps: 'address',
    col: 12,
  },
  {
    type: 'text',
    label: 'Postal Code',
    placeholder: 'M5B 1Z4',
    formProps: 'postal_code',
    col: 12,
  },
]

export const initialValues = formConfig.reduce((values: any, element: any) => {
  values[element.formProps] = ''
  return values
}, {})

export const validate = formConfig.reduce((validate: any, element: any) => {
  validate[element.formProps] = (value: string) =>
    value.length ? null : 'Missing field'
  return validate
}, {})
