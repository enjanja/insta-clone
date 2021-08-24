import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import { v4 as uuidv4 } from 'uuid'
import useUser from '../hooks/use-user'
import LoggedInUserContext from '../context/logged-in-user'
import { storage, firebase } from '../lib/firebase'
import Footer from '../components/footer'
import {  useHistory } from 'react-router-dom'


export default function Upload({ user: loggedInUser }) {
  const { user, setActiveUser } = useUser(loggedInUser.uid)
  const [file, setFile] = useState(null)
  const [url, setURL] = useState('')
  const history = useHistory()
  const [caption, setCaption] = useState('')

  function handleChange(e) {
    setFile(e.target.files[0])
  }

  function handleUpload(e) {
    e.preventDefault()
    let uid = uuidv4()
    const ref = storage.ref(`/images/${uid}`)

    const uploadTask = ref.put(file)

    uploadTask.on(
      'state_changed',
      console.log,
      console.error,
      () => {
        ref.getDownloadURL().then((url) => {
          setFile(null)
          setURL(url)
          firebase.firestore().collection('photos').add({
            caption: caption,
            imageSrc: url,
            userId: user.userId,
            dateCreated: Date.now(),
            comments: [],
            likes: [],
          })
        }).then(history.push(``))
      },
    )
  }

  return (
    <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
      <div className="bg-gray-background">
        <Header />
        <div>
          <form onSubmit={handleUpload}>
            
            <label className="photo-input" htmlFor="upload-photo">{ file?'Ready to upload!':'+ Select photo '}</label>
            <input type="file" onChange={handleChange} id="upload-photo"/>
            <input
              aria-label="Enter your description"
              type="text"
              placeholder="Enter description.."
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setCaption(target.value)}
              value={caption}
            />
            <button
              className="follow-btn bg-blue-medium font-bold text-sm rounded text-white w-20 h-8 mr-4"
              disabled={!file}
            >
              Upload
            </button>
          </form>
        </div>

        <Footer />
      </div>
    </LoggedInUserContext.Provider>
  )
}


