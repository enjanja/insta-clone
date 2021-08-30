/* eslint-disable prettier/prettier */
import { useContext } from 'react'
import { Link } from 'react-router-dom'
// import FirebaseContext from '../context/firebase'
import UserContext from '../context/user'
import * as ROUTES from '../constants/routes'
// import { DEFAULT_IMAGE_PATH } from '../constants/paths'
import useUser from '../hooks/use-user'
// import useProfilePhotos from '../hooks/use-profile-photos'

export default function Footer() {
  const { user: loggedInUser } = useContext(UserContext)
  const { user } = useUser(loggedInUser?.uid)
  // const { firebase } = useContext(FirebaseContext)
  // const history = useHistory

  return (
    <footer className="home-footer h-16 bg-white border-t border-gray-primary">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full mr-5 ml-5">
           {loggedInUser ? (
              <>
              <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                  <svg
                    className="w-8 flex text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </Link>
                </div>
                <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                <Link to={ROUTES.SEARCH} aria-label="Search">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-8 flex text-black-light cursor-pointer" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                <path
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
              </div>
              <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                <Link to={ROUTES.POST_UPLOAD} aria-label="Search">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-8 flex text-black-light cursor-pointer" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              </div>
                {user && (
                  <div className="flex items-center cursor-pointer">
                    <Link to={`/p/${user?.username}`}>
                      {/* <img
                        className="rounded-full h-8 w-8 flex"
                        src={`/images/avatars/${user?.username}.jpg`}
                        alt={`${user?.username} profile`}
                        onError={(e) => {
                          e.target.src = DEFAULT_IMAGE_PATH
                        }}
                      /> */}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-8 flex text-black-light cursor-pointer" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                        />
                      </svg>
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                  <svg
                    className="w-8 flex text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </Link>
                </div>
                <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                <Link to={ROUTES.SEARCH} aria-label="Search">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-8 flex text-black-light cursor-pointer" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                <path
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
              </div>
              </>
            )}
          </div>
        </div>
    </footer>
  )
}

