import React, { useEffect, useState } from 'react'

function AddComment() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    comment: '',
  })

  const [comments, setComments] = useState([])

  useEffect(() => {
    console.log('useEffect')
  }, [])

  const handleType = (evt) => {
    const value = evt.target.value
    const name = evt.target.name
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('submit', formData.name)
  }

  return (
    <>
      <div className="comment">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleType} />

          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" onChange={handleType} />

          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            id="comment"
            name="comment"
            onChange={handleType}
          />
          <button>Submit</button>
        </form>
      </div>

      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.name}</p>
            <p>{comment.date}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default AddComment
