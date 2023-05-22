import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getComments } from '../api/items'

function Comment() {
  const { id } = useParams()

  const [comment, commentItem] = useState([])

  useEffect(() => {
    getComments(id)
      .then((comment) => commentItem(comment))
      .catch((err) => err.message)
  }, [id])

  return (
    <>
      <div className="show-comments">
        <ul>
          {comment.map((comment, index) => {
            return (
              <p key={index}>
                <li>{comment.body}</li>
              </p>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Comment
