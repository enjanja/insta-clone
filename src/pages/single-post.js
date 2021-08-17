// import { useEffect } from 'react'
import { useEffect, useReducer, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import PropTypes from 'prop-types'
import Post from '../components/post'
import { getUserPhotosByUserIdForUser } from '../services/firebase'
import Header from '../components/header'
// import * as ROUTES from '../constants/routes'
// import usePhotos from '../hooks/use-photos'

export default function SinglePost({ user }) {
  console.log(user)
  const { userId, imgId } = useParams()
  const reducer = (state, newState) => ({ ...state, ...newState })
  const initialState = {
    photo: undefined
  }

  //   const history = useHistory()
  //   const [user, setUser] = useState(null)

  //   useEffect(() => {
  //     async function checkUserExists() {
  //       const [userNew] = await getUserByUserId(userId)
  //       if (userNew?.userId) {
  //         setUser(userNew)
  //       } else {
  //         history.push(ROUTES.NOT_FOUND)
  //       }
  //     }

  //     checkUserExists()
  //   }, [userId])

  //   const { photos } = usePhotos(user)
  //   console.log(photos)
  //   let photo
  //   if (photos) {
  //     // eslint-disable-next-line prefer-destructuring
  //     photo = photos.filter((el) => el.docId === imgId)[0]
  //   }

  const [{ photo }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = await getUserPhotosByUserIdForUser(userId, user.uid)

      const photo = photos.filter((el) => el.docId === imgId)[0]
      console.log(photo)
      dispatch({
        photo
      })
    }
    getProfileInfoAndPhotos()
  }, [userId])

  return (
    // <LoggedInUserContext.Provider value={{ user, setActiveUser }}>

    <div className="bg-gray-background ">
      <Header />
      <div className="grid grid-cols-5">
        <div className="col-span-2 mx-auto max-w-screen-lg">
          {!photo ? (
            <Skeleton count={4} width={640} height={500} className="mb-5" />
          ) : (
            <Post key={photo.docId} content={photo} />
          )}
        </div>
      </div>
    </div>

    // <div className="container col-span-2">
    //   {!photo ? (
    //     <Skeleton count={4} width={640} height={500} className="mb-5" />
    //   ) : (
    //     <Post key={photo.docId} content={photo} />
    //   )}
    // </div>
    // </LoggedInUserContext.Provider>
  )
}

SinglePost.propTypes = {
  user: PropTypes.object.isRequired
}
