import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getComments } from '../api/items'

function Comments() {
  const { id } = useParams()

  const [comment, commentItem] = useState([])

  useEffect(() => {
    getComments(id)
      .then((comment) => commentItem(comment))
      .catch((err) => err.message)
  }, [id])

  return (
    <>
      <div className="all_comments">
        <ul>
          {comment.map((comment, index) => {
            return (
              <div key={index}>
                <p>Name: {comment.name}</p>
                <p>Date: {comment.date}</p>
                <p>{comment.body}</p>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Comments
