/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/img-redundant-alt */
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { DEFAULT_IMAGE_PATH } from '../../constants/paths'

export default function Header({ username, profilePhotos }) {
  let profilePhoto

  if(profilePhotos.userProfilePictures !== undefined){
    profilePhoto = profilePhotos.userProfilePictures[0]
   }

  // console.log(profilePhoto)
  
  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center post-profile-container">
        {profilePhoto!==undefined ? (
          <>
            <Link to={`/p/${username}`} className="flex items-center ">
              <img
                className="rounded-full h-8 w-8 flex mr-3 post-profile-image"
                src={profilePhoto.imageSrc}
                alt={`${username} profile picture`}
              />
              <p className="font-bold">{username}</p>
            </Link>
          </>
         ):( 
         <>
          <Link to={`/p/${username}`} className="flex items-center ">
          <img
              className="h-auto w-auto max-h-28 min-h-20 min-w-32 flex post-profile-image bg-fixed object-cover "
              alt={`${username} profile picture`}
              src={DEFAULT_IMAGE_PATH}
            />
            <p className="font-bold pl-3">{username}</p>
            </Link>
          </> 
         )} 
        
      </div>
    </div>
  )
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
  profilePhotos: PropTypes.object.isRequired
}
