/* eslint-disable no-nested-ternary */
import { useContext } from 'react'
import Skeleton from 'react-loading-skeleton'
import PropTypes from 'prop-types'
import LoggedInUserContext from '../context/logged-in-user'
import usePhotos from '../hooks/use-photos'
import Post from './post'

export default function Timeline({ username }) {
  const { user } = useContext(LoggedInUserContext)
  const { photos } = usePhotos(user)
  // console.log(photos)

  return (
    <div className="container col-span-2 mb-16">
      {/* {console.log(user.userId)} */}
      {!photos ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : (
        photos.map((content) => <Post key={content.docId} content={content} username={username} />)
      )}
    </div>
  )
}

Timeline.propTypes = {
  username: PropTypes.string
}
