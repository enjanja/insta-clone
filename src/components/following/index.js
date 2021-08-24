/* eslint-disable prettier/prettier */

import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getFollowedUsersById } from '../../services/firebase'
// import SuggestedProfile from '../sidebar/suggested-profile'

// function reducer (following, action) {
//   return { following }
// }

export default function Following({ user }) {
  // const reducer = (state, newState) => ({ ...state, ...newState })
  // const initialState = {
  //   following: {}
  // }
  // const [following, dispatch] = useReducer(reducer, {initialState})

  const [following, setFollowing] = useState([])

  useEffect(() => {
    async function getFollowedUsers(){
      const response = await getFollowedUsersById(user.following)
      setFollowing(response)
      // dispatch({
      //   following: response
      // })
    }
    getFollowedUsers()
    if (following === null) {
      return null;
    }
  }, [])

  return (

    <div className="p-4">
      {/* forma za profile */}
      {/* {console.log(following)} */}
      {following.map((followed) => (
        <Link to={`/p/${followed.username}`} key={followed.docId}>
            <div className="flex items-center px-5 py-2">
              <img
              className="rounded-full w-16 flex mr-3"
              src={`/images/avatars/${followed.username}.jpg`}
              alt=""
              onError={(e) => {
                  e.target.src = `/images/avatars/default.png`
              }}
              />
              <p className="font-bold text-sm">{followed.username}</p>
          </div>
        </Link>
          ))}
      
    </div>
  )
}

Following.propTypes = {
  following: PropTypes.array,
  user: PropTypes.object
}