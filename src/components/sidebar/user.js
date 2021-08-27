/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable prettier/prettier */
import useState from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { DEFAULT_IMAGE_PATH } from '../../constants/paths'
import useProfilePhotos from '../../hooks/use-profile-photos'

export default function User({ username, fullName, userId }) {

  const { profilePhotos } = useProfilePhotos(username)
  let profilePhoto
  
  if(profilePhotos && profilePhotos.userProfilePictures !== undefined){
    // eslint-disable-next-line prefer-destructuring
    profilePhoto = profilePhotos.userProfilePictures[0]
   }

  return !username || !fullName || profilePhoto===undefined ?(
    <>
    <Link to={`/p/${username}`} className="flex items-center ">
      <div className="flex flex-col items-center justify-between mb-3 post-profile-container">
        <img
          className="h-auto w-auto max-h-28 min-h-20 min-w-32 flex suggestion-profile-image  "
          alt={`${username} profile picture`}
          src={DEFAULT_IMAGE_PATH}
        />
        <p className="font-bold pl-3">{username}</p>
      </div>
    </Link>
    </>
  ) : (
    <>
    <Link to={`/p/${username}`} className="grid grid-cols-4 gap-4 mb-6 items-center">
      <div className="flex items-center justify-between col-span-1">
        <img
          className="rounded-full w-16 flex mr-3 suggestion-profile-image"
          src={profilePhoto.imageSrc}
          alt=""
          onError={(e) => {
            e.target.src = DEFAULT_IMAGE_PATH
          }}
        />
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{username}</p>
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
    </>
    
  )
}

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
  userId: PropTypes.string
}
