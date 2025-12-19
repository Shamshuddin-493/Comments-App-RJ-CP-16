import './index.css'
// import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, onDelComment, isLiked, toggleIsLiked} = props
  const {id, name, comment} = commentDetails

  const likedImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const delComment = () => {
    onDelComment(id)
  }

  const ontoggleIsLiked = () => {
    toggleIsLiked(id)
  }

  return (
    <li>
      <div>
        <p>{name[0]}</p>
        <div>
          <h1>{name}</h1>
          <p>{comment}</p>
          <button type="button" onClick={ontoggleIsLiked}>
            <img src={likedImg} alt="" />
            Like
          </button>
          <button type="button" onClick={delComment}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="Delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
