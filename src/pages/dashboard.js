import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Timeline from '../components/timeline'
import Sidebar from '../components/sidebar'
import useUser from '../hooks/use-user'
import LoggedInUserContext from '../context/logged-in-user'
import Footer from '../components/footer'
import {storage} from '../lib/firebase'

export default function Dashboard({ user: loggedInUser }) {
  const { user, setActiveUser } = useUser(loggedInUser.uid)
  useEffect(() => {
    document.title = 'Instagram'
  }, [])




  return (
    <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
      <div className="bg-gray-background">
        <Header />
        <div className="grid gap-4 justify-between mx-auto max-w-screen-lg">
          <Sidebar />
        </div>
        <div className="grid gap-4 mx-auto max-w-screen-lg">
          <Timeline />
        </div>
        <Footer />
      </div>
    </LoggedInUserContext.Provider>
  )
}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired
}
