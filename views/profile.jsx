const React = require('react')
const Default = require('./layouts/default.jsx')

const BreadCrumbs = require('./components/breadcrumb.jsx')

const Profile = () => {
  return (
    <Default>
      <BreadCrumbs />
      <div className="uk-card uk-margin-left uk-margin-right">
        <h1 className="uk-text-bold">Profile</h1>
        <div className="uk-card-header uk-padding-remove">
          <div className="uk-grid-small uk-flex-middle" uk-grid>
            <div className="uk-width-auto">
              <img className="uk-border-circle" width="40" height="40" src="https://mhcd.org/wp-content/uploads/2017/12/placeholder-man.png" />
              <a className="uk-flex-inline uk-flex-right uk-margin-left uk-link-muted"><i></i> Edit</a>
            </div>
            <div className="uk-width-expand">
              <div className="uk-margin-small">
                <h3 className="uk-card-title uk-margin-small">WowOmgIKnowHTML</h3>

              </div>
              <div className="uk-margin-small">
                <p className="uk-text-meta uk-margin-remove profile-online"><i className="gg-shape-circle uk-inline-flex"></i> Online</p>

              </div>
              <div className="uk-margin-small">
                <p className="uk-text-muted uk-margin-remove uk-text-small">Last Online</p>
                <p className="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-card-body uk-padding-remove">
          <ul className="uk-list uk-list-striped">
            <li className="uk-flex uk-padding">
              <p className="uk-inline-flex uk-text-bold uk-margin-remove-bottom uk-margin-right">NAME:</p>
              <p className="uk-inline-flex uk-text-muted uk-margin-remove">Carlo Nazareno</p>
            </li>
            <li className="uk-flex uk-padding">
              <p className="uk-inline-flex uk-text-bold uk-margin-remove-bottom uk-margin-right">EMAIL:</p>
              <p className="uk-inline-flex uk-text-muted uk-margin-remove">myemail@email.com</p>
            </li>
            <li className="uk-flex uk-padding">
              <p className="uk-inline-flex uk-text-bold uk-margin-remove-bottom uk-margin-right">DICK SIZE:</p>
              <p className="uk-inline-flex uk-text-muted uk-margin-remove">Small</p>
            </li>
          </ul>
        </div>
      </div>
    </Default>
  )
}

module.exports = Profile
