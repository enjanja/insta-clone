/* eslint-disable prettier/prettier */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getFollowersById } from '../../services/firebase'

export default function Followers({...profile }) {

  const {followers} = profile
  const [followersList, setFollowers] = useState([])

  useEffect(() => {
    async function getFollowedUsers(){
      if(followers.length > 0 ){
        const response = await getFollowersById(followers)
        setFollowers(response)
      }else{
        return null
      }
    }
    getFollowedUsers()
  }, [])

  return (
    <div>

  {followersList.length > 0 ? (
    <>
    <div className="p-4">
      {followersList.map((followed) => (
        <Link to={`/p/${followed.username}`} key={followed.docId}>
            <div className="flex items-center px-5 py-2 profile-container img">
              <img
              className="rounded-full w-16 flex mr-3 profile-image"
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
    </>
      ) : (  
      <div className="flex items-center px-5 py-2 justify-center">
        <p className="text-center text-2xl mt-6">No such folk</p>
      </div>)
      }  
    

    </div>
  )
}
