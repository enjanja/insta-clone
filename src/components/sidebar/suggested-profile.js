/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable prettier/prettier */
import { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
  getUserByUserId
} from '../../services/firebase'
import LoggedInUserContext from '../../context/logged-in-user'
import useProfilePhotos from '../../hooks/use-profile-photos'
import { DEFAULT_IMAGE_PATH } from '../../constants/paths'

export default function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId
}) {
  const [followed, setFollowed] = useState(false)
  const { setActiveUser } = useContext(LoggedInUserContext)
  const { profilePhotos } = useProfilePhotos(username)
  // console.log(profilePhotos)
  let profilePhoto
  

  if(profilePhotos && profilePhotos.userProfilePictures !== undefined){
    // eslint-disable-next-line prefer-destructuring
    profilePhoto = profilePhotos.userProfilePictures[0]
   }

  async function handleFollowUser() {
    setFollowed(true)
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false)
    await updateFollowedUserFollowers(profileDocId, userId, false)
    const [user] = await getUserByUserId(userId)
    setActiveUser(user)
  }

  return !followed ? (
    <div className="suggestion-card rounded bg-white border-gray-primary flex flex-col items-center align-items justify-between mx-1">
      {profilePhoto!==undefined? (
        <>
        <Link to={`/p/${username}`}>
          <div className="flex flex-col items-center justify-between mb-3">
            <img
              className="rounded-full w-16 flex suggestion-profile-image"
              src={profilePhoto.imageSrc}
              alt=""
              onError={(e) => {
                e.target.src = `/images/avatars/default.png`
              }}
            />
            <p className="font-bold text-sm mt-2">{username}</p>
          </div>
        </Link>
        </>
      ):(
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
      )}

      <button
          className="text-xs font-bold text-blue-medium"
          type="button"
          onClick={handleFollowUser}
        >
          Follow
        </button>
      
    </div>
  ) : null
}

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired
}
