const React = require('react')
const HeaderTwo = require('../components/headerTwo.jsx')

const Default = props => {
  return (
    <html lang='en'>

      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>eFlow</title>

        <link rel="stylesheet" href="'../reset.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/css.gg/icons-compressed/icons.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.3.3/dist/css/uikit.min.css" />
        <link rel="stylesheet" href="../styles.css"></link>
      </head>

      <body>
        <HeaderTwo />
        {props.children}

        <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.3/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.3/dist/js/uikit-icons.min.js"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossOrigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
        <script src="../checklogin.js"></script>
        <script src="../app.js"></script>
        <script src="../auth.js"></script>
        <script src="../upload.js"></script>
        <script src="../forgotpasswordemail.js"></script>
        <script src="../userResetPassword.js"></script>
      </body>

    </html>
  )
}

module.exports = Default