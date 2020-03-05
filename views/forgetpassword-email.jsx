const React = require('react')
const Default = require('./layouts/default.jsx')
const ForgetPasswordEmailForm = require('./components/forgetPasswordEmail-form.jsx')

const ForgetPasswordEmail = () => {
  return (
    <Default>
      <ForgetPasswordEmailForm></ForgetPasswordEmailForm>
      <div id="forgetPasswordDisplay"></div>
    </Default>
  )
}

module.exports = ForgetPasswordEmail
