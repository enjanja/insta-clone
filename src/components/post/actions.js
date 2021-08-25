/* eslint-disable prettier/prettier */
import { useState, useContext } from 'react'
// import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { storage } from '../../lib/firebase'
import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import useUser from '../../hooks/use-user'

export default function Actions({ docId, totalLikes, likedPhoto, handleFocus, username, imageSrc }) {
  const { user: loggedInUser } = useContext(UserContext)
  const { user } = useUser(loggedInUser?.uid)

  // const history = useHistory()

  const {
    user: { uid: userId }
  } = useContext(UserContext)

  const [toggleLiked, setToggleLiked] = useState(likedPhoto)
  const [likes, setLikes] = useState(totalLikes)
  const { firebase, FieldValue } = useContext(FirebaseContext)

  const handleToggleLiked = async () => {
    setToggleLiked((toggleLiked) => !toggleLiked)

    await firebase
      .firestore()
      .collection('photos')
      .doc(docId)
      .update({
        likes: toggleLiked ? FieldValue.arrayRemove(userId) : FieldValue.arrayUnion(userId)
      })

    setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1))
  }

  function handleDelete(e) {
    e.preventDefault()
    
    const ref = storage.ref(`images/${imageSrc}`)
    
    // console.log(ref)
    // const imageRef = ref.getDownloadURL()
    // console.log(imageRef)


    ref.delete().then(()=>{
      console.log('deleted storage image')

      firebase
        .firestore()
        .collection('photos')
        .doc(docId)
        .delete()
        .then(()=>{
          console.log('deleted post')
        })
        .catch((e) => {
          console.log('Post error: ', e)
        })
    })
    .catch((e) => {
      console.log('Storage error: ', e)
    })

    
  }

  return (
    <>
      <div className="flex justify-between p-4">
        <div className="flex">
          <svg
            onClick={handleToggleLiked}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleToggleLiked()
              }
            }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            tabIndex={0}
            className={`w-8 mr-4 select-none cursor-pointer focus:outline-none ${
              toggleLiked ? 'fill-red text-red-primary' : 'text-black-light'
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <svg
            onClick={handleFocus}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleFocus()
              }
            }}
            className="w-8 text-black-light select-none cursor-pointer focus:outline-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            tabIndex={0}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        {/* delete */}
        { user && user.username === username? ( 
          <>
          <div>
            <svg
              onClick={handleDelete}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleDelete()
                }
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 text-black-light select-none cursor-pointer focus:outline-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
          </>
         ) : (<></>)
        } 
        
      </div>
      <div className="p-4 py-0">
        <p className="font-bold">{likes === 1 ? `${likes} like` : `${likes} likes`}</p>
      </div>
    </>
  )
}

Actions.propTypes = {
  docId: PropTypes.string.isRequired,
  totalLikes: PropTypes.number.isRequired,
  likedPhoto: PropTypes.bool.isRequired,
  handleFocus: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
}
