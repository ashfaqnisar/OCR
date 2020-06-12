import React, { PureComponent } from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Alert, Button } from 'reactstrap';
import validate from '../../validate';

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error }
}) => (
  <div className="form__form-group-input-wrap">
    <input {...input} placeholder={placeholder} type={type} />
    {touched && error && (
      <span className="form__form-group-error">{error}</span>
    )}
  </div>
);

class LoginForm extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    errorMsg: PropTypes.string,
    fieldUser: PropTypes.string,
    typeFieldUser: PropTypes.string,
    form: PropTypes.string.isRequired
  };

  static defaultProps = {
    errorMessage: '',
    errorMsg: '',
    fieldUser: 'Email',
    typeFieldUser: 'text'
  };

  state = {
    showPassword: false
  };

  showPassword(e) {
    e.preventDefault();
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  }

  render() {
    const {
      handleSubmit,
      errorMessage,
      errorMsg,
      fieldUser,
      typeFieldUser,
      form
    } = this.props;
    const { showPassword } = this.state;

    return (
      <Form className="form login-form" onSubmit={handleSubmit}>
        <Alert color="danger" isOpen={!!errorMessage || !!errorMsg}>
          {errorMsg || errorMessage}
        </Alert>
        <div className="form__form-group">
          <span className="form__form-group-label">{fieldUser}</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <AccountOutlineIcon />
            </div>
            <Field
              name="email"
              component={renderField}
              type={typeFieldUser}
              placeholder={fieldUser}
            />
          </div>
        </div>
        <div className="form__form-group">
          <span className="form__form-group-label">Password</span>
          <div className="form__form-group-field">
            <div className="form__form-group-icon">
              <KeyVariantIcon />
            </div>
            <Field
              name="password"
              component={renderField}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
            />
            <button
              type="button"
              className={`form__form-group-button${
                showPassword ? ' active' : ''
              }`}
              onClick={e => this.showPassword(e)}
            >
              <EyeIcon />
            </button>
          </div>
        </div>

        <div className="account__btns">
          <Button
            className="account__btn"
            color="primary"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Link className="btn btn-outline-primary account__btn" to="/register">
            Create Account
          </Link>
        </div>
      </Form>
    );
  }
}

export default reduxForm({
  name: 'the_login_form',
  validate
})(withRouter(LoginForm));
