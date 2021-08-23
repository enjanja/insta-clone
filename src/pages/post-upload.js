import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import { v4 as uuidv4 } from 'uuid';
import useUser from '../hooks/use-user'
import LoggedInUserContext from '../context/logged-in-user'
import {storage, firebase} from '../lib/firebase'

export default function Upload({ user: loggedInUser }) {
    const { user, setActiveUser } = useUser(loggedInUser.uid)
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const [url, setURL] = useState("");
    const [caption, setCaption] = useState(" ");
    function handleChange(e) {
        setFile(e.target.files[0]);
    }

    function handleUpload(e) {
        e.preventDefault();
        let uid = uuidv4();
        const ref = storage.ref(`/images/${uid}`);
        const uploadTask = ref.put(file);
        uploadTask.on("state_changed", console.log, console.error, 
        () => {
            ref
                .getDownloadURL()
                .then((url) => {
                setFile(null);
                setURL(url);
                firebase
                    .firestore()
                    .collection('photos')
                    .add({
                        caption: caption,
                        imageSrc: url,
                        userId: user.userId,
                        dateCreated: Date.now(),
                        comments: [],
                        likes: [],
                    })
                });
        });
    }

  return(
     <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
      <div className="bg-gray-background">
          <Header/>
        <form onSubmit={handleUpload}>
        <input type="text" placeholder="Enter a caption..." 
            onChanege={event => setCaption(event.target.value)} value={caption}/>
        <input type="file" onChange={handleChange} />
        <button disabled={!file}>upload to firebase</button>
      </form>
      </div>
     </LoggedInUserContext.Provider>
  )
}

Upload.propTypes = {
  user: PropTypes.object.isRequired
}
