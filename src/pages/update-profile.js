/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import { useState, useContext, useEffect } from 'react'
// import {  useHistory } from 'react-router-dom'
// // import PropTypes from 'prop-types'
// import FirebaseContext from '../context/firebase'
// import * as ROUTES from '../constants/routes'
// import { doesUsernameExist } from '../services/firebase'
// import UserContext from '../context/user'
// import Header from '../components/header'
// import Footer from '../components/footer'
// // import useUser from '../hooks/use-user'
// import LoggedInUserContext from '../context/logged-in-user'
// // import {
// //   updateLoggedInUserFollowing,
// //   updateFollowedUserFollowers,
// //   getUserByUserId
// // } from '../../services/firebase'

// export default function UpdateProfile() {
//   const history = useHistory()
//   const { firebase } = useContext(FirebaseContext)

//   const { user: loggedInUser } = useContext(UserContext)
//   // const { user: { docId = '', fullName, username, userId, emailAddress, password } = {} } = useContext(LoggedInUserContext)

//   const [usernameUpdate, setUsername] = useState('')
//   const [fullNameUpdate, setFullName] = useState('')
//   const [emailAddressUpdate, setEmailAddress] = useState('')
//   const [passwordUpdate, setPassword] = useState('')

//   const [error, setError] = useState('')
//   const isInvalid = emailAddressUpdate === '' && usernameUpdate === '' && fullNameUpdate === '' && passwordUpdate === ''

//   const handleUpdate = async (event) => {
//     event.preventDefault()

//     const usernameExists = await doesUsernameExist(usernameUpdate)

//     if (!usernameExists) {
//       try {

//         if(username === ''){
//           setUsername(usernameUpdate)
//         }
//         if(emailAddress === ''){
//           setUsername(emailAddressUpdate)
//         }
//         if(fullName === ''){
//           setUsername(fullNameUpdate)
//         }
//         if(password === ''){
//           setUsername(passwordUpdate)
//         }

//         console.log({usernameUpdate, emailAddressUpdate, fullNameUpdate, passwordUpdate})

//         history.push(ROUTES.PROFILE)
//       } catch (error) {
//         setUsername(username)
//         setEmailAddress(emailAddress)
//         setFullName(fullName)
//         setPassword(password)
//         setError(error.message)
//       }
//     } else {
//       setUsername('')
//       setError('That username is already taken, please try another.')
//     }
//   }

//   useEffect(() => {
//     document.title = 'Update profile - Instagram'
//   }, [])

//   return (
//     <div className="bg-gray-background">
//      <Header />
//      {/* { user ? ( */}(
//         <>
//         <div className="container flex mx-auto max-w-screen-md items-center h-screen">

//             <div className="flex flex-col pl-5 pr-5">
//                 <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
//                 <p className="pb-5">Edit user info</p>
//                 {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
//                 <form onSubmit={handleUpdate} method="PUT">

//                     <input
//                       aria-label="Enter your username"
//                       type="text"
//                       placeholder={username}
//                       className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
//                       onChange={({ target }) => setUsername(target.value)}
//                       value={username}
//                     />
//                     <input
//                       aria-label="Enter your full name"
//                       type="text"
//                       placeholder={fullName}
//                       className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
//                       onChange={({ target }) => setFullName(target.value)}
//                       value={fullName}
//                     />
//                     <input
//                       aria-label="Enter your email address"
//                       type="text"
//                       placeholder={emailAddress}
//                       className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
//                       onChange={({ target }) => setEmailAddress(target.value)}
//                       value={emailAddress}
//                     />
//                     <input
//                     aria-label="Enter your password"
//                     type="password"
//                     placeholder={password}
//                     className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
//                     onChange={({ target }) => setPassword(target.value)}
//                     value={password}
//                     />
//                     <button
//                     disabled={isInvalid}
//                     type="submit"
//                     className={`bg-blue-medium text-white w-full rounded h-8 font-bold
//                     ${isInvalid && 'opacity-50'}`}
//                     >
//                     Update
//                     </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//         </>
//           ) : (
//           <>
//           <div className="container flex mx-auto max-w-screen-md items-center h-screen">
//               <p className="flex flex-col pl-5 pr-5">Loading...</p>
//           </div>
//           </>
//           )

//     <Footer />
//     </div>

//   )
// }
