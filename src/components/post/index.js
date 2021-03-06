/* eslint-disable prettier/prettier */
import { useRef } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Image from './image'
import Actions from './actions'
import Footer from './footer'
import Comments from './comments'
import useProfilePhotos from '../../hooks/use-profile-photos'

export default function Post({ content }) {
  const commentInput = useRef(null)
  const handleFocus = () => commentInput.current.focus()
  const { profilePhotos } = useProfilePhotos(content.username)

  // components
  // -> header, image, actions (like & comment icons), footer, comments
  return (
    <div className="post-parent flex items-center justify-center mb-6">
      { profilePhotos!== null? (
        <>
          <div className=" post-container rounded border bg-white border-gray-primary mb-6 ">
            <Header username={content.username} profilePhotos={profilePhotos} />
            <div className="post-image-container">
              <Image src={content.imageSrc} caption={content.caption} />
            </div>
            
            <Actions
              docId={content.docId}
              totalLikes={content.likes.length}
              likedPhoto={content.userLikedPhoto}
              handleFocus={handleFocus}
              username={content.username}
              imageSrc={content.imageSrc}
              imgPath={content.imgPath}
            />
            <Footer caption={content.caption} username={content.username} />
            <Comments
              docId={content.docId}
              comments={content.comments}
              posted={content.dateCreated}
              commentInput={commentInput}
            />
          </div>
        </>
      ):null}
      
    </div>
  )
}

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imgPath:PropTypes.string,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired
  })
}
