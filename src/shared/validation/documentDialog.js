import * as Yup from 'yup';

export default {
  provider: Yup.object().shape({
    healthCare: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    NPI: Yup.number()
      .required('Required')
      .typeError('NPI must be a number')
      .test(
        'len',
        'Provide a valid NPI',
        val => val && val.toString().length === 10
      ),
    // .min(8, 'Provided an valid NPI '),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    zip: Yup.number()
      .required('Required')
      .typeError('Provide a valid Zip Code'),
    number: Yup.string().required('Required'),
    faxNumber: Yup.string().required('Required'),
  }),
  order: Yup.object().shape({
    icdCode: Yup.string().required('Required'),
    dateOfOrder: Yup.string().required('Required')
  }),
  patient: Yup.object().shape({
    id: Yup.string().required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    dob: Yup.string().required('Required'),
    sex: Yup.string().required('Required'),
    number: Yup.string().required('Required'),
    languagePreference: Yup.string(),
    shippingAddress: Yup.object().shape({
      line1: Yup.string().required('Required'),
      line2: Yup.string(),
      city: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      zip: Yup.number()
        .required('Required')
        .typeError('Provide a valid Zip Code')
    }),
    billingAddress: Yup.object().shape({
      line1: Yup.string().required('Required'),
      line2: Yup.string(),
      city: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      zip: Yup.number()
        .required('Required')
        .typeError('Provide a valid Zip Code')
    }),
    race: Yup.string()
  }),
  billing: Yup.object().shape({
    policyHolder: Yup.object().shape({
      name: Yup.string().required('Required'),
      dob: Yup.string().required('Required'),
      relationship: Yup.string().required('Required')
    }),
    primaryInsurance: Yup.string().required('Required'),
    primaryInsuranceType: Yup.string(),
    claimsSubmissionAddress: Yup.string().required('Required'),
    policyNumber: Yup.string().required('Required'),
    groupNumber: Yup.string().required('Required'),
    plan: Yup.string().required('Required'),
    priorAuthorizationCode: Yup.string()
  })
};
