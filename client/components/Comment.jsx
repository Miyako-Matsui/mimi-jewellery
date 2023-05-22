import React, { useEffect, useState } from 'react'
import { getComments } from '../api/items'

function Comment() {
  // const { id } = useParams()

  // const [item, setItem] = useState([])

  // useEffect(() => {
  //   getItem(id)
  //     .then((item) => setItem(item))
  //     .catch((err) => err.message)
  // }, [id])

  // show comment
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(id)
      .then((comments) => setComments(comments))
      .catch((err) => err.message)
  }, [])

  return (
    <>
      <div className="show-comments">
        <ul>
          {comments.map((comment, index) => {
            return (
              <p key={index}>
                <li>{comment.comment}</li>
              </p>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Comment
