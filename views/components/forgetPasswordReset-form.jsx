const React = require('react');

const ForgotPasswordResetForm = props => {
  return (
    <form>
      <fieldset data-uk-margin>
        <legend>Forgot Password Reset</legend>
        <p>Please enter in new password.</p>
        <p><label>Password</label><input type="text" placeholder="" id='password' /></p>
        <p><label>Confirm</label><input type="text" placeholder="" id='passwordConfirm' /></p>
        <input type="hidden" id="uid" name="uid" value={props.userid} />
        <input type="hidden" id="tid" name="tid" value={props.token} />
        <button class="uk-button" id="ResetUserPassword">Submit</button>
        <div id="displayForgetPasswordReset"></div>
      </fieldset>
    </form>
  );
}


module.exports = ForgotPasswordResetForm;

