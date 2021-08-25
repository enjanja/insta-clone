/* eslint-disable prettier/prettier */
import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import FirebaseContext from '../context/firebase'
import UserContext from '../context/user'
import * as ROUTES from '../constants/routes'

export default function Header() {
  const { user: loggedInUser } = useContext(UserContext)
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()

  return (
    <header className="h-16 bg-white border-b border-gray-primary home-header">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center pl-5">
              <Link to={ROUTES.DASHBOARD} aria-label="Instagram logo">
                <img src="/images/logo.png" alt="Instagram" className="mt-2 w-24" />
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 text-center flex items-center align-items mr-5">
            {loggedInUser ? (
              <>
                <button
                  type="button"
                  title="Sign Out"
                  onClick={() => {
                    firebase.auth().signOut()
                    history.push(ROUTES.LOGIN)
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      firebase.auth().signOut()
                      history.push(ROUTES.LOGIN)
                    }
                  }}
                >
                  <svg
                    className="w-8 text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                  >
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button
                    type="button"
                    className="font-bold text-sm rounded text-blue-medium w-20 h-8"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
