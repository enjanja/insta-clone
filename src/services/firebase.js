/* eslint-disable prettier/prettier */
import { firebase, FieldValue } from '../lib/firebase'

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get()

  return result.docs.length > 0
}

export async function getUserByUsername(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get()

  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }))
}

// get user from the firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get()
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }))

  return user
}

export async function getFollowedUsersById(followedUsersIds) {
  // console.log(followedUsersIds)
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', 'in', followedUsersIds)
    .get()
  
  const profiles = result.docs.map((user) => ({
    ...user.data(),
    docId: user.id
  }))
  
  return profiles
}

export async function getFollowersById(followersIds) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', 'in', followersIds)
    .get()
  
  const profiles = result.docs.map((user) => ({
    ...user.data(),
    docId: user.id
  }))
  
  return profiles
}

export async function getUsersByUsername(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '>=', username)
    .orderBy('username', 'asc')
    .get()

  return result.docs.map((user) => ({
    ...user.data(),
    docId: user.id
  }))
}

// check all conditions before limit results
export async function getSuggestedProfiles(userId, following) {
  let query = firebase.firestore().collection('users')

  if (following.length > 0) {
    query = query.where('userId', 'not-in', [...following, userId])
  } else {
    query = query.where('userId', '!=', userId)
  }
  const result = await query.limit(10).get()

  const profiles = result.docs.map((user) => ({
    ...user.data(),
    docId: user.id
  }))

  return profiles
}

// search users by username
export async function searchUsersByUsername(username) {
  
  const result = firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get()

  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }))
}

export async function updateLoggedInUserFollowing(
  loggedInUserDocId, // currently logged in user document id (karl's profile)
  profileId, // the user that karl requests to follow
  isFollowingProfile // true/false (am i currently following this person?)
) {
  return firebase
    .firestore()
    .collection('users')
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId)
    })
}

export async function updateFollowedUserFollowers(
  profileDocId, // currently logged in user document id (karl's profile)
  loggedInUserDocId, // the user that karl requests to follow
  isFollowingProfile // true/false (am i currently following this person?)
) {
  return firebase
    .firestore()
    .collection('users')
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(loggedInUserDocId)
        : FieldValue.arrayUnion(loggedInUserDocId)
    })
}

export async function getPhotos(userId, following) {
  // [5,4,2] => following
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', 'in', following)
    .get()

  const userFollowedPhotos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id
  }))

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      let userLikedPhoto = false
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true
      }
      // photo.userId = 2
      const user = await getUserByUserId(photo.userId)
      // raphael
      const { username } = user[0]
      return { username, ...photo, userLikedPhoto }
    })
  )

  return photosWithUserDetails
}

export async function getUserPhotosByUserIdForUser(userId, user) {
  const result = await firebase
    .firestore()
    .collection('photos')
    .orderBy('dateCreated','desc')
    .where('userId', '==', userId)
    .get()

  const photos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id
  }))

  const userT = user
  const photosWithUserDetails = await Promise.all(
    photos.map(async (photo) => {
      let userLikedPhoto = false
      if (photo.likes.includes(userT)) {
        userLikedPhoto = true
      }
      // photo.userId = 2
      const user = await getUserByUserId(photo.userId)
      // raphael
      const { username } = user[0]
      // console.log(userLikedPhoto)
      return { username, ...photo, userLikedPhoto }
    })
  )

  return photosWithUserDetails
}

export async function getProfilePhotos(userId) {
  // [5,4,2] => following
  const result = await firebase
    .firestore()
    .collection('profilePictures')
    .where('userId', '==', userId)
    .get()

  const userProfilePictures = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id
  }))
  return userProfilePictures
}

export async function getProfilePhotosByUsername(username) {

  let user
  let userProfilePictures 

  if(username!==undefined){
    user = await getUserByUsername(username)

    const {userId} = user[0]

    if(userId){
      const result2 = await firebase
      .firestore()
      .collection('profilePictures')
      .where('userId', '==', userId)
      .get()

      userProfilePictures = result2.docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id
      }))
    }
  }

  
    const photos = {
    user,
    userProfilePictures
  }

  // console.log(userProfilePictures)

  return photos
}

export async function getUserPhotosByUserId(userId) {
  const result1 = await firebase
    .firestore()
    .collection('photos')
    .orderBy('dateCreated', 'desc')
    .where('userId', '==', userId)
    .get()

  const photosGallery = result1.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id
  }))

  const profilePictures = await getProfilePhotos(userId)

  const photos = {
    photosGallery,
    profilePictures,
  }
  // console.log(photosGallery)
  // console.log(profilePictures)

  return photos
}



export async function isUserFollowingProfile(loggedInUserUsername, profileUserId) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', loggedInUserUsername) // karl (active logged in user)
    .where('following', 'array-contains', profileUserId)
    .get()

  const [response = {}] = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id
  }))

  return response.userId
}

export async function toggleFollow(
  isFollowingProfile,
  activeUserDocId,
  profileDocId,
  profileUserId,
  followingUserId
) {
  // 1st param: karl's doc id
  // 2nd param: raphael's user id
  // 3rd param: is the user following this profile? e.g. does karl follow raphael? (true/false)
  await updateLoggedInUserFollowing(activeUserDocId, profileUserId, isFollowingProfile)

  // 1st param: karl's user id
  // 2nd param: raphael's doc id
  // 3rd param: is the user following this profile? e.g. does karl follow raphael? (true/false)
  await updateFollowedUserFollowers(profileDocId, followingUserId, isFollowingProfile)
}
