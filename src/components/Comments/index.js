import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onDelComment = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id),
    })
  }

  render() {
    const {name, comment, commentsList} = this.state
    return (
      <div>
        <div>
          <h1>Comments</h1>
          <form onSubmit={this.onAddComment}>
            <input
              value={name}
              onChange={this.onChangeName}
              placeholder="Your Name"
            />
            <input
              value={comment}
              onChange={this.onChangeComment}
              placeholder="Your Comment"
            />
            <button type="submit">Add Comment</button>
          </form>
          <div>
            <p>{commentsList.length}</p>
            <p>Comments</p>
          </div>
          <ul>
            {commentsList.map(eachComment => (
              <CommentItem
                commentDetails={eachComment}
                onDelComment={this.onDelComment}
                toggleIsLiked={this.toggleIsLiked}
                isLiked={eachComment.isLiked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
