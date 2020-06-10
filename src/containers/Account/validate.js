const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Username field shouldn’t be empty';
  }
  if (!values.email) {
    errors.email = 'Email field shouldn’t be empty';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.number) {
    errors.number = "Phone Number shouldn't be empty";
  } else if (!/^[A[0-9]{10}$/i.test(values.number)) {
    errors.number = 'Invalid Phone Number';
  }
  if (!values.url) {
    errors.url = 'Url field shouldn’t be empty';
  } else if (
    !/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(
      values.url
    )
  ) {
    errors.url = 'Invalid url';
  }
  if (!values.password) {
    errors.password = 'Password field shouldn’t be empty';
  }
  if (!values.select) {
    errors.select = 'Please select the option';
  }

  return errors;
};

export default validate;
