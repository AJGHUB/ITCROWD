import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    //useState is react hook
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Fragment>
    <>
      <h1 className='large text-primary'> Welcome Back to The IT Crowd</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign Into Your Developers Account
      </p>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Valid Email Address'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Secure Password'
            name='password'
            value={password}
            onChange={onChange}
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Do not have an account yet? <Link to='/register'>Sign Up</Link>
      </p>
      <div className='gif'> 
      <iframe 
       title="Intentionally blank"
       src="https://giphy.com/embed/ghutdpgRkhkxq"
       aria-hidden="true"
       >
      </iframe>
      </div>
      </>
    </Fragment>
    
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
