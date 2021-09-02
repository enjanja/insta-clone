/* eslint-disable prettier/prettier */
import {  useState } from 'react'
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types'
import {  useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import useUser from '../hooks/use-user'
import LoggedInUserContext from '../context/logged-in-user'
import { storage, firebase } from '../lib/firebase'
import Footer from '../components/footer'
import Header from '../components/header'


export default function Upload({ user: loggedInUser }) {
  const { user, setActiveUser } = useUser(loggedInUser.uid)
  const [file, setFile] = useState(null)
  const [url, setURL] = useState('')
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useState('#ffffff');
  const history = useHistory()
  const [caption, setCaption] = useState('')
  const override = css`
  display: block;
  margin: 0px auto;
  border-color: white;
`;

  function handleChange(e) {
    setFile(e.target.files[0])
  }

  function handleUpload(e) {
    e.preventDefault()
    setLoading(true)
    // console.log(loading)
    const uid = uuidv4()
    const ref = storage.ref(`/images/${uid}`)

    // console.log(ref)
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
            caption,
            imageSrc: url,
            imgPath: ref.fullPath,
            userId: user.userId,
            dateCreated: Date.now(),
            comments: [],
            likes: [],
          })
        },
        setLoading(false)).then( history.push(`/p/${user.username}`))
      },
    )
  }

  return (
    <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
      <div className="bg-gray-background">
        <Header />
        <div className="p-5 sweet-loading">
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
              type="submit"
              className="follow-btn bg-blue-medium font-bold text-sm rounded text-white w-20 h-8 mr-4"
              disabled={!file}
            >
              {loading? (
                <ClipLoader color={color} loading={loading} css={override} size={20} />
              ):(<>Upload</> )}
              
              
            </button>
          </form>
         
        </div>

        <Footer />
      </div>
    </LoggedInUserContext.Provider>
  )
}

Upload.propTypes = {
  user: PropTypes.object
}
