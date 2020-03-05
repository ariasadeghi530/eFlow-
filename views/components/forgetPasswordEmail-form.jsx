const React = require('react');

const UploadForm = props => {
  return (
    <form>
      <fieldset data-uk-margin>
        <legend>Forgot Password</legend>
        <p>Please enter in the email of account to reset.</p>
        <p><label>Email</label><input type="text" placeholder="" id="forgetPasswordEmail"/></p>
        <button class="uk-button" id="ResetEmail">Submit</button>
        <div id="displayForgetPasswordEmail"></div>
      </fieldset>
    </form>
  );
}


module.exports = UploadForm;

