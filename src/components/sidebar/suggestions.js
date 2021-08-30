/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */

import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import Carousel from 'react-multi-carousel'
import { getSuggestedProfiles } from '../../services/firebase'
import SuggestedProfile from './suggested-profile'

export default function Suggestions({ userId, following, loggedInUserDocId }) {
  const [profiles, setProfiles] = useState(null)
  // podesavanja za slajder
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
      paritialVisibilityGutter: 30
    }
  }

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following)
      setProfiles(response)
    }

    if (userId) {
      suggestedProfiles()
    }
  }, [userId])
  // hint: use the firebase service (call using userId)
  // getSuggestedProfiles
  // call the async function ^^^^ within useEffect
  // store it in state
  // go ahead and render (wait on the profiles as in 'skeleton')

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="mt-4 grid">
        <Carousel
          swipeable
          draggable
          showDots={false}
          responsive={responsive}
          ssr={false}
          deviceType="mobile"
          infinite={false}
          keyBoardControl
          removeArrowOnDeviceType={['mobile']}
          deviceType="mobile"
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {/* <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div> */}
          {profiles.map((profile) => (
            <SuggestedProfile
              key={profile.docId}
              profileDocId={profile.docId}
              username={profile.username}
              profileId={profile.userId}
              userId={userId}
              loggedInUserDocId={loggedInUserDocId}
            />
          ))}
        </Carousel>
      </div>
    </div>
  ) : null
}

Suggestions.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
  loggedInUserDocId: PropTypes.string
}
