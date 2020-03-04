const React = require('react')

const Chat = props => {
  return (
    <html lang='en'>

      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>eFlow - Chat</title>

        <link rel="stylesheet" href="../reset.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.3.3/dist/css/uikit.min.css"></link>
        <link rel="stylesheet" href="../chat.css"></link>

      </head>

      <body>
        {props.children}
          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.3/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.3/dist/js/uikit-icons.min.js"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
        <script src="../checklogin.js"></script>
        <script src="../chatApp.js"></script>
      </body>

    </html>
  )
}

module.exports = Chat