/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import { useLocation } from 'react-router-dom'

import Footer from "../components/footer"
// import Header from "../components/header"
import FollowingList from "../components/following"
import Header from '../components/header-back-to-profile';

export default function Following() {

    const location = useLocation()
    const profile = location.state;
    // console.log(profile)


  return profile ? (
    <div>
        <Header />
        <div>
            <FollowingList {...profile}/>
        </div>
        <Footer />
    </div>
  ) : null
}
