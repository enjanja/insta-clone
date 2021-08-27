/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react'
import { getProfilePhotosByUsername } from '../services/firebase'

export default function useProfilePhotos(username) {
  const [profilePhotos, setPhotos] = useState(null)
  // console.log(username)

  useEffect(() => {
    async function getTimelinePhotos() {

        const profilePhotos = await getProfilePhotosByUsername(username)
         setPhotos(profilePhotos)
    }

    getTimelinePhotos()
  }, [username])

  return { profilePhotos }
}