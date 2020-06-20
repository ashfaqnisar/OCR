import * as Yup from 'yup';

export default {
  provider: {
    healthCare: Yup.string().required('Required'),
    providerName: Yup.string().required('Required'),
    NPI: Yup.number()
      .min(8, 'Provided an valid NPI ')
      .max(8, 'Provided an valid NPI '),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    zip: Yup.number().required('Required'),
    number: Yup.number().required('Required'),
    faxNumber: Yup.number().required('Required'),
    languagePreference: Yup.string()
  },
  order: {
    icdCode: Yup.string().required('Required'),
    dateOfOrder: Yup.string().required('Required')
  },
  patient: {
    id: Yup.string().required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    dob: Yup.string().required('Required'),
    sex: Yup.string().required('Required'),
    number: Yup.number().required('Required'),
    language: Yup.string().required('Required'),
    shippingAddress: {
      address: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      zip: Yup.number().required('Required')
    },
    billingAddress: {
      address: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      zip: Yup.number().required('Required')
    },
    isHispanicLatinoOrigin: Yup.boolean(),
    race: Yup.string()
  },
  billing: {
    isESInsurance: Yup.boolean().required('Required'),
    policyHolder: {
      name: Yup.string().required('Required'),
      dob: Yup.string().required('Required'),
      relationship: Yup.string().required('Required')
    },
    primaryInsurance: Yup.string().required('Required'),
    primaryInsuranceType: Yup.string().required('Required'),
    claimsSubmissionAddress: Yup.string().required('Required'),
    policyNumber: Yup.string().required('Required'),
    groupNumber: Yup.string().required('Required'),
    plan: Yup.string().required('Required'),
    priorAuthorizationCode: Yup.string().required('Required')
  }
};
