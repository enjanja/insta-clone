/* eslint-disable prettier/prettier */
// import { useEffect } from 'react'
import { useEffect, useReducer, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import PropTypes from 'prop-types'
import Post from '../components/post'
import { getUserPhotosByUserIdForUser } from '../services/firebase'
// import Header from '../components/header'
import Footer from '../components/footer'
import Header from '../components/header-back-to-profile'
// import * as ROUTES from '../constants/routes'
// import usePhotos from '../hooks/use-photos'

export default function SinglePost({ user }) {
  // console.log(user)
  const { userId, imgId } = useParams()
  const reducer = (state, newState) => ({ ...state, ...newState })
  const initialState = {
    photo: undefined
  }

  const [{ photo }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = await getUserPhotosByUserIdForUser(userId, user.uid)

      const photo = photos.filter((el) => el.docId === imgId)[0]
      // console.log(photo)
      dispatch({
        photo
      })
    }
    getProfileInfoAndPhotos()
  }, [userId])

  return (
    <div className="bg-gray-background ">
      <Header />
      <div className="grid grid-cols-1">
        <div className="col-span-2 max-w-screen-lg mb-12">
          {!photo ? (
            <Skeleton count={4} width={640} height={500} />
          ) : (
            <Post key={photo.docId} content={photo} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

SinglePost.propTypes = {
  user: PropTypes.object.isRequired
}
