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

export default function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId
}) {
  const [followed, setFollowed] = useState(false)
  const { setActiveUser } = useContext(LoggedInUserContext)

  async function handleFollowUser() {
    setFollowed(true)
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false)
    await updateFollowedUserFollowers(profileDocId, userId, false)
    const [user] = await getUserByUserId(userId)
    setActiveUser(user)
  }

  return !followed ? (
    <div className="suggestion-card rounded bg-white border-gray-primary flex flex-col items-center align-items justify-between mx-1">
      <Link to={`/p/${username}`}>
      <div className="flex flex-col items-center justify-between mb-3">
        <img
          className="rounded-full w-16 flex"
          src={`/images/avatars/${username}.jpg`}
          alt=""
          onError={(e) => {
            e.target.src = `/images/avatars/default.png`
          }}
        />
        <p className="font-bold text-sm mt-2">{username}</p>
      </div>

      
        
      </Link>

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
