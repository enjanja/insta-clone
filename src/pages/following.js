/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import { useLocation } from 'react-router-dom'
// useParams, useHistory,
// import { useState, useEffect } from 'react'
// import { getUserByUsername } from '../services/firebase'
// import * as ROUTES from '../constants/routes'

import Footer from "../components/footer"
import Header from "../components/header"
import FollowingList from "../components/following"

export default function Following() {

    const location = useLocation()
    const profile = location.state;
    // console.log(profile)


  return profile ? (
    <div>
        <Header />
        <div>
            {/* {console.log("ovo je div")} */}
            <FollowingList {...profile}/>
        </div>
        <Footer />
    </div>
  ) : null
}
