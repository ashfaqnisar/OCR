import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import get from 'lodash.get';
import documentDialog from '../../../../shared/validation/documentDialog';

const FormComponent = ({ document }) => {
  const schema = Yup.object().shape(documentDialog);

  const { register, handleSubmit, errors, watch } = useForm({
    mode: 'onBlur',
    validationSchema: schema
  });

  const onSubmit = data => console.log(data);

  console.log(watch);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          position: 'relative',
          height: '425px',
          overflow: 'auto'
        }}
      >
        {console.log('Errors: ', errors)}
        <div className="form" style={{ marginRight: '12px' }}>
          <Box mb={2} style={{ width: '100%' }}>
            <Typography variant={'subtitle1'}>Provider Information</Typography>
            <Box my={1} style={{ width: '100%' }}>
              <Grid container direction={'column'} spacing={1}>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Healthcare Organization Name
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          inputRef={register}
                          name={'provider.healthCare'}
                          helperText={get(
                            errors,
                            'provider.healthCare.message'
                          )}
                          error={get(errors, 'provider.healthCare')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Provider Name
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant={'outlined'}
                          fullWidth
                          type="text"
                          name="provider.name"
                          inputRef={register}
                          helperText={get(errors, 'provider.name.message')}
                          error={get(errors, 'provider.name')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Location Address
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="provider.address"
                          required
                          inputRef={register}
                          helperText={get(errors, 'provider.address.message')}
                          error={get(errors, 'provider.address')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        NPI
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="provider.NPI"
                          inputRef={register}
                          helperText={get(errors, 'provider.NPI.message')}
                          error={get(errors, 'provider.NPI')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        City
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="provider.city"
                          inputRef={register}
                          helperText={get(errors, 'provider.city.message')}
                          error={get(errors, 'provider.city')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        State
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="provider.state"
                          required
                          inputRef={register}
                          helperText={get(errors, 'provider.state.message')}
                          error={get(errors, 'provider.state')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Zip
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="provider.zip"
                          required
                          inputRef={register}
                          helperText={get(errors, 'provider.zip.message')}
                          error={get(errors, 'provider.zip')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Number
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="provider.number"
                          inputRef={register}
                          helperText={get(errors, 'provider.number.message')}
                          error={get(errors, 'provider.number')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Fax Number
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="provider.faxNumber"
                          required
                          inputRef={register}
                          helperText={get(errors, 'provider.faxNumber.message')}
                          error={get(errors, 'provider.faxNumber')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Language Preference
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="provider.languagePreference"
                          required
                          inputRef={register}
                          helperText={get(
                            errors,
                            'provider.languagePreference.message'
                          )}
                          error={get(errors, 'provider.languagePreference')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/*<Box mb={2} style={{ width: '100%' }}>
                  <Typography variant={'subtitle1'}>
                    Order Information
                  </Typography>
                  <Box my={1} style={{ width: '100%' }}>
                    <Grid container direction={'column'} spacing={1}>
                      <Grid item container spacing={2}>
                        <Grid item xs={12} sm md lg={6} xl={6}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              ICD Code
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="provider.name"
                                required
                                value={prediction.order.icdCode}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm md lg={6} xl={6}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Date of Order
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="examType"
                                required
                                value={prediction.order.dateOfOrder}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box mb={2} style={{ width: '100%' }}>
                  <Typography variant={'subtitle1'}>
                    Patient Information
                  </Typography>
                  <Box my={1} style={{ width: '100%' }}>
                    <Grid container direction={'column'} spacing={1}>
                      <Grid item container spacing={2}>
                        <Grid item xs={12} sm md lg={6} xl={6}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Patient Id
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="provider.name"
                                required
                                value={prediction.patient.id}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm md lg={6} xl={6}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              DOB
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="examType"
                                required
                                value={prediction.patient.dob}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={2}>
                        <Grid item xs={12} sm md lg={6} xl={6}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              First Name
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="provider.name"
                                required
                                value={prediction.patient.firstName}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm md lg={6} xl={6}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Last Name
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="provider.name"
                                required
                                value={prediction.patient.lastName}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={2}>
                        <Grid item xs={12} sm md lg={4} xl={4}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Phone Number
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="provider.name"
                                required
                                value={prediction.patient.number}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm md lg={4} xl={4}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Sex
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="examType"
                                required
                                value={prediction.patient.sex}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm md lg={4} xl={4}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Language Preference
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="examType"
                                required
                                value={prediction.patient.language}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm md lg={12} xl={12}>
                        <div className="form__form-group">
                          <span className="form__form-group-label typography-message">
                            Shipping Address
                          </span>
                          <div className="form__form-group-field">
                            <TextField
                              size={'small'}
                              variant="outlined"
                              fullWidth
                              type="text"
                              name="examType"
                              required
                              value={prediction.patient.shippingAddress.address}
                              onChange={handleTheFormChange}
                            />
                          </div>
                        </div>
                      </Grid>
                      <Grid item container spacing={2}>
                        <Grid item xs={12} sm md lg={4} xl={4}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              City
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="examType"
                                required
                                value={prediction.patient.shippingAddress.city}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm md lg={4} xl={4}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              State
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="provider.name"
                                required
                                value={prediction.patient.shippingAddress.state}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm md lg={4} xl={4}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Zip
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="provider.name"
                                required
                                value={prediction.patient.shippingAddress.zip}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm md lg={12} xl={12}>
                        <div className="form__form-group">
                          <span className="form__form-group-label typography-message">
                            Billing Address
                          </span>
                          <div className="form__form-group-field">
                            <TextField
                              size={'small'}
                              variant="outlined"
                              fullWidth
                              type="text"
                              name="examType"
                              required
                              value={prediction.patient.billingAddress.address}
                              onChange={handleTheFormChange}
                            />
                          </div>
                        </div>
                      </Grid>
                      <Grid item container spacing={2}>
                        <Grid item xs={12} sm md lg={4} xl={4}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              City
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="examType"
                                required
                                value={prediction.patient.billingAddress.city}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm md lg={4} xl={4}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              State
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="provider.name"
                                required
                                value={prediction.patient.billingAddress.state}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm md lg={4} xl={4}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Zip
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="provider.name"
                                required
                                value={prediction.patient.billingAddress.zip}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box mb={2} style={{ width: '100%' }}>
                  <Typography variant={'subtitle1'}>
                    Patient Ethnicity
                  </Typography>
                  <Box my={1} style={{ width: '100%' }}>
                    <Grid container direction={'column'} spacing={1}>
                      <Grid item container spacing={2}>
                        <Grid item xs={12} sm md lg={6} xl={6}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Is patient hispanic or latin origin
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="provider.name"
                                required
                                value={
                                  prediction.patient.isHispanicLatinoOrigin
                                    ? 'Yes'
                                    : 'No'
                                }
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm md lg={6} xl={6}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Patient Race
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="examType"
                                required
                                value={prediction.patient.race}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Box mb={2} style={{ width: '100%' }}>
                  <Typography variant={'subtitle1'}>
                    Patient Insurance /Billing
                  </Typography>
                  <Box my={1} style={{ width: '100%' }}>
                    <Grid container direction={'column'} spacing={1}>
                      <Grid item container spacing={2}>
                        <Grid item xs={12} sm md lg={6} xl={6}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Policyholder Name
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="provider.name"
                                required
                                value={prediction.billing.policyHolder.name}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm md lg={6} xl={6}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              PolicyHolder DOB
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="examType"
                                required
                                value={prediction.billing.policyHolder.dob}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={2}>
                        <Grid item xs={12} sm md lg={6} xl={6}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Relationship to Patient
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="examType"
                                required
                                value={
                                  prediction.billing.policyHolder.relationship
                                }
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm md lg={6} xl={6}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Patient wish Exact Sciences to bill their
                              insurance?
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="provider.name"
                                required
                                value={
                                  prediction.billing.isESInsurance
                                    ? 'Yes'
                                    : 'No'
                                }
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={2}>
                        <Grid item xs={12} sm md lg={6} xl={6}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Primary Insurance Carrier
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="examType"
                                required
                                value={prediction.billing.primaryInsurance}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm md lg={6} xl={6}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Primary Insurance Carrier Type
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="provider.name"
                                required
                                value={prediction.billing.primaryInsuranceType}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm md lg={12} xl={12}>
                        <div className="form__form-group">
                          <span className="form__form-group-label typography-message">
                            Claims Submission Address
                          </span>
                          <div className="form__form-group-field">
                            <TextField
                              size={'small'}
                              variant="outlined"
                              fullWidth
                              type="text"
                              name="examType"
                              required
                              value={prediction.billing.claimsSubmissionAddress}
                              onChange={handleTheFormChange}
                            />
                          </div>
                        </div>
                      </Grid>
                      <Grid item container spacing={2}>
                        <Grid item xs={12} sm md lg={4} xl={4}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Subscriber Id/ Policy Number
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="examType"
                                required
                                value={prediction.billing.policyNumber}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm md lg={4} xl={4}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Group Number
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="provider.name"
                                required
                                value={prediction.billing.groupNumber}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12} sm md lg={4} xl={4}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Plan
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="provider.name"
                                required
                                value={prediction.billing.plan}
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                      <Grid item container spacing={2}>
                        <Grid item xs={12} sm md lg={6} xl={6}>
                          <div className="form__form-group">
                            <span className="form__form-group-label typography-message">
                              Prior-Authorization Code (Optional)
                            </span>
                            <div className="form__form-group-field">
                              <TextField
                                size={'small'}
                                variant="outlined"
                                fullWidth
                                type="text"
                                name="examType"
                                required
                                value={
                                  prediction.billing.priorAuthorizationCode
                                }
                                onChange={handleTheFormChange}
                              />
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>*/}
        </div>
      </div>
    </form>
  );
};

export default FormComponent;
