import React, { useState } from 'react'
import { saveComment } from '../api/items'

function AddComment(props) {
  const { itemId } = props

  //form/add comment
  const [formData, setFormData] = useState({
    item_id: Number(itemId),
    name: '',
    date: '',
    body: '',
  })

  const handleType = (evt) => {
    const value = evt.target.value
    const fieldName = evt.target.name
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(formData)
    saveComment(itemId, formData)
  }

  return (
    <>
      <p className="add_comments_title">Add your comment</p>
      <div>
        <form onSubmit={handleSubmit} className="comment_form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleType} />

          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" onChange={handleType} />

          <label htmlFor="body">Comment</label>
          <input type="text" id="body" name="body" onChange={handleType} />
          <button>Add Comment</button>
        </form>
      </div>
    </>
  )
}

export default AddComment
