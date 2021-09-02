/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import useUser from '../hooks/use-user'
import LoggedInUserContext from '../context/logged-in-user'
import { storage, firebase } from '../lib/firebase'
import * as ROUTES from '../constants/routes'
import Header from '../components/header'


export default function UploadPicture({ user: loggedInUser }) {
    const { user, setActiveUser } = useUser(loggedInUser.uid)
    const [file, setFile] = useState(null)
    const [url, setURL] = useState('')
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [color, setColor] = useState('#ffffff');
    const override = css

    function handleChange(e) {
        setFile(e.target.files[0])
    }

    function handleUpload(e) {
        e.preventDefault()
        setLoading(true)
        const uid = uuidv4()
        const ref = storage.ref(`/profilePictures/${uid}`)

        console.log(ref)
        const uploadTask = ref.put(file)

        uploadTask.on(
            'state_changed',
            console.log,
            console.error,
            () => {
                ref.getDownloadURL().then((url) => {
                    setFile(null)
                    setURL(url)
                    firebase.firestore().collection('profilePictures').add({
                        imageSrc: url,
                        userId: user.userId,
                        dateCreated: Date.now(),
                    })
                },
                setLoading(false)).then(history.push(``))
            },
        )
    }

    return (
        <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
            <div className="bg-gray-background">
                <Header />
                <div className="p-5">
                    <form onSubmit={handleUpload}>

                        <label className="photo-input" htmlFor="upload-photo">{file ? 'Ready to upload!' : '+ Select profile photo '}</label>
                        <input type="file" onChange={handleChange} id="upload-photo" />
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
                    <div>
                        <form action={ROUTES.DASHBOARD}>
                            <button className="follow-btn-skip  font-bold text-sm rounded text-white w-20 h-8 mr-4 mt-4"
                                    type="submit" 
                                    value="Skip" > Skip
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </LoggedInUserContext.Provider>
    )
}

UploadPicture.propTypes = {
    user: PropTypes.object
}
