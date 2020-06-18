export default {
  provider: {
    healthCare: 'Treejoy HealthCare',
    providerName: ' Vamshi',
    NPI: 1417960428,
    address: 'Gachibowli',
    city: 'Hyderabad',
    state: 'Telangana',
    zip: 500006,
    number: 8328277518,
    faxNumber: 1234567890
  },
  order: {
    icdCode: '',
    dateOfOrder: ''
  },
  patient: {
    patientId: '12345',
    firstName: 'Ashfaq',
    lastName: 'Nisar',
    dob: '05/19/1999',
    sex: 'Male',
    number: 8328277518,
    language: 'English',
    shippingAddress: {
      address: 'Gachibowli',
      city: 'Hyderabad',
      state: 'Telangana',
      zip: 500006
    },
    billingAddress: {
      address: 'Gachibowli',
      city: 'Hyderabad',
      state: 'Telangana',
      zip: 500006
    },
    hispanicLatinoOrigin: false,
    race: 'Asian'
  },
  billing: {
    esInsurance: true,
    policyHolder: {
      name: 'Ashfaq',
      dob: '05/19/1999',
      relationshipToPatient: 'self'
    },
    primaryInsuranceCarrier: 'Bajaj',
    type: 'private',
    claimsSubmissionAddress:
      'Second Floor, Bajaj Insurance, Hi Tech city, Hyderabad',
    policyNumber: '12345',
    groupNumber: '123456',
    plan: 'platinum',
    priorAuthorizationCode: ''
  }
};
