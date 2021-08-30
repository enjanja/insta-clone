/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
import {  useHistory, Link } from 'react-router-dom'
import {  useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import { getUserByUsername, getUsersByUsername } from '../services/firebase'
import Header from '../components/header'
import 'firebase/firestore'
import Footer from '../components/footer'
// import SuggestedProfile from '../components/sidebar/suggested-profile';

export default function Search( ) {

    const [username, setUsername] = useState('')
    // const [user, setUser] = useState(null)
    const [users, setUsers] = useState(null)
    const history = useHistory()
  
    useEffect(() => {
      async function checkUserExists() {
          if (username!==''){

              const [users] = await getUsersByUsername(username)
              if (users?.userId) {
                // console.log(user)
                setUsers(users)
                console.log(users)
              }
          }
          else {
            setUsers(null)
          }
      }
  
      checkUserExists()
    }, [username, history])
 

    return (
        <div className="bg-gray-background">
            <Header />
            <div className="mx-auto max-w-screen-lg">
                
                    <div>
                        <input
                            aria-label="Search users"
                            type="text"
                            placeholder="Search..."
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setUsername(target.value)} 
                            value={username}
                        />
                        {/* {console.log(username)} */}
                    </div>

            <div>

                {username!=='' && users===null? (
                    <div className="flex items-center px-5 py-2 justify-center">
                        <p className="text-center text-2xl mt-6">User not found</p>
                </div>
                ) : username!==''? (
                    <Link to={`/p/${users.username}`}>
                    <div className="flex items-center px-5 py-2 profile-container">
                        <img
                        className="rounded-full w-16 flex mr-3 profile-image"
                        src={`/images/avatars/${users.username}.jpg`}
                        alt=""
                        onError={(e) => {
                            e.target.src = `/images/avatars/default.png`
                        }}
                        />
                        <p className="font-bold text-sm">{users.username}</p>
                    </div>
                    </Link>
                ):null}
                </div>
            </div>
            <Footer />
        </div>
    )
}

// Search.propTypes = {
//     username: PropTypes.string,
//     loggedInUserDocId: PropTypes.string
//   }
