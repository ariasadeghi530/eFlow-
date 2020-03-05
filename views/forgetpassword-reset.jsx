const React = require('react')
const Default = require('./layouts/default.jsx')
const ForgetPasswordResetForm = require('./components/forgetPasswordReset-form.jsx')

const ForgetPasswordReset = (props) => {
  return (
    <Default>
      <ForgetPasswordResetForm userid={props.userid} ></ForgetPasswordResetForm>
    </Default>
  )
}

module.exports = ForgetPasswordReset
