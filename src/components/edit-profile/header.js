/* eslint-disable prettier/prettier */
import { useContext } from 'react'
import {  useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
// import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import useUser from '../../hooks/use-user'
import * as ROUTES from '../../constants/routes'

export default function Header({user}) {
  // const { user: loggedInUser } = useContext(UserContext)
  // const { user } = useUser(loggedInUser?.uid)
//   const { firebase } = useContext(FirebaseContext)
  const history = useHistory()

  return (
    <header className="h-16 bg-white border-b border-gray-primary home-header">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer ml-3">
                {  console.log(user.username)}
                <button
                  type="button"
                  title="back"
                  onClick={() => {
                    history.push(`/p/${user.username}`)
                    // history.goBack()
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      history.push(`/p/${user.username}`)
                      // history.goBack()
                    }
                  }}
                >
                  <svg 
                    className="w-8 text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke="currentColor">
                    <path 
                        strokeLinecap="round"
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M11 17l-5-5m0 0l5-5m-5 5h12" 
                    />
                    </svg>
                </button>
          </div>
        </div>      
      </div>
    </header>
  )
}

Header.propTypes = {
  user: PropTypes.object
}