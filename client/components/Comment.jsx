import React from 'react'

function Comment() {
  const handleChange = () => {
    console.log('change')
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('change and submit')
  }
  return (
    <>
      <div className="comment">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} />

          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" onChange={handleChange} />

          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            id="comment"
            name="comment"
            onChange={handleChange}
          />
        </form>
        <button>Submit</button>
      </div>
    </>
  )
}

export default Comment
