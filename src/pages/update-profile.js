/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { useState, useContext, useEffect } from 'react'
import {  useHistory } from 'react-router-dom'
// import PropTypes from 'prop-types'
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes'
import useUser from '../hooks/use-user'
import {
    // getUserByUserId,
    doesUsernameExist
  } from '../services/firebase'
import UserContext from '../context/user'
import Header from '../components/edit-profile/header'

export default function UpdateProfile() {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)

  const { user: loggedInUser } = useContext(UserContext)
  const { user } = useUser(loggedInUser?.uid)

  let usernameSub
  let fulldNameSub
  let emailAddressSub

  const [usernameField, setUsernameField] = useState('')
  const [fullNameField, setFullNameField] = useState('')
  const [emailAddressField, setEmailAddressField] = useState('')

  const [error, setError] = useState('')
  const isInvalid = usernameField === '' && fullNameField === '' && emailAddressField === '' 

  
  const handleUpdate = async (event) => {
    event.preventDefault()

    const usernameExists = await doesUsernameExist(usernameField)
    
    if (!usernameExists) {
      try {

        if(usernameField.length === 0){
            usernameSub = user.username
        }else {
            usernameSub = usernameField
        }
        if(fullNameField.length === 0){
            fulldNameSub = user.fullName
        }else {
            fulldNameSub = fullNameField
        }
        if(emailAddressField.length === 0){
            emailAddressSub = user.emailAddress
        }else {
            emailAddressSub = emailAddressField
        }

        await firebase
          .firestore()
          .collection('users')
          .doc(user.docId)
          .update({
            username: usernameSub.toLowerCase(),
            fullName: fulldNameSub,
            emailAddress: emailAddressSub.toLowerCase(),
          })

        history.push(`/p/${usernameSub}`)
      } catch (error) {
        setUsernameField(user.username)
        setFullNameField(user.fullName)
        setEmailAddressField(user.emailAddress)
        setError(error.message)
      }
    } else {
      setError('That username is already taken, please try another.')
    }
  }

  useEffect(() => {
    document.title = 'Update profile - Instagram'
  }, [])

  return (
    <div className="bg-gray-background">

     { user ? (
        <>  
        <Header user={user}/>
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">

            <div className="flex flex-col pl-5 pr-5">
                <div className="flex flex-col items-center bg-white p-4 border border-gray-primary rounded mb-14">
                <p className="pb-5">Edit user info</p>
                {error && <p className="mb-4 text-xs text-red-primary container flex mx-auto max-w-screen-md">{error}</p>}
                <form onSubmit={handleUpdate} method="POST">

                    <input
                      aria-label="Enter your username"
                      type="text"
                      placeholder={user.username}
                      className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                      onChange={({ target }) => setUsernameField(target.value)}
                      value={usernameField}
                    />
                    <input
                      aria-label="Enter your full name"
                      type="text"
                      placeholder={user.fullName}
                      className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                      onChange={({ target }) => setFullNameField(target.value)}
                      value={fullNameField}
                    />
                    <input
                      aria-label="Enter your email address"
                      type="text"
                      placeholder={user.emailAddress}
                      className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                      onChange={({ target }) => setEmailAddressField(target.value)}
                      value={emailAddressField}
                    />
                    <button
                    disabled={isInvalid}
                    type="submit"
                    className={`bg-blue-medium text-white w-full rounded h-8 font-bold
                    ${isInvalid && 'opacity-50'}`}
                    >
                    Update
                    </button>
                    </form>
                </div>
            </div>
        </div>
        </>
        ) : (<></>)     
    }

    </div>

  )
}

