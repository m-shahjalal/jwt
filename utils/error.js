// export modules
module.exports = errors = (err) => {
  let errors = {};

  // login error handler
  if (err.message === 'incorrect email')
    errors.email = 'Please! inter a valid email address';
  if (err.message === 'incorrect password')
    errors.password = 'Please, inter a valid password';

  // not found error handler
  if (err.code === 11000) {
    // duplicate code error
    errors.email = 'Email is already exists';
    return errors;
  }

  // validation error
  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
    return errors;
  }
  return errors;
};
