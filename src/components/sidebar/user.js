/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import { DEFAULT_IMAGE_PATH } from '../../constants/paths'

export default function User({ username, fullName }) {
  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link to={`/p/${username}`} className="grid grid-cols-3 gap-4 mb-6 items-center">
      <div className="flex items-center justify-between col-span-1 profile-container img">
        <img
          className="rounded-full flex dashboard-profile-image"
          src={`/images/avatars/${username}.jpg`}
          alt=""
          onError={(e) => {
            e.target.src = DEFAULT_IMAGE_PATH
          }}
        />
      </div>
      <div className="col-span-2">
        <p className="font-bold text-sm">{username}</p>
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
    
  )
}

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
}
