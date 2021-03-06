/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import useUser from '../../hooks/use-user'
import { isUserFollowingProfile, toggleFollow } from '../../services/firebase'
import UserContext from '../../context/user'
import { DEFAULT_IMAGE_PATH } from '../../constants/paths'
import * as ROUTES from '../../constants/routes'

export default function Header({ 
  photos,
  photosCount,
  followerCount,
  setFollowerCount, 
  profile: {
    docId: profileDocId,
    userId: profileUserId,
    fullName,
    followers,
    following,
    username: profileUsername
  },

}) {

  const { user: loggedInUser } = useContext(UserContext)
  const { user } = useUser(loggedInUser?.uid)
  const [isFollowingProfile, setIsFollowingProfile] = useState(null)
  const activeBtnFollow = user?.username && user?.username !== profileUsername

  const handleToggleFollow = async () => {
    setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile)
    setFollowerCount({
      followerCount: isFollowingProfile ? followerCount - 1 : followerCount + 1
    })
    await toggleFollow(isFollowingProfile, user.docId, profileDocId, profileUserId, user.userId)
  }

  useEffect(() => {
    const isLoggedInUserFollowingProfile = async () => {
      const isFollowing = await isUserFollowingProfile(user.username, profileUserId)
      setIsFollowingProfile(!!isFollowing)
    }

    if (user?.username && profileUserId) {
      isLoggedInUserFollowingProfile()
    }
  }, [user?.username, profileUserId])

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg pl-3 pt-5 pb-5 pr-5 ">
        <div className="container flex justify-center items-center profile-container">
          { profileUsername && photos.length>0 ? (
            <>
            <img
              className="h-auto w-auto max-h-28 min-h-20 min-w-32 flex profile-image bg-fixed object-cover"
              alt={`${fullName} profile picture`}
              src={photos[0].imageSrc}
              onError={(e) => {
                e.target.src = DEFAULT_IMAGE_PATH
              }}
            />
            </>
          ) : (
            <>
            <img
              className="h-auto w-auto max-h-28 min-h-20 min-w-32 flex profile-image bg-fixed object-cover"
              alt={`${fullName} profile picture`}
              src={DEFAULT_IMAGE_PATH}
            />
            </>
          )}
        </div>
        <div className="flex items-center justify-center flex-col col-span-2">
          <div className="container flex flex-col justify-between">
            <div className="container flex flex-cols-2 justify-between">
              <p className="text-2xl mr-2">{profileUsername}</p>
              {/* update profile */}
              {user && user.username===profileUsername? (
                <>
                <div className="pt-1 border-1 border-gray-primary rounded">
                  
                  <Link to={ROUTES.UPDATE_PROFILE}>
                    <p className="px-3 pb-1 text-gray-700">Edit profile</p>
                  </Link>
                </div>
                </>
               ) : ( 
                 <>
                 </>
                )}
              
            </div>
            
            <div className="container mt-4">
              <p className="font-medium">
                {!fullName ? <Skeleton count={1} height={24} /> : fullName}
              </p>
            </div>     
           </div>
          <div className="container flex mt-4">
            {!followers || !following ? (
              <Skeleton count={1} width={677} height={24} />
            ) : (
              <>
                <p className="mr-5">
                  <span className="font-bold">{photosCount}</span> photos
                </p>
                <p className="mr-5">
                  <Link to={{pathname: ROUTES.FOLLOWERS, state: {followers, profileUserId} }}>
                    <span className="font-bold">{followerCount}</span>
                    {` `}
                    {followerCount === 1 ? `follower` : `followers`}
                  </Link>
                </p>
                {/* ovde sad saljemo username u following */}
                <p className="mr-5">
                  <Link to={{pathname: ROUTES.FOLLOWING , state: {following, profileUserId}}  }>
                    <span className="font-bold">{following?.length}</span> following
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg px-5 pb-5">
        {activeBtnFollow && isFollowingProfile === null ? (
          <Skeleton count={1} width={80} height={32} />
        ) : (
          activeBtnFollow && (
            <button
              className="follow-btn bg-blue-medium font-bold text-sm rounded text-white w-20 h-8 mr-4"
              type="button"
              onClick={handleToggleFollow}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleToggleFollow()
                }
              }}
            >
              {isFollowingProfile ? 'Unfollow' : 'Follow'}
            </button>
          )
        )}
      </div>
    </div>
  )
}

Header.propTypes = {
  photos: PropTypes.array,
  photosCount: PropTypes.number.isRequired,
  followerCount: PropTypes.number.isRequired,
  setFollowerCount: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    docId: PropTypes.string,
    userId: PropTypes.string,
    fullName: PropTypes.string,
    username: PropTypes.string,
    followers: PropTypes.array,
    following: PropTypes.array
  }).isRequired
}
