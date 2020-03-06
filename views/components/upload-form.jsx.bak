const React = require('react');

const UploadForm = props => {
  return (
    <form>
      <div class="js-upload" uk-form-custom>
        <input type="file" multiple />
        <button class="uk-button uk-button-default" type="button" tabindex="-1">Select</button>
      </div>

      <div class="js-upload uk-placeholder uk-text-center">
        <span uk-icon="icon: cloud-upload"></span>
        <span class="uk-text-middle">Attach binaries by dropping them here or</span>
        <div uk-form-custom>
          <input type="file" multiple />
          <span class="uk-link">selecting one</span>
        </div>
      </div>

      <progress id="js-progressbar" class="uk-progress" value="0" max="100" hidden></progress>

    </form>
  );
}


module.exports = UploadForm;

