// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyBzgX-ul7zTpGeWsXddZ6IItDw9cRkbnCU",
  authDomain: "eflow-ca056.firebaseapp.com",
  databaseURL: "https://eflow-ca056.firebaseio.com",
  projectId: "eflow-ca056",
  storageBucket: "eflow-ca056.appspot.com",
  messagingSenderId: "462392261016",
  appId: "1:462392261016:web:8a3313fd188f398632d3ed",
  measurementId: "G-HQ8KKYT6QX"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)


let bar = $('#js-progressbar');
let fileButton = $('#filebutton')

let uid
axios.get(`/api/users/getinfo`)
  .then(({ data }) => {
    uid = data
  })
  .catch(e => console.error(e))



fileButton.change((event) => {
  // Get file
  let file = event.target.files[0]

  let fileid = file.name
  // Create Storage ref
  let storageRef = firebase.storage().ref('images/' + file.name)

  // Upload file
  let task = storageRef.put(file)

  //Update progress bar
  task.on(firebase.storage.TaskEvent.STATE_CHANGED, progress = (snapshot) => {
    let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    bar.value = percentage
  }
    , error = (err) => { }
    , complete = () => {

      // Upload completed successfully, now we can get the download URL
      task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        let uploadObj = { userid: uid.id, fileid: fileid, path: downloadURL, contents:'' }
        console.log(uploadObj)
        console.log('File available at', downloadURL)
        axios.post('/api/upload', {
          uploadObj
        })
          .then((response) => {
            $('#uploadDisplay').html('File received and stored.')
          })
          .catch(e => console.error(e))
      })

    })

})



