const React = require('react')
const Login = require('./layouts/login.jsx')
const HeaderOne = require('./components/headerOne.jsx')
const ForgetPasswordResetForm = require('./components/forgetPasswordReset-form.jsx')

const ForgetPasswordReset = (props) => {
  return (
    <Login>
      <HeaderOne />
      <ForgetPasswordResetForm userid={props.userid} ></ForgetPasswordResetForm>
    </Login>
  )
}

module.exports = ForgetPasswordReset
